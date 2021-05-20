import React, { useState } from 'react';
import './style.scss';

const imageLink =
  'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
function Index({ setData }) {
  const [title, setTitle] = useState('');
  const test = {
    id: 6,
    title: title,
    category: 'A',
    time: 13,
    money: 100000,
    user: 'user1',
    imageLink: imageLink,
  };
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
      {/* // spread 연산자 */}
      <button onClick={() => setData((state) => [...state, test])}>
        Clear
      </button>
    </div>
  );
}

export default Index;

// position
// static, fixed, absolute, relative
