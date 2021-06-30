import './style.scss';

function Category({ title, onClick }) {
  return (
    <div onClick={onClick} className='category-block'>
      <div>{title}</div>
    </div>
  );
}

export default Category;
