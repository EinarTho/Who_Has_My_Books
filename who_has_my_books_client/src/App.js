import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import AddBook from './components/AddBook';

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
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome userName={userName} bookList={bookList} />
          </Route>
          <Route exact path='/addbook'>
            <AddBook bookList={bookList} setBookList={setBookList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
