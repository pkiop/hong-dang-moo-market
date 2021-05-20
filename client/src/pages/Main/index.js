import Board from '../../components/Board';
import Footer from '../../components/Footer';
import Write from '../../components/Write';
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
  },
  {
    id: 2,
    title: '2',
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
  },
  {
    id: 3,
    title: '3',
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
  },
];

function Main() {
  const [testData, setTestData] = useState(initTestData);

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
      />
    );
  });

  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>홍당무마켓</div>
      {BoardComponents}
      <Footer buttonList={['버튼1111', '버튼112', '버튼113']} />
      <button onClick={() => setVisible((state) => !state)}>+</button>
      <button className="closeButton" onClick={() => setVisible(!visible)}>
        -
      </button>
      {visible ? <Write setData={setTestData} /> : null}
    </div>
  );
}

export default Main;
