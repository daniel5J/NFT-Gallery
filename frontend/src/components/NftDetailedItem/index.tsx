import { FC } from 'react';
import { tNftItem } from 'src/types/tNftItem';
import './NftItem.scss';

interface INftItemProps {
  item: tNftItem;
}

const defaultImage = '/assets/images/default-nft.png';
export const NftDetailedItem: FC<INftItemProps> = ({ item }) => {
  const onImageError = (e: any) => {
    if (e.target.src !== defaultImage) {
      e.target.src = defaultImage;
      console.log('updated with default image');
    }
  };

  const imgUrl = () => {
    if (!item.metadata?.image) return '';
    if (item.metadata?.image.startsWith('ipfs://')) {
      return 'https://ipfs.io/ipfs/' + item.metadata?.image.split('://')[1];
    }
    return item.metadata?.image;
  };

  return (
    <div className='nft-detailed-item'>
      <div className='image-wrapper'>
        <img
          src={imgUrl() || defaultImage}
          alt={item.name}
          onError={onImageError}
        />
      </div>
      <div className='information'>
        <label>
          <b>{item.name}</b>
        </label>
        <label>{item.symbol}</label>
        <label>{item.metadata.description}</label>
      </div>
      <a
        href={`https://opensea.io/assets/ethereum/${
          item.token_address
        }/${item.token_id.toString()}`}
        target='_blank'
        rel='noreferrer'
      >
        Buy
      </a>
    </div>
  );
};
