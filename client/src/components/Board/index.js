import './style.scss';

function Board({
  title,
  category,
  time,
  price,
  user,
  imageLink,
  setBoardData,
}) {
  return (
    <div className='board' onClick={setBoardData}>
      <div className='picture'>
        <img alt={title} src={imageLink} />
      </div>
      <div className='contents'>
        <div className='title'>{title}</div>
        <div className='category-time'>
          <div className='category'>{category}</div>
          <div className='time'>{time}</div>
        </div>
        <div className='money-user'>
          <div className='money'>{price}</div>
          <div className='user'>{user}</div>
        </div>
      </div>
    </div>
  );
}

export default Board;
