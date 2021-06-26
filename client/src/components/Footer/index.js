import React from 'react';
import './style.scss';

function Footer({ buttonList }) {
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
