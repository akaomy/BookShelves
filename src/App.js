import React , { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI'
import AllBooks from './components/AllBooks';

export default function App () {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        BooksAPI.getAll()
        .then((books) => {
            setBooks({ books },
            setLoading({ loading: false }))
        })
        .catch(error => console.log(error))    
    }, [])

    return (
        <>
            {loading ? <p>Loading, please wait</p> : ''}
            <AllBooks books={books}/>
        </>
    )
}