import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items }) => {
  const elements = items.map(item => (
    <ImageGalleryItem
      key={item.id}
      id={item.id}
      url={item.webformatURL}
      alt={item.tags}
      
    />
  ));
  return <ul className={styles.imageGallery}>{elements}</ul>;
};

export default ImageGallery;

  