import './style.scss';

function Content({ content, setVisible }) {
  const updateBoardData = () => {
    setVisible(true);
  };

  return (
    <div className='detail-content'>
      <div className='content-title'>글 내용</div>
      <div className='content-text'>{content}</div>
      <div className='buttons'>
        <button onClick={updateBoardData}>수정하기</button>
      </div>
    </div>
  );
}

export default Content;
