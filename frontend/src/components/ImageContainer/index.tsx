import { Skeleton } from '@mui/material';
import { Button } from '@mui/material';

const defaultImage = '/assets/images/default-nft.png';
const ImageContainer = ({ url }: { url: string }) => {
  const onImageError = (e: any) => {
    if (e.target.src !== defaultImage) {
      e.target.src = defaultImage;
      console.log('updated with default image');
    }
  };

  const imgUrl = () => {
    if (!url) return '';
    if (url.startsWith('ipfs://')) {
      return 'https://ipfs.io/ipfs/' + url.split('://')[1];
    }
    return url;
  };

  return (
    // <img src={imgUrl() || defaultImage} alt='nft' onError={onImageError} />
    <Skeleton height='120%' />
  );
};

export default ImageContainer;
