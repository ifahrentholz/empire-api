const { connectDb } = require('./_db');

module.exports = async (req, res) => {
  const { courses } = req.body;
  const { Course } = await connectDb();
  await Course.deleteMany();
  await Course.insertMany(courses);
  res.send(courses);
};
