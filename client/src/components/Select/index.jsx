import './select.css';

const Select = ({ label, options = [], onChange, value }) => {
  //console.log(options);
  return (
    <div className="select-item">
      <label>{label}</label>
      <select onChange={onChange} value={value}>
        <option value="">--Select--</option>
        {options.map(item => {
          // console.log(item.text);
          return <option value={item.value}>{item.text}</option>;
        })}
      </select>
    </div>
  );
};
export default Select;
