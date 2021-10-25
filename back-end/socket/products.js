const { increaseValue, getById } = require('../models/productModel');

module.exports = (io) => {
  io.on('connection',  (socket) => {
    socket.on('increaseValue', async ({ id }) => {
      await increaseValue(id);
      const product = await getById(id);
      io.emit('refreshValues', product);
    });
  });
};