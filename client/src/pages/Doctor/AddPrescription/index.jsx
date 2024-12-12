// import './addprescription.css';
// import { useState } from 'react';
// import { getId } from '../../../utils/authentication';
// import Input from '../../../components/Input';
// import Textarea from '../../../components/Textarea';
// import Button from '../../../components/Button';
// import axios from '../../../utils/axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const AddPrescription = () => {
//   const navigate = useNavigate();
//   const { appointmentAndUserId } = useParams();

//   const [doctorId, setDoctorId] = useState(getId());

//   const [prescription, setPrescription] = useState('');

//   const onChange = e => {
//     setPrescription(e.target.value);
//   };

//   const onClick = async () => {
//     const id = appointmentAndUserId.split('&');

//     const response = await axios.post('/prescription', {
//       comment: prescription,
//       doctor: doctorId,
//       appointment: id[0],
//       user: id[1],
//     });
//     console.log(response);
//     navigate('/doctor-dashboard');
//   };
//   console.log(doctorId);

//   // const [form, setForm] = useState({
//   //   user: '',
//   //   age: '',
//   //   comment: '',
//   // });
//   // const onInputChange = (e, key) => {
//   //   setForm({ ...form, [key]: e.target.value });
//   //   console.log(form);
//   // };
//   // const onAddPrescription = async () => {
//   //   const response = await axios.post('/prescription', form);
//   //   console.log(response);
//   // };
//   return (
//     <div className="pres-form">
//       <h2>Doctor's Prescription Form</h2>
//       <Textarea onChange={e => onChange(e)} />
//       <div className="homebtnbox">
//         <button className="homebtn" onClick={onClick}>
//           ADD
//         </button>
//       </div>
//       {/* <Button text="Add" onClick={onClick} /> */}
//     </div>
//   );
// };

// export default AddPrescription;
import { getId } from '../../../utils/authentication';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PrescriptionTextArea from '../../../components/PrescriptionTextArea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';

import './addprescription.css';

const AddPrescription = () => {
  const navigate = useNavigate();
  const { appointmentAndUserId } = useParams();

  const [doctorId, setDoctorId] = useState(getId());
  const [prescription, setPrescription] = useState('');

  const onChange = e => {
    setPrescription(e.target.value);
  };

  const onClick = async () => {
    const id = appointmentAndUserId.split('&');

    const response = await axios.post('/prescription', {
      comment: prescription,
      doctor: doctorId,
      appointment: id[0],
      user: id[1],
    });
    console.log(response);
    console.log(doctorId);
    navigate('/doctor-dashboard');
  };

  return (
    <div className="add-prescription">
      <div className="pres-form">
        <h2>Doctor's Prescription</h2>
        <PrescriptionTextArea onChange={e => onChange(e)} />
        <div className="btnpres">
          <button className="presbtn" onClick={onClick}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
