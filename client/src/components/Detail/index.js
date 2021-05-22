import './style.scss';
import Board from '../Board';
function Detail({ boardData, setTestData, setBoardData, setVisible }) {
  const updateBoardData = () => {
    setVisible(true);
  };

  const deleteBoardData = () => {
    const id = boardData.id;
    setTestData((state) => {
      const newState = state.filter((board) => {
        return id !== board.id;
      });
      setBoardData(null);
      return newState;
    });
  };

  return (
    <div>
      <Board
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        money={boardData.money}
        user={boardData.user}
        imageLink={boardData.imageLink}
      />
      <div className="detail">
        <div>글 내용</div>
        <div>{boardData.detailText}</div>
        <div className="buttons">
          <button onClick={updateBoardData}>수정하기</button>
          <button onClick={deleteBoardData}>삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
