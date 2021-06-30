import './style.scss';
import Category from '../Category';

function CategoryList({ categoryList, setSelectedCategory }) {
  const CategoryListComponent = categoryList.map((category) => {
    return (
      <Category
        key={category._id}
        onClick={() => {
          setSelectedCategory(category);
        }}
        title={category.title}
      />
    );
  });
  return (
    <div className='category-list'>
      <div className='category-list__title'>카테고리</div>
      {CategoryListComponent}
    </div>
  );
}

export default CategoryList;
