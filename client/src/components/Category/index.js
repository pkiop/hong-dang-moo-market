import './style.scss';

function Category({ title }) {
  return (
    <div className='category-block'>
      <div>{title}</div>
    </div>
  );
}

export default Category;
