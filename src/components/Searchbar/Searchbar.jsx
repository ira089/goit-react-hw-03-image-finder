import { Component } from 'react';
import { SiSearxng } from 'react-icons/si';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('mumu');
    this.props.onSubmit(this.state.search);
  };

  handleChange = ({ target }) => {
    console.log(target.value);
    this.setState({
      search: target.value,
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>
              <SiSearxng />
            </span>
          </button>

          <input
            className={styles.searchFormInput}
            onChange={handleChange}
            type="text"
            name="serch"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
{
  /* <SiSearxng /> */
}
