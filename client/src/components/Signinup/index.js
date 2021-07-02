import { useRef } from 'react';

function Signinup({ isSignin }) {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const locationRef = useRef('');

  const title = isSignin ? '로그인' : '회원가입';

  const clickLoginBtnHandler = () => {
    console.log('usernameRef : ', usernameRef.current.value);
    console.log('passwordRef: ', passwordRef.current.value);
    console.log('locationRef: ', locationRef.current.value);
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
      {isSignin && (
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
