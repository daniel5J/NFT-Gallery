import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ethers } from 'ethers';
import { verifyMessage } from 'ethers/lib/utils';
import { SiweMessage } from 'siwe';

@Injectable()
export class WalletService {
  constructor(
    private readonly logger: Logger,
  ) {}

  async authorize(
    signature: string,
    nonce: string,
    address: string,
    message: string,
  ): Promise<void> {
    try {
      const siwe = new SiweMessage(JSON.parse(message));
      siwe.nonce = nonce;
      siwe.address = address;
      const message1 = siwe.prepareMessage();
      const recoveredAddress = verifyMessage(message1, signature);
      if (recoveredAddress !== address) {
        throw 'Address not match';
      }
    } catch (error) {
      this.logger.warn(`Failed to verify signature with error ${error}`);

      throw new UnauthorizedException({
        message: 'Failed to verify signature.',
        code: 'Invalid signature',
      });
    }
  }

  validateAddress(address: string): void {
    if (ethers.utils.isAddress(address)) return;

    this.logger.warn('The address type is invalid.');
    throw new BadRequestException('Invalid Address');
  }
}
