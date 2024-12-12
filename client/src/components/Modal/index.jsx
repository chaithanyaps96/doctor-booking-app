import './modal.css';

const Modal = ({ show, setModal, onOk }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }} className="main-cover">
      <div className="cover" onClick={() => setModal(false)}></div>
      <div className="modal">
        <p>Are you sure you want to delete ?</p>
        <div className="controlls">
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              onOk();
              setModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
