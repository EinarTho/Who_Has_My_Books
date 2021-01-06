import React from 'react';

export default function Welcome(props) {
  const { userName, bookList } = props;
  return (
    <div>
      <h1>Welcome {userName}</h1>
      <p>These are the books you have lent out:</p>
      {bookList.map((book, index) => {
        return (
          <div>
            <p>{index + 1}</p>
            <p>Title: {book.title}</p>
            <p>Borrower: {book.borrower}</p>
            <button>Click to return</button>
          </div>
        );
      })}
      <br />
      <button>Add borrowed book</button>
    </div>
  );
}
