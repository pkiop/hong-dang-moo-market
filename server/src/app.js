const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();
const port = 4000;

const { connect: dbConnect } = require('./models');

dbConnect();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.static('public'));

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('my server');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
