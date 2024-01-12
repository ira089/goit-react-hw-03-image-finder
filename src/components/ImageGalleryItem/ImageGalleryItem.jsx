
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id,url, tags }) => {
  return (
    <li className={styles.imageGalleryItem} key={id} id={id}>
     <img className={styles.imageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;