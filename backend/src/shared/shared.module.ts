import { WalletService } from './services/wallet.service';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [WalletService, Logger],
  exports: [WalletService],
})
export class SharedModule {}
