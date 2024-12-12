// import './doctorappointments.css';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getId } from '../../../utils/authentication';
// import axios from '../../../utils/axios';
// import Button from '../../../components/Button';

// const DoctorAppointments = () => {
//   const navigate = useNavigate();

//   const [appointments, setAppointments] = useState([]);
//   const [doctorId, setDoctorId] = useState(getId());

//   const getAppointments = async () => {
//     const response = await axios.get(`/appointment/${doctorId}`);
//     setAppointments(response.data);
//   };
//   console.log(appointments);

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   const onClick = (appointmentId, userId) => {
//     navigate('/add-prescription/' + appointmentId + '&' + userId);
//     // console.log(id);
//   };
//   return (
//     <>
//       <div className="appointments">
//         {appointments.map(item => {
//           console.log(appointments);

//           return (
//             <div className="appointment-card">
//               <p>Patient: {item.user.email}</p>
//               <p>Date: {item.slot.date}</p>
//               <p>Time: {`${item.slot.startTime}-${item.slot.endTime}`}</p>
//               <button
//                 className="prescriptionbtn"
//                 onClick={() => {
//                   onClick(item._id, item.user._id);
//                 }}
//               >
//                 Add prescription
//               </button>
//               {/* <Button
//                 onClick={() => {
//                   onClick(item._id, item.user._id);
//                 }}
//                 text="Add prescription"
//               /> */}
//             </div>
//           );
//         })}
//       </div>
//       <div className="homebtnbox">
//         <button
//           className="homebtn"
//           onClick={() => {
//             navigate('/doctor-dashboard');
//           }}
//         >
//           Home
//         </button>
//       </div>
//       {/* <Button
//         onClick={() => {
//           navigate('/doctor-dashboard');
//         }}
//         text="Home"
//       /> */}
//     </>
//   );
// };
// export default DoctorAppointments;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';

import './doctorappointments.css';

const DoctorAppointments = () => {
  const navigate = useNavigate();

  const [doctorId, setDoctorId] = useState(getId());
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const response = await axios.get(`/appointment/doctor/${doctorId}`);
    setAppointments(response.data);
  };

  const onClick = (appointmentId, userId) => {
    navigate('/add-prescription/' + appointmentId + '&' + userId);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="appointments">
      {appointments.map(item => {
        console.log(appointments);
        return (
          <div className="appointment-card">
            {/* <p>Patient: {item.user.email}</p> */}
            <p>Date: {item.slot.date}</p>
            <p>Time: {`${item.slot.startTime} - ${item.slot.endTime}`}</p>
            <button
              className="addbtn"
              onClick={() => {
                onClick(item._id, item.user._id);
              }}
            >
              Add Prescription
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorAppointments;
