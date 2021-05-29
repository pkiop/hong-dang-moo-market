import React from 'react';
import './style.scss';

function Footer({ buttonList }) {
  const Buttons = buttonList.map((el) => {
    return <button key={el}>{el}</button>;
  });
  return <div className="footer">{Buttons}</div>;
}

export default Footer;
