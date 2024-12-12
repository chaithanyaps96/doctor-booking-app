import './input.css';

const Textarea = ({ onChange, label, rows = 5, cols, value }) => {
  return (
    <div className="input-item">
      <label>{label}</label>
      <textarea value={value} rows={rows} onChange={onChange} cols={cols} />
    </div>
  );
};
export default Textarea;
