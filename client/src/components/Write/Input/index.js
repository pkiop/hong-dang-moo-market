import './style.scss';
function Input({ title, value, setValue, inputType = 'text' }) {
  return (
    <div className='input-wrapper'>
      <div>{title} : </div>
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
