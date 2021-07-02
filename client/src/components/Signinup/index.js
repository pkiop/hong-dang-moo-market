import { useRef } from 'react';
import axios from 'axios';

function Signinup({ isSignin }) {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const locationRef = useRef('');

  const title = isSignin ? '로그인' : '회원가입';

  const clickLoginBtnHandler = async () => {
    if (isSignin) {
      try {
        const userInfo = await axios.post(
          'http://localhost:4000/api/auth/login',
          {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          }
        );
        console.log('userInfo : ', userInfo);
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const userInfo = await axios.post('http://localhost:4000/api/auth', {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          location: locationRef.current.value,
        });
        console.log('userInfo(signup) : ', userInfo);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <div class='container-sm mt-3 '>
      <div class='row'>
        <div class='col text-center'>
          <h1>{title}</h1>
        </div>
      </div>
      <div class='mb-3'>
        <label class='form-label'>Username</label>
        <input
          type='text'
          class='form-control'
          placeholder='Username'
          ref={usernameRef}
        />
      </div>
      <div class='mb-3'>
        <label class='form-label lg'>Password</label>
        <input
          type='text'
          class='form-control'
          placeholder='Another input placeholder'
          ref={passwordRef}
        />
      </div>
      {!isSignin && (
        <div class='row mb-3'>
          <div class='col'>
            <label class='form-label'>Location</label>
            <select
              class='form-select'
              aria-label='Default select example'
              ref={locationRef}
            >
              <option selected value=''>
                Select Location
              </option>
              <option value='kr'>한국</option>
              <option value='us'>미국</option>
            </select>
          </div>
        </div>
      )}
      <div class='row'>
        <div class='col text-center'>
          <button
            type='button'
            class='btn btn-primary justify-contents-center'
            onClick={clickLoginBtnHandler}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signinup;
