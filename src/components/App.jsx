import { Component } from 'react';
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
      }));
    } catch (error) {
      this.setState({
        error: error.message,
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
    const { search, images } = this.state;
    const isImages = Boolean(images.length);
    return (
      <>
        <div className={styles.app}>
          <Searchbar search={search} onSubmit={addSearch} />
          {state.loading && <Loader />}

          <ImageGallery items={images} />
        </div>
        {isImages && <Button onClick={addPag}>Load more</Button>}
      </>
    );
  }
}

export default App;
