import './button.css';
const Button = ({ title, onClick, color, icon }) => {
  //console.log('buton clicked');
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
};
export default Button;
