import React, { useState } from 'react';
import { NftItem } from 'src/components/NftItem';
import { NftDetailedItem } from 'src/components/NftDetailedItem';
import { useAppSelector } from 'src/hooks/useAppSelector';
import TransitionsModal from 'src/components/TransitionsModal';

import './Home.scss';
import './NftList.scss';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(0);

  const address = useAppSelector((state) => state.account.address);
  const ownedNftList = useAppSelector((state) => state.nft.ownedNfts);

  const handleClickItem = (index: any) => {
    setSelectedNft(index);
    setModalOpen(true);
  };

  console.log(ownedNftList);
  return (
    <div className='home-page'>
      {address ? (
        <div className='nft-list'>
          {ownedNftList.length
            ? ownedNftList.map((nft, index) => (
                <div
                  key={nft.token_hash + index}
                  onClick={() => handleClickItem(index)}
                >
                  <NftItem item={nft} />
                </div>
              ))
            : 'No NFTs'}
        </div>
      ) : (
        'Please input address'
      )}
      <TransitionsModal
        open={modalOpen}
        title='NFT Info'
        handleClose={() => setModalOpen(false)}
      >
        <NftDetailedItem item={ownedNftList[selectedNft]} />
      </TransitionsModal>
    </div>
  );
}
