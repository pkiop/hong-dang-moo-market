import './style.scss';
import Category from '../Category';

function CategoryList({ categoryList }) {
  const CategoryListComponent = categoryList.map((category) => {
    return <Category title={category.title} />;
  });
  return (
    <div className='category-list'>
      <div className='category-list__title'>카테고리</div>
      {CategoryListComponent}
    </div>
  );
}

export default CategoryList;
