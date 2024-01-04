import { useState, useEffect } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);
  const booksPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lists = ['hardcover-fiction', 'trade-fiction-paperback', 'hardcover-nonfiction'];
        const results = await Promise.all(
          lists.map(list =>
            fetch(
              `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=fs58TEnqIWzJdpTcPyeP6LBKzACZym3l`
            )
              .then(response => response.json())
              .then(data => {
                if (data.results && data.results.books) {
                  return data.results.books.map(book => ({
                    title: book.title,
                    author: book.author,
                  }));
                }
                return [];
              })
          )
        );

        const nytBooks = [].concat(...results);

        const books = await Promise.all(
          nytBooks.map(book =>
            fetch(
              `https://www.googleapis.com/books/v1/volumes?q=${book.title}+inauthor:${book.author}&key=AIzaSyCXpIqtgTPsAl9iH24ejHvPbHh0Tgx5yjs`
            )
              .then(response => response.json())
              .then(data => {
                const result = data.items && data.items[0];
                if (result) {
                  const title = result.volumeInfo.title;
                  const cover = result.volumeInfo.imageLinks
                    ? result.volumeInfo.imageLinks.thumbnail
                    : '';
                  return { title, cover };
                }
                return null;
              })
          )
        );

        setBooks(books.filter(book => book));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Calculate the start and end index for the current page
  const startIndex = page * booksPerPage;
  const endIndex = startIndex + booksPerPage;

  // Get the books for the current page
  const booksToDisplay = books.slice(startIndex, endIndex);

  return (
    <>
      <div className='bookcase-flex'>
        {booksToDisplay.map(book => (
          <div className="bookcircle" key={book.title} onClick={() => setSelectedBook(book)}>
            <img src={book.cover} alt={book.title} />
          </div>
        ))}
      </div>
      <div>
        {/* Render page buttons */}
        {[0, 1, 2, 3, 4].map(pageNumber => (
          <button key={pageNumber} onClick={() => setPage(pageNumber)}>
            Page {pageNumber + 1}
          </button>
        ))}
      </div>
      {/* Render pop-up with selected book information */}
      {selectedBook && (
        <div className="popup">
          <h2>{selectedBook.title}</h2>
          <img src={selectedBook.cover} alt={selectedBook.title} />
          <button onClick={() => setSelectedBook(null)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Books;
