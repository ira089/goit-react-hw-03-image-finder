import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, url, tags }) => {
  return (
    <li key={id} className={styles.imageGalleryItem}>
      <img className={styles.imageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
