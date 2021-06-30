import './style.scss';

function CategoryInput({ selectedCategory = null }) {
  if (selectedCategory) {
    return (
      <div className='category-input'>
        <input type='text' />
        <button>추가하기</button>
      </div>
    );
  }
  return (
    <div className='category-input'>
      <input type='text' />
      <div className='button-wrapper'>
        <button className='green'>수정하기</button>
        <button className='red'>삭제하기</button>
      </div>
    </div>
  );
}

export default CategoryInput;
