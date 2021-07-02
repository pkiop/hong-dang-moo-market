const express = require('express');
const router = express.Router();
const boardRouter = require('./board');
const categoryRouter = require('./category');
const authRouter = require('./auth');

router.use('/board', boardRouter);
router.use('/category', categoryRouter);
router.use('/auth', authRouter);

module.exports = router;
