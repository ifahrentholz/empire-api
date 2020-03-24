const { connectDb } = require('./_db');

module.exports = async (req, res) => {
  const { Course } = await connectDb();
  const courses = await Course.find();
  return res.send(courses);
};
