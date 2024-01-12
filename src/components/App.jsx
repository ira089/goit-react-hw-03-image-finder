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
      images: [
        {id: 195893 ,
        largeImageURL: "",
        webformatURL: '',
        tags: "blossom",
    },
    {id: 195999 ,
    largeImageURL: "",
    webformatURL: '',
    tags: "flower",
}
      ],
       search: '',
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    }
// searchImg = (evt) => {
//     console.log(evt)
//     this.setState({search: evt.target.value})
// }
// addSearch = (searchValue) => {
//     console.log('qwe')
//     this.setState(({images}) => {
//         return {images: [...images, data]}
//     })
// }


    addSearch = (searchValue) => {
        console.log('qwe')
        this.setState({search: searchValue})
    }

    render() {
        const {state, addSearch} = this
        return (
            <>
            <Searchbar search={state.search} onSubmit={addSearch}/>
            <div className={styles.app}>
            <ImageGallery items={state.images} />
            </div>
            </> 
             
            
        )
    }
}

export default App;

// 

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