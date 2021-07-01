const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const categoryRouter = require('./category');

router.use('/board', boardRouter);
router.use('/category', categoryRouter);

module.exports = router;
