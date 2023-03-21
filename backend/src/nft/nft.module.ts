import { Module, Logger } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftController } from './nft.controller';
import { ConfigModule } from 'src/config/config.module';
import { SharedModule } from 'src/shared/shared.module';
import { WalletService } from 'src/shared/services/wallet.service';

@Module({
  imports: [ConfigModule, SharedModule],
  controllers: [NftController],
  providers: [NftService, Logger],
})
export class NftModule {}
