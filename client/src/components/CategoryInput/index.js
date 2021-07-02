import './style.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CategoryInput({
  selectedCategory = null,
  setSelectedCategory,
  categoryFetch,
}) {
  const [inputValue, setInputValue] = useState(selectedCategory?.title ?? '');
  // || 는 앞에 falsy 값 (false로 간주되는 값 (0, false, null, undefined) 이 왔을 때 뒤에 값을 사용)
  // ??(null 병합 연산자) 는 앞에 null, undefined 일 때

  useEffect(() => {
    setInputValue(selectedCategory?.title ?? '');
  }, [selectedCategory]); // selectedCategory가 바뀌었을 때 inputValue를 update해줌

  const addCategory = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/category`, {
      title: inputValue,
    });
    categoryFetch();
  };

  const updateCategory = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/api/category`, {
      _id: selectedCategory._id,
      title: inputValue,
    });
    categoryFetch();
  };

  const deleteCategory = async () => {
    await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/category/${selectedCategory._id}`
    );
    setSelectedCategory(null);
    categoryFetch();
  };

  const cancelCategory = () => {
    setSelectedCategory(null);
  };

  if (!selectedCategory) {
    return (
      <div className='category-input'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }} // e 에 input 입력 이벤트에 대한 정보가 있음.
        />
        <button onClick={addCategory}>추가하기</button>
      </div>
    );
  }
  return (
    <div className='category-input'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }} // e 에 input 입력 이벤트에 대한 정보가 있음.
      />
      <div className='button-wrapper'>
        <button onClick={updateCategory} className='green'>
          수정하기
        </button>
        <button onClick={deleteCategory} className='red'>
          삭제하기
        </button>
        <button onClick={cancelCategory}>취소하기</button>
      </div>
    </div>
  );
}

export default CategoryInput;
