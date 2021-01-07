import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import AddBook from './components/AddBook';
import LoginPage from './components/Loginpage';

function App() {
  const [userName, setUserName] = useState({ name: 'Marlon', token: '123' });
  const [bookList, setBookList] = useState([
    {
      author: 'Einar Thomasen',
      title: 'How to live an authentic life',
      published: '2024',
      borrower: 'Ayaka Mihara',
      isbn: '12345678',
    },
  ]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            {loggedIn ? (
              <Welcome userName={userName} bookList={bookList} />
            ) : (
              <LoginPage />
            )}
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
