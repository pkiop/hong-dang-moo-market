import './style.scss';
import CategoryList from '../../components/CategoryList';
import CategoryInput from '../../components/CategoryInput';
import useApiCall from '../../hooks/useApiCall';
import { useState } from 'react';

function CategoryPage() {
  const [loading, categoryData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/category`
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!categoryData) {
    // null일경우
    return <></>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className='category-page'>
      <CategoryList
        categoryList={categoryData}
        categoryFetch={fetchData}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryInput
        categoryFetch={fetchData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default CategoryPage;
