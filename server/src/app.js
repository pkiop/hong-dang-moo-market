const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const {
  listBoard,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
} = require('./services/board');

const { connect: dbConnect } = require('./models');

dbConnect();

// req.body 에 담긴 걸 사용하기 위한 미들웨어 입니다.
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('my server');
});

app.get('/api/board', async (req, res) => {
  const boards = await listBoard();
  res.send(boards);
});

// /api/board/1
// /api/board/2
// 이런식으로 하면 한개만 가져옵니다~
app.get('/api/board/:id', async (req, res) => {
  const board = await getBoardById(Number(req.params.id));
  res.send(board);
});

// 여기서부턴 POSTMAN 이란 걸 사용해서 테스트 할 수 있습니다

app.post('/api/board', async (req, res) => {
  await addBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send('입력 완료');
});

app.put('/api/board', async (req, res) => {
  await updateBoard({
    boardId: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.send('수정 완료');
});

app.delete('/api/board', async (req, res) => {
  await deleteBoard({ boardId: req.body.id });
  res.send('삭제 완료');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
