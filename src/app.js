const express = require('express');
const app = express();
const port = 3000;
const { listBoard } = require('./services/board');

const { connect: dbConnect } = require('./models');

dbConnect();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('my server');
})

app.get('/api/board', async (req, res) => {
  const boards = await listBoard();
  res.send(boards);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
