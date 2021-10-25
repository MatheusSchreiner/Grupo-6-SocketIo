const model = require('../models/productModel');

const getAll = async (req, res) => {
  try {
    const result = await model.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Sorry, something went wrong :('});
  }
};

module.exports = {
  getAll,
};