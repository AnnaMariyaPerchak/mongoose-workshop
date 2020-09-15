module.exports = {
  createBook
};

function createBook(req, res, next) {
  return res.json({work: true});
}
