const { connectDb } = require('./_db');

module.exports = async (req, res) => {
  const { Favourite } = await connectDb();
  const favourites = await Favourite.find();
  return res.send(favourites);
};
