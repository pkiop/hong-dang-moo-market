import './style.scss';
import Board from '../Board';
import Content from './Content';
function Detail({ boardData, setVisible }) {
  return (
    <div className='board-components-wrapper'>
      <Board
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        price={boardData.price}
        user={boardData.user}
        imageLink={boardData.imageLink}
      />
      <Content setVisible={setVisible} content={boardData.contents} />
    </div>
  );
}

export default Detail;
