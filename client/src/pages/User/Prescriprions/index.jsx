// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from '../../../utils/axios';
// import './prescription.css';

// const Prescriptions = () => {
//   const { appointmentId } = useParams();

//   const [prescriptions, setPrescriptions] = useState([]);

//   const getPrescriptions = async () => {
//     const response = await axios.get(`/prescription/${appointmentId}`);
//     setPrescriptions([response.data]);
//   };
//   console.log(prescriptions);

//   useEffect(() => {
//     getPrescriptions();
//   }, []);

//   return (
//     <div className="prescriptions">
//       {prescriptions.map(item => {
//         console.log(prescriptions);
//         return (
//           <div className="prescription-card">
//             <p>Doctor: {item.doctor}</p>
//             <p>Comments: {item.comment}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Prescriptions;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';
import './prescription.css';

const Prescriptions = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const [prescriptions, setPrescriptions] = useState([]);

  const getPrescriptions = async () => {
    const response = await axios.get(`/prescription/${appointmentId}`);
    setPrescriptions([response.data]);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  const onHome = () => {
    navigate('/user-dashboard');
  };
  return (
    <div className="prescriptions">
      {prescriptions.map(item => {
        console.log(prescriptions);
        return (
          <div className="prescription-card">
            <p>
              Doctor Name: <span>{item.doctor.firstname}</span>
            </p>
            <p>
              Doctor Email: <span>{item.doctor.email}</span>
            </p>
            <p>
              Comments: <span>{item.comment}</span>
            </p>
            <button className="homebtnn" onClick={onHome}>
              Go to Home
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Prescriptions;
