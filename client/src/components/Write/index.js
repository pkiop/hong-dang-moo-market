import React, { useState } from 'react';
import './style.scss';

const imageLink =
  'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
function Write({ setData, setBoardData, boardData, setVisible }) {
  const [title, setTitle] = useState(setData.title ?? '');

  const updateBoardData = () => {
    setData((state) => {
      const id = boardData.id;
      const newState = state.map((board) => {
        if (board.id !== id) {
          return board;
        } else {
          return {
            id: id,
            title: title,
          };
        }
      });
      setVisible(false);
      setBoardData(null);
      return newState;
    });
  };
  if (boardData === null) {
    return (
      <div className="write">
        <span className="fixed">글 제목</span>
        <div className="item">
          글 제목 :{' '}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <button onClick={() => setData((state) => [...state, test])}>
          Add
        </button>
      </div>
    );
  } else {
    // 여기는 수정하기
    return (
      <div className="write">
        <span className="fixed">글 제목</span>
        <div className="item">
          글 제목 :{' '}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <button onClick={updateBoardData}>Update</button>
      </div>
    );
  }
}

export default Write;

// position
// static, fixed, absolute, relative
