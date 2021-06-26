const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();
const port = 4000;

const { connect: dbConnect } = require('./models');

dbConnect();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

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
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
