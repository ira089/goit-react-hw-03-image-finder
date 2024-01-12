// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGalleryj";

// import MyBooksForm from "./MyBooksForm/MyBooksForm";


import styles from "./App.module.css";
// const KEY_API = '40910000-bc8f7501355e0c431b692ba0e'

class App extends Component {
    state = {
      image: [
        {id: 195893 ,
        largeImageURL: "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
        webformatURL: 'https://lh3.googleusercontent.com/proxy/1z7YRnQ_qMR-eL9jvcTk9a3szBiK1B8q41yG5hvpPakLDMIz_9BzA5D9edpsMdDbPbUsfbNnFBDPJcbu-Kz2R9-dzx3I_u7A_rfl0BF6szJsO20C-LdfiA',
        tags: "blossom",
    },
    {id: 195999 ,
    largeImageURL: "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
    webformatURL: 'https://media.izi.travel/b01d3830-4c8c-481e-9df9-b9bd0d5a69f1/3b0962e9-bc5c-41b0-be8a-f5ad17cbfd14_800x600.jpg',
    tags: "flower",
}
      ]
       
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    
    render() {
        
        return (
            <>
            <Searchbar/>
            <div className={styles.app}>
            <ImageGallery items={this.state.image} />
            </div>
            </> 
             
            
        )
    }
}

export default App;

// changeFitler = ({ target }) => {
    //     this.setState({
    //         filter: target.value
    //     })
    // }

    // getFilteredBooks() {
    //     const { filter, books } = this.state;
    //     if (!filter) {
    //         return books;
    //     }

    //     const normalizedFilter = filter.toLowerCase();

    //     const filteredBooks = books.filter(({ title, author }) => {
    //         const normalizedTitle = title.toLowerCase();
    //         const normalizedAuthor = author.toLowerCase();

    //         return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
    //     });

    //     return filteredBooks;
    // }