import { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  render() {
    console.log(this.props);
    const { urlModal, tags } = this.props;
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={urlModal} alt={tags} />
        </div>
      </div>
    );
  }
}
// const Modal = ({ urlModal, tags }) => {
//   return (

//   );
// };

export default Modal;
