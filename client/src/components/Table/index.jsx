import './table.css';
import Modal from '../Modal';
import { useState } from 'react';
const Table = ({ head = [], data, onDelete, onEdit, onSelect }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <div className="table">
      <Modal show={show} setModal={setShow} onOk={() => onDelete(selected)} />
      <table>
        <tr>
          {head.map(item => {
            return <th>{item.text}</th>;
          })}
        </tr>
        {data.map(item => {
          return (
            <tr>
              {head.map(h => {
                if (h.type == 'img') {
                  return (
                    <td>
                      <img width={h.width} src={item[h.key]} />
                    </td>
                  );
                } else if (h.type == 'delete') {
                  return (
                    <td className="delete-td">
                      <i
                        class="fa-solid fa-trash-can"
                        onClick={() => {
                          setShow(true);
                          setSelected(item._id);
                        }}
                      ></i>
                    </td>
                  );
                } else if (h.type == 'edit') {
                  return (
                    <td className="delete-td">
                      <i
                        class="fa-solid fa-pen"
                        onClick={() => onEdit(item._id)}
                      ></i>
                    </td>
                  );
                } else if (h.type == 'select') {
                  return (
                    <td className="delete-td">
                      <i
                        class="fa-solid fa-square-check"
                        onClick={() => onSelect(item._id)}
                      ></i>
                    </td>
                  );
                } else return <td>{item[h.key]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
