import React from 'react'
import BookShelf from './BookShelf'


class AllBooks extends React.Component {
  state = {
    showSearchPage: false
  }
  
  bookShelfTitles = [
    { 
      id: 1,
      book: 'Currently Reading'
    },
    { 
      id: 2,
      book: 'Want to Read'
    },
    { 
      id: 3,
      book: 'Read'
    }
  ]

  onButtonClick() {
    const boolean = this.state.showSearchPage === true ? false : true 
    this.setState({ showSearchPage: boolean })
  }

  render(){
      return(
          <div className="list-books">
            {this.state.showSearchPage ? 
              <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.onButtonClick()}>Close</button>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div> 
            : 
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                {this.bookShelfTitles.map( item => {
                  return <BookShelf key={item.id} name={item.book} />
                })}
                {/* {this.books.map(item => {
                  return <li>{item.name}</li>
                })} */}
                  </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.onButtonClick()}>Add a book</button>
              </div>
            </div>
            }
          </div>
      )
  }
}

export default AllBooks;