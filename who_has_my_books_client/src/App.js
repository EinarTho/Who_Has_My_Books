import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('Marlon');
  const [bookList, setBookList] = useState([
    {
      author: 'Einar Thomasen',
      title: 'How to live an authentic life',
      published: '2024',
      borrower: 'Ayaka Mihara',
      isbn: '12345678',
    },
  ]);
  return (
    <div className='App'>
      <Welcome userName={userName} bookList={bookList} />
    </div>
  );
}

export default App;
