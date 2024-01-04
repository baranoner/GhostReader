import { useState, useEffect } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from audiobook API
    fetch('https://librivox.org/api/feed/audiobooks/title/^all')
      .then(response => response.json())
      .then(data => {
        // Map the data to an array of objects containing the title of each book
        const books = data.map(book => ({ title: book.title }));

        // Fetch cover images for each book using the Open Library Covers API
        Promise.all(books.map(book =>
          fetch(`https://openlibrary.org/api/books?bibkeys=OCLC:${encodeURIComponent(book.title)}&format=json&jscmd=data`)
            .then(response => response.json())
            .then(data => {
              const key = Object.keys(data)[0];
              return { ...book, cover: data[key].cover.medium };
            })
        ))
          .then(booksWithCovers => setBooks(booksWithCovers));
      });
  }, []);

  return (
    <div className='bookcase-flex'>
      {books.map(book => (
        <div className="bookcircle" key={book.title}>
          <img src={book.cover} alt={book.title} />
        </div>
      ))}
    </div>
  )
}

export default Books;
