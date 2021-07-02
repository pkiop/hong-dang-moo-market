import { useRef, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

function Signinup({ isSignin }) {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const locationRef = useRef('');
  const [errorMsg, setErrorMsg] = useState(null);

  const title = isSignin ? '로그인' : '회원가입';

  const clickLoginBtnHandler = async () => {
    if (isSignin) {
      try {
        const userInfo = await axios.post(
          `${process.env.REACT_APP_API_SERVER}/api/auth/login`,
          {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          }
        );
        dispatch({ type: 'signin', payload: userInfo.data.user });
        setErrorMsg(null);
        history.push('/');
      } catch (e) {
        setErrorMsg(e.response.data.message);
        console.error(e);
      }
    } else {
      try {
        const userInfo = await axios.post(
          `${process.env.REACT_APP_API_SERVER}/api/auth`,
          {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            location: locationRef.current.value,
          }
        );
        dispatch({ type: 'signin', payload: userInfo.data.user });
        history.push('/');
        setErrorMsg(null);
      } catch (e) {
        setErrorMsg(e.response.data.message);
        console.error(e);
      }
    }
  };
  return (
    <div className='container-sm mt-3 '>
      <div className='row'>
        <div className='col text-center'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Username</label>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          ref={usernameRef}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label lg'>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='password'
          ref={passwordRef}
        />
      </div>
      {!isSignin && (
        <div className='row mb-3'>
          <div className='col'>
            <label className='form-label'>Location</label>
            <select
              className='form-select'
              aria-label='Default select example'
              ref={locationRef}
            >
              <option>Select Location</option>
              <option value='kr'>한국</option>
              <option value='us'>미국</option>
            </select>
          </div>
        </div>
      )}
      <div className='row mb-5'>
        <div className='col text-center'>
          <button
            type='button'
            className='btn btn-primary justify-contents-center'
            onClick={clickLoginBtnHandler}
          >
            {title}
          </button>
        </div>
      </div>
      {errorMsg && (
        <div className='row'>
          <div className='col text-center'>
            <span className='badge bg-danger'>{errorMsg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signinup;
