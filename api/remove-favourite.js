const { connectDb } = require('./_db');

module.exports = async (req, res) => {
  const { title } = req.body;
  const { Favourite } = await connectDb();
  await Favourite.deleteOne({ title });
  const favourites = await Favourite.find();
  return res.send(favourites);
};
