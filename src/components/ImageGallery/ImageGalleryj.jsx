// import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, showModal }) => {
  const elements = items.map(item => (
    <ImageGalleryItem
      key={item.id}
      url={item.url}
      alt={item.tags}
      urlModal={item.urlModal}
      // showModal={showModal}
    />
  ));
  return <ul className={styles.imageGallery}>{elements}</ul>;
};

export default ImageGallery;
