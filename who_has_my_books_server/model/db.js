const mongoose = require('mongoose');
const uri = process.env.DB_CONNECTIONSTRING;

const connect = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connected');
    })
    .catch(err => console.log(err));
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  bookList: {
    type: Array,
  },
});

const UserDocument = mongoose.model('User', userSchema);
module.exports.UserDocument = UserDocument;
module.exports.connect = connect;

//what about password and id?
//I can wait with authentication,
//the id is automatically given..
//how do I access it? It is sent back on login?
