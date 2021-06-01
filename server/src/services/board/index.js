const BoardModel = require('../../models/board');

const listBoard = async () => {
  try {
    const boards = await BoardModel.find({}).exec();
    return boards;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getBoardById = async (boardId) => {
  try {
    const board = await BoardModel.findOne({ id: boardId }).exec();
    return board;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const addBoard = async ({ boardId, title, content }) => {
  try {
    await BoardModel.create({ id: boardId, title, content }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

const updateBoard = async ({ boardId, title, content }) => {
  try {
    const query = { id: boardId };
    await BoardModel.updateOne(query, { title, content }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

const deleteBoard = async ({ boardId }) => {
  try {
    const query = { id: boardId };
    await BoardModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = {
  listBoard,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
