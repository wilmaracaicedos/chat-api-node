const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect(`mongodb+srv://wilmaracaicedos:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.lipiocn.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});
console.log('[db] Conectada con éxito');

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
}
