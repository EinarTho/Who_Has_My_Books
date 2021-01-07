const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');

router.get('/', async (req, res, next) => {
  try {
    await controllers.getUsers(req, res);
  } catch (e) {
    res.send(e);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    //validate req.body - validate only cares that the user is correct, anything else can be present
    await controllers.addNewUser(req, res);
  } catch (e) {
    res.send(e);
  }
});

router.post('/login', (req, res, next) => {
  res.send('some list of lent out books as well as access token');
});

router.post('/addbook', (req, res, next) => {
  try {
    controllers.addBooksForUser(req, res);
  } catch (e) {
    res.send(e);
  }
});

router.post('/deliverbook', (req, res, next) => {
  res.send('book delivered');
});

router.post('/books', async (req, res, next) => {
  try {
    await controllers.getBooksForUser(req, res);
  } catch (e) {
    res.send(e);
  }
});

router.get('/:user', async (req, res) => {
  try {
    await controllers.getUser(req, res);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
