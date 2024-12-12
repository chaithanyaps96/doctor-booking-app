import { useEffect, useState } from 'react';
import './select.css';

const Multiselect = ({
  label,
  options = [],
  onChange = () => {},
  selectedTextData = [],
  selectedValueData = [],
}) => {
  const [selectedText, setSelectedText] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  // console.log(selectedText);
  useEffect(() => {
    setSelectedText(selectedTextData);
    setSelectedValue(selectedValueData);
  }, [selectedTextData, selectedValueData]);

  const deleteSelectedItem = item => {
    let index;
    const selectedTextCopy = [...selectedText];
    const selectedValueCopy = [...selectedValue];

    for (let i = 0; i < selectedTextCopy.length; i++) {
      if (selectedTextCopy[i] == item) {
        index = i;
      }
    }
    selectedTextCopy.splice(index, 1);
    selectedValueCopy.splice(index, 1);
    setSelectedText(selectedTextCopy);
    setSelectedValue(selectedValueCopy);
    onChange(selectedValueCopy);
  };
  return (
    <div className="select-item">
      <label>{label}</label>

      <div className="selected-item">
        {selectedText.map(item => {
          return (
            <div className="selected-item-container">
              <span>{item}</span>
              <buttom
                className="btnn"
                onClick={() => {
                  deleteSelectedItem(item);
                }}
              >
                ✖
              </buttom>
            </div>
          );
        })}
      </div>
      <select
        onChange={e => {
          // console.log(e.target.value);
          const split = e.target.value.split(' ');
          const value = split[0];
          const text = split[1];
          if (!selectedText.includes(text)) {
            // console.log(selectedText, text);
            setSelectedText([...selectedText, text]);
            setSelectedValue([...selectedValue, value]);
            onChange([...selectedValue, value]);
            //console.log(selectedValue);
          }
        }}
      >
        <option value="">--Choose--</option>
        {options.map(item => {
          // console.log(options);
          return (
            <option value={`${item.value} ${item.text}`}>{item.text}</option>
          );
        })}
      </select>
    </div>
  );
};
export default Multiselect;
