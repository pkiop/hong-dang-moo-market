import './style.scss';

function Board({ title, category, time, money, user, imageLink }) {
  return (
    <div className="board">
      <div className="picture">
        <img alt={title} src={imageLink} />
      </div>
      <div className="contents">
        <div className="title">{title}</div>
        <div className="category-time">
          <div className="category">{category}</div>
          <div className="time">{time}</div>
        </div>
        <div className="money-user">
          <div className="money">{money}</div>
          <div className="user">{user}</div>
        </div>
      </div>
    </div>
  );
}

export default Board;
