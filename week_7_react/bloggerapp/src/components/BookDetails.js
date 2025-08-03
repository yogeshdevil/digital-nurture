import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div className="column">
      <h2>Book Details</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map(book => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
