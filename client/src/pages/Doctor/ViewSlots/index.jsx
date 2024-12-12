import './viewbookings.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
import { getId } from '../../../utils/authentication';

const ViewSlots = () => {
  const navigate = useNavigate();

  // const [doctorId, setDoctorId] = useState(getId());

  const [viewSlots, setviewSlots] = useState([]);
  console.log(viewSlots);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    const response = await axios.get('/slot');
    console.log(response.data);
    setviewSlots(response.data);
  };
  const onClickDelete = async id => {
    console.log(id);
    const response = await axios.delete(`/slot/${id}`);
    getBookings();
  };
  const onBack = () => {
    navigate('/doctor-dashboard');
  };
  return (
    <div className="viewbookings">
      <div className="ok-btn">
        <button className="okbtn" onClick={onBack}>
          OK
        </button>
      </div>
      <div className="doctor-containers">
        {viewSlots.map(item => {
          // console.log(item.id);
          return (
            <div className="doctors-lists">
              <h1>{item.date}</h1>
              <p>
                {item.startTime} - {item.endTime}
              </p>
              {/* <p></p> */}
              <button onClick={onClickDelete}>Cancel</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ViewSlots;
