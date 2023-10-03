const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

async function listChats(userId) {
  let filter = {};
  if (userId) {
    filter = { users: userId }
  }

  const users = await Model.find(filter)
    .populate('users')
    .exec();

  return users;
}

module.exports = {
  add: addChat,
  list: listChats,
}
