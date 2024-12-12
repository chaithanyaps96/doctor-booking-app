import './input.css';

const Input = ({ type = 'text', onChange, label, value, src }) => {
  return (
    <div className="input-item">
      <label>{label}</label>
      <input value={value} type={type} onChange={onChange} />
      <img src={src} />
    </div>
  );
};
export default Input;
