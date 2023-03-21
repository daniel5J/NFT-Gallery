import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SharedModule, ConfigModule],
  controllers: [UserController],
  providers: [UserService, Logger],
})
export class UserModule {}
