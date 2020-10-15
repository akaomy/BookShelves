import React from 'react';
import BookShelf from './BookShelf';
import 'fontsource-roboto';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
                <h1>My Book Shelves</h1>
              </div>
              <div className="list-books-content">
                <div>
                {this.bookShelfTitles.map( item => {
                  return (
                    <BookShelf 
                      key={item.id} 
                      title={item.book} 
                    />
                  )
                })}
                </div>
              </div>
              <div className="open-search">
                <ButtonGroup>
                  <Button
                    startIcon={<AddIcon />}
                    style={{
                      fontSize: '20px'
                    }}
                    size="large"
                    variant="contained" 
                    color="primary" 
                    onClick={() => this.onButtonClick()}>
                      Add a book
                  </Button>
                  {/* this button will trigger edit mode */}
                  {/* todo: add checkboxes for each book in edit mode, 
                  so user can select a book and then click on delete btn */}
                  <Button
                    startIcon={<DeleteIcon />}
                    style={{
                      fontSize: '20px'
                    }}
                    color="secondary"
                  >
                    Delete a book
                  </Button>
                  </ButtonGroup>
              </div>
            </div>
            }
          </div>
      )
  }
}

export default AllBooks;