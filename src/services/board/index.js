const BoardModel = require('../../models/board');

exports.listBoard = async () => {
  try {
    const boards = await BoardModel.find({}).exec();
    return boards;
  } catch(err) {
    console.error(err);
    return [];
  }
};
