import { Controller, Get, Param } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get("owned/:address")
  getOwnedNfts(@Param("address") address: string) {
    return this.nftService.getOwnedNfts(address);
  }
}
