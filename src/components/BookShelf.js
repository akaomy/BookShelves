import React from 'react'
import Book from './Book'

export default function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                <li>
                    <Book />
                    <Book />
                </li>
            </ol>
            </div>
        </div>
    )
}