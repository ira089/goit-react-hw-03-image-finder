import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, url, tags, urlModal, showModal }) => {
  return (
    <li
      key={id}
      className={styles.imageGalleryItem}
      onClick={() => showModal({ urlModal, tags })}
    >
      <img className={styles.imageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
