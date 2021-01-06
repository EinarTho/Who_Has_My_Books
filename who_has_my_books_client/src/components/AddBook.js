import React, { useState } from 'react';
const axios = require('axios');

export default function AddBook(props) {
  //when should this be done with usestate?
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');
  const { bookList, setBookList } = props;

  const addBook = e => {
    e.preventDefault();
    console.log('im clicked');
    //post with axios - the name and isbn will be sent with the body of the request
    //server will respond with whole list of books if the isbn was found.
    //if ISBN was not found, last entry will have everything but the lender unkown.
    //setList to the response. On mount the welcome back will fetch the list.
  };

  return (
    <div>
      <form onSubmit={addBook}>
        <input type='text' placeholder='Name of lender' />
        <input type='text' placeholder='isbn' />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
}
