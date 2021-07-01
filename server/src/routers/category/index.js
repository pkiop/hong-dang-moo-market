const express = require('express');
const router = express.Router();

const { category } = require('../../services');

const {
  listCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = category;

router.get('/', async (req, res) => {
  const categories = await listCategory();
  res.send(categories);
});

router.get('/:id', async (req, res) => {
  const category = await getCategoryById(Number(req.params.id));
  res.send(category);
});

router.post('/', async (req, res) => {
  await addCategory({
    categoryId: req.body.id,
    title: req.body.title,
  });
  res.send('입력 완료');
});

router.put('/', async (req, res) => {
  await updateCategory({
    categoryId: req.body._id,
    title: req.body.title,
  });
  res.send('수정 완료');
});

router.delete('/:id', async (req, res) => {
  await deleteCategory({ categoryId: req.params.id });
  res.send('삭제 완료');
});

module.exports = router;
