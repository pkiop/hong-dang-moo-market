import Board from "../../components/Board";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Write from "../../components/Write";
import Detail from "../../components/Detail";

import "./style.scss";

import { useState } from "react";
import useApiCall from "../../hooks/useApiCall";

function Main() {
  const [loading, testData, error, fetchData] = useApiCall(
    "http://localhost:4000/api/board"
  );
  const [boardData, setBoardData] = useState(null);
  const [visible, setVisible] = useState(false);

  if (!testData) {
    return <></>;
  }

  if (loading) {
    return <>로딩중...</>;
  }

  if (error) {
    return <>에러 : {error}</>;
  }

  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData._id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        price={boardData.price}
        user={boardData.user}
        imageLink={boardData.imageLink}
        setBoardData={() => {
          setBoardData({ ...boardData });
        }}
      />
    );
  });

  const buttonList = [
    { title: "홈", color: "red" },
    { title: "검색", color: "blue" },
    { title: "내글", color: "green" },
  ];
  return (
    <div>
      <Header />
      {boardData === null ? (
        <div className="board-components-wrapper">{BoardComponents}</div>
      ) : (
        <Detail
          boardData={boardData}
          setTestData={() => {}}
          setBoardData={setBoardData}
          setVisible={setVisible}
        />
      )}

      <Footer buttonList={buttonList} />
      <button
        className="open-button"
        onClick={() => setVisible((state) => !state)}
      ></button>

      {visible ? (
        <Write
          boardData={boardData}
          setBoardData={setBoardData}
          setData={() => {}}
          setVisible={setVisible}
          fetchData={fetchData}
        />
      ) : null}
    </div>
  );
}

export default Main;
