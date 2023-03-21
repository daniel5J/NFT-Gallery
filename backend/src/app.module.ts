import { ConfigModule } from './config/config.module';
import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { NftController } from './nft/nft.controller';
import { NftService } from './nft/nft.service';
import { NftModule } from './nft/nft.module';
import { WalletService } from './shared/services/wallet.service';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, NftModule],
  controllers: [AppController, NftController],
  providers: [AppService, Logger, NftService, WalletService],
})
export class AppModule {}
