import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };
  showModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };
  render() {
    const { id, url, tags, urlModal } = this.props;
    const { modalOpen } = this.state;
    return (
      <>
        <li
          key={id}
          className={styles.imageGalleryItem}
          onClick={this.showModal}
        >
          <img className={styles.imageGalleryItemImage} src={url} alt={tags} />
        </li>
        {modalOpen && <Modal urlModal={urlModal} close={this.closeModal} />}
      </>
    );
  }
}
// const ImageGalleryItem = ({ id, url, tags, urlModal, showModal }) => {
//   return (
//     <li
//       key={id}
//       className={styles.imageGalleryItem}
//       onClick={() => showModal({ urlModal, tags })}
//     >
//       <img className={styles.imageGalleryItemImage} src={url} alt={tags} />
//     </li>
//   );
// };

export default ImageGalleryItem;
