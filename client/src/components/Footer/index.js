import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();
  const buttonList = [
    { title: '홈', color: 'red', onClick: () => history.push('/') },
    { title: '검색', color: 'blue', onClick: () => {} },
    {
      title: '카테고리',
      color: 'yellow',
      onClick: () => history.push('/category'),
    },
    {
      title: '내글',
      color: 'green',
      onClick: () => {},
    },
  ];
  const Buttons = buttonList.map((el) => {
    return (
      <button
        className='footerButton'
        key={el.title}
        style={{ backgroundColor: el.color }}
        onClick={el.onClick}
      >
        {el.title}
      </button>
    );
  });
  return <div className='footer'>{Buttons}</div>;
}

export default Footer;
