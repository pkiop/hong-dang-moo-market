import './style.scss';
import CategoryList from '../../components/CategoryList';
import CategoryInput from '../../components/CategoryInput';

function CategoryPage() {
  const categoryList = [
    {
      title: '가전',
    },
    {
      title: '노트북',
    },
    {
      title: '가구',
    },
    {
      title: '가전',
    },
    {
      title: '노트북',
    },
    {
      title: '가구',
    },
  ];
  return (
    <div className='category-page'>
      <CategoryList categoryList={categoryList} />
      <CategoryInput />
    </div>
  );
}

export default CategoryPage;
