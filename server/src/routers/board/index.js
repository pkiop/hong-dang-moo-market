const express = require('express');
const router = express.Router();

const { board } = require('../../services');

const { listBoard, getBoardById, addBoard, updateBoard, deleteBoard } = board;

router.get('/', async (req, res) => {
  const boards = await listBoard();
  res.send(boards);
});

router.get('/:id', async (req, res) => {
  const board = await getBoardById(Number(req.params.id));
  res.send(board);
});

router.post('/', async (req, res) => {
  await addBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send('입력 완료');
});

router.put('/', async (req, res) => {
  await updateBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send('수정 완료');
});

router.delete('/', async (req, res) => {
  await deleteBoard({ boardId: req.body.id });
  res.send('삭제 완료');
});

module.exports = router;
