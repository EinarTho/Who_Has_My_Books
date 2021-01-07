const { UserDocument } = require('../model/db');
const UserModel = require('../model/db');

//the error should be caught in the routes files, so I don't need try catch here?
const addNewUser = async (req, res) => {
  const newUser = new UserDocument({
    username: req.body.username,
    bookList: req.body.bookList,
  });
  await newUser.save();

  res.send('registered new user');
};

const login = async credentials => {};

const getUsers = async (req, res) => {
  const users = await UserDocument.find({});
  res.send(users);
};

const getBooksForUser = async (req, res) => {
  console.log(req.body.username);
  const user = await UserDocument.findOne({ username: req.body.username });
  console.log(user);
  res.send(user.bookList);
};

const addBooksForUser = async (req, res) => {
  console.log(req.body);
  const bookList = JSON.parse(req.body.bookList);
  await UserDocument.findOneAndUpdate(
    { username: req.body.username },
    { bookList: bookList }
  );
  res.send(req.body.bookList);
};

const getUser = async (req, res) => {
  const user = await UserDocument.find({ username: req.params.user });
  res.send(user);
};

module.exports = {
  addNewUser,
  login,
  getUsers,
  getUser,
  getBooksForUser,
  addBooksForUser,
};

// const newUser = new UserDocument({
//   username: 'Marlon van Berkum',
// });

// newUser.save(err => {
//   if (err) return console.log(err);
//   return console.log('user saved');
// });

// UserDocument.find({ username: 'Marlon van Berkum' }, (err, result) => {
//   console.log(result);
// });
