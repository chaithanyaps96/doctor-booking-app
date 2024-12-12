import './appointment.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';

const Appointments = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [userId, setUserId] = useState(getId());
  console.log(userId);

  const getAppointments = async () => {
    const response = await axios.get(`/appointment/${userId}`);
    setAppointments(response.data);
  };
  console.log(appointments);

  useEffect(() => {
    getAppointments();
  }, []);

  const onClick = id => {
    navigate('/prescriptions/' + id);
    console.log(id);
  };
  return (
    <>
      <div className="appointments">
        {appointments.map(item => {
          console.log(appointments);
          console.log(item.slot.date);
          return (
            <div className="appointment-card">
              <p>
                <span>Date: </span>
                {item.slot.date}
              </p>
              <p>
                <span>Time:</span>
                {`${item.slot.startTime}-${item.slot.endTime}`}
              </p>
              <p>
                <span>Doctor:</span> {item.doctor.firstname}
              </p>
              {/* <p>
                <span>Hospital: </span>
                {item.doctor.hospital.name}
              </p>
              <p>
                <span>Department:</span> {item.doctor.department.name}
              </p> */}
              <button
                className="prescriptionbtn"
                onClick={() => {
                  onClick(item._id);
                }}
              >
                See Prescription
              </button>
            </div>
          );
        })}
      </div>
      <div className="homebtnbox">
        <button
          className="homebtn"
          onClick={() => {
            navigate('/user-dashboard');
          }}
        >
          Home
        </button>
      </div>
    </>
  );
};
export default Appointments;
