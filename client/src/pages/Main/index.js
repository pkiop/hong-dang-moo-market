import Board from '../../components/Board';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Write from '../../components/Write';
import Detail from '../../components/Detail';

import './style.scss';

import { useState } from 'react';

const imageLink =
  'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
const initTestData = [
  {
    id: 1,
    title: '1',
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
    detailText: '첫번째 상품입니다.',
  },
  {
    id: 2,
    title: '2',
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
    detailText: '두번째 상품입니다.',
  },
  {
    id: 3,
    title: '3',
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
    detailText: '세번째 상품입니다.',
  },
];

function Main() {
  const [testData, setTestData] = useState(initTestData);
  const [boardData, setBoardData] = useState(null);
  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData.id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        money={boardData.money}
        user={boardData.user}
        imageLink={boardData.imageLink}
        setBoardData={() => {
          setBoardData({ ...boardData });
        }}
      />
    );
  });

  const [visible, setVisible] = useState(false);
  const buttonList = [
    { title: '홈', color: 'red' },
    { title: '검색', color: 'blue' },
    { title: '내글', color: 'green' },
  ];
  return (
    <div>
      <Header />
      {boardData === null ? (
        <div className="board-components-wrapper">{BoardComponents}</div>
      ) : (
        <Detail
          boardData={boardData}
          setTestData={setTestData}
          setBoardData={setBoardData}
          setVisible={setVisible}
        />
      )}

      <Footer buttonList={buttonList} />
      <button onClick={() => setVisible((state) => !state)}>+</button>
      <button className="closeButton" onClick={() => setVisible(!visible)}>
        -
      </button>
      {visible ? (
        <Write
          boardData={boardData}
          setBoardData={setBoardData}
          setData={setTestData}
          setVisible={setVisible}
        />
      ) : null}
    </div>
  );
}

export default Main;
