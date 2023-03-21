import { WalletService } from './../shared/services/wallet.service';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SiweMessage } from 'siwe';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly logger: Logger,
    private readonly walletService: WalletService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    this.walletService.authorize(
      data.signature,
      this.configService.getConfig()["SIWE_NONCE"],
      data.address,
      data.message,
    );

    delete data.signature;
    delete data.message;

    return await this.userRepository.save(data);
  }

  async getUser(address: string): Promise<User | Object> {
    const user = await this.findOneUserByAddress(address);
    if (!user) {
      return new Object();
    }

    this.logger.log(`User found: address is ${user.address}`);
    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    this.walletService.authorize(
      updateUserDto.signature,
      updateUserDto.id,
      updateUserDto.address,
      updateUserDto.message,
    );

    delete updateUserDto.signature;
    delete updateUserDto.message;
    const user = await this.findOneUserByAddress(updateUserDto.address);
    if (!user) {
      this.logger.log(`User not found with address ${updateUserDto.address}`);
      throw new InternalServerErrorException('User not found');
    }
    await this.userRepository.update(
      {
        address: ILike(updateUserDto.address),
      },
      { ...updateUserDto },
    );

    return this.findOneUserByAddress(updateUserDto.address);
  }

  private async findOneUserByAddress(address: string) {
    this.walletService.validateAddress(address);
    return await this.userRepository.findOneBy({ address: ILike(address) });
  }
}
