const { connection } = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const find = await db.collection('produtos').find().toArray();
  return find;
};

const getById = async (id) => {
  const db = await connection();
  const findId = await db.collection('produtos').findOne({_id: ObjectId(id) });
  return findId;
};

const increaseValue = async (id) => {
  const db = await connection();
  const upVote = await db.collection('produtos')
    .updateOne({_id: ObjectId(id) }, { $inc: { value: 10 } });
  return upVote;
}

module.exports = {
  getAll,
  getById,
  increaseValue,
}