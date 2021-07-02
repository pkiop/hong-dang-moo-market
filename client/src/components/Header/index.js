import './style.scss';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <div className='header'>
      <div>홍당무마켓</div>
      <div class='dropdown'>
        <button
          class='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenu2'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          메뉴
        </button>
        <ul class='dropdown-menu' aria-labelledby='dropdownMenu2'>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/auth/signin');
              }}
            >
              로그인
            </button>
          </li>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/auth/signout');
              }}
            >
              로그아웃
            </button>
          </li>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/auth/signup');
              }}
            >
              회원가입
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
