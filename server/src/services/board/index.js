const BoardModel = require('../../models/board');

exports.listBoard = async () => {
  try {
    const boards = await BoardModel.find({}).exec();
    return boards;
  } catch (err) {
    console.error(err);
    return [];
  }
};

exports.getBoardById = async (boardId) => {
  try {
    const board = await BoardModel.findOne({ id: boardId }).exec();
    return board;
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.addBoard = async ({ boardId, title, content }) => {
  try {
    await BoardModel.create({ id: boardId, title, content }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.updateBoard = async ({ boardId, title, content }) => {
  try {
    const query = { id: boardId };
    await BoardModel.updateOne(query, { title, content }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

exports.deleteBoard = async ({ boardId }) => {
  try {
    const query = { id: boardId };
    await BoardModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};
