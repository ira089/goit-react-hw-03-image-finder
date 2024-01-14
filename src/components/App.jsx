import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGalleryj';
import Loader from './Loader/Loader';
import Button from './Button/Button';
// import Modal from './Modal/Modal';
import searchImg from '../api/api';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    search: '',
    loading: false,
    error: null,
    page: 1,
    modalOpen: false,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.fetchImgs();
    }
  }

  async fetchImgs() {
    const { search, page } = this.state;
    try {
      this.setState({ loading: true });
      // this.setState({status: 'pending'})
      const imagesApi = await searchImg(search, page);
      const { hits } = imagesApi;
      // console.log(hits);
      const newhits = hits.map(hit => ({
        id: hit.id,
        tags: hit.tags,
        url: hit.webformatURL,
        urlModal: hit.largeImageURL,
      }));
      // console.log(newhits);
      this.setState(({ images }) => ({
        images: newhits?.length ? [...images, ...newhits] : images,
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({
        error: error.message,
        status: 'rejected',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  addSearch = searchValue => {
    // console.log('qwe');
    this.setState({ search: searchValue, page: 1, images: [] });
  };

  addPag = () => {
    // console.log('first');
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { state, addSearch, addPag } = this;
    const { search, images, error } = this.state;
    const isImages = Boolean(images.length);

    // if (this.state.status === 'pending') return <Loader />
    // else if (this.state.status === 'resolved') return  <ImageGallery items={images} />
    // else if (this.state.status === 'rejected')
    //   return <p className={styles.error}>Error!</p>;

    return (
      <>
        <div className={styles.app}>
          <Searchbar search={search} onSubmit={addSearch} />
          {error && <p className={styles.error}>Error!</p>}
          {state.loading && <Loader />}

          <ImageGallery items={images} />
        </div>
        {isImages && <Button onClick={addPag}>Load more</Button>}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
