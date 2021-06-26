import React, { useState } from "react";
import Input from "./Input";
import "./style.scss";

function Write({ setData, setBoardData, boardData, setVisible }) {
  const [title, setTitle] = useState(setData.title ?? "");
  const [imageLink, setImageLink] = useState(setData.imageLink ?? "");
  const [category, setCategory] = useState(setData.category ?? "");
  const [price, setPrice] = useState(setData.price ?? "");
  const [content, setContent] = useState(setData.content ?? "");

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
        <div className="inputs-wrapper">
          <Input title={"글 제목"} setValue={setTitle} />
          <Input title={"사진 링크"} setValue={setImageLink} />
          <Input title={"카테고리"} setValue={setCategory} />
          <Input title={"가격"} setValue={setPrice} inputType={"number"} />
          <Input title={"글 내용"} setValue={setContent} />
          <div className="button-wrapper">
            <button
              className="green"
              onClick={() => setData((state) => [...state, test])}
            >
              작성하기
            </button>
            <button
              className="red"
              onClick={() => {
                setVisible(false);
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // 여기는 수정하기
    return (
      <div className="write">
        <div className="inputs-wrapper">
          <Input title={"글 제목"} setValue={setTitle} />
          <Input title={"사진 링크"} setValue={setImageLink} />
          <Input title={"카테고리"} setValue={setCategory} />
          <Input title={"가격"} setValue={setPrice} inputType={"number"} />
          <Input title={"글 내용"} setValue={setContent} />
          <div className="button-wrapper">
            <button className="green" onClick={updateBoardData}>
              수정하기
            </button>
            <button className="red" onClick={updateBoardData}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;

// position
// static, fixed, absolute, relative
