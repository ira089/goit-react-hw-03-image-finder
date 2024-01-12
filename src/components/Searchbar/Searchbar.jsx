import { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    
    render() {
        
        return (
            <header className={styles.searchbar}>
  <form className={styles.searchForm}>
    <button type="submit" className={styles.searchFormButton}>
      <span className={styles.searchFormButtonLabel}>Search</span>
    </button>

    <input className={styles.searchFormInput}
      
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
            
        )
    }
}

export default Searchbar;

