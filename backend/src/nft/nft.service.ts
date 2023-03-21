import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from 'src/config/config.service';
import { WalletService } from 'src/shared/services/wallet.service';
import { MoralisNftDto } from './dto/moralis-nft.dto';

@Injectable()
export class NftService {
  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigService,
    private readonly walletService: WalletService,
  ) {}

  async getOwnedNfts(address: string) {
    this.walletService.validateAddress(address);
    try {
      const nfts1 = await this.getOwnedNftsFromChainId("eth", address);
      const nfts2 = await this.getOwnedNftsFromChainId("matic", address);
      return [...nfts1, ...nfts2];
    } catch (error) {
      this.logger.warn(`Failed to get from Moralis ${error}`);

      throw new InternalServerErrorException('Failed to get from Moralis.');
    }
  }

  async getOwnedNftsFromChainId(chain: string, address: string) {
    try {
      const res = await axios.get(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=${chain}&format=decimal`, {
        headers: {
          'X-API-Key': this.configService.getConfig()['MORALIS_API'],
        },
      });
      const nfts = res.data.result as MoralisNftDto[];
      return nfts.map((nft) => ({ ...nft, chain }));
    } catch (error) {
      this.logger.warn(`Failed to get from Moralis ${error}`);

      throw new InternalServerErrorException('Failed to get from Moralis.');
    }
  }
}
