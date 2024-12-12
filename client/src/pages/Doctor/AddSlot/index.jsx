import './addslot.css';
import { getId } from '../../../utils/authentication';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const AddSlot = () => {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState(getId());
  console.log(doctorId);
  const [slot, setSlot] = useState({ date: '', startTime: '', endTime: '' });

  const onChange = (e, key) => {
    console.log(e.target.value);
    setSlot({ ...slot, [key]: e.target.value });
  };
  console.log(slot);

  const onClick = async () => {
    const response = await axios.post('/slot', { ...slot, doctor: doctorId });
    navigate('/view-bookings');
  };
  return (
    <div className="add-slot">
      <div className="form">
        <Input label="Date" type="date" onChange={e => onChange(e, 'date')} />
        <Input label="Start Time" onChange={e => onChange(e, 'startTime')} />
        <Input label="End Time" onChange={e => onChange(e, 'endTime')} />
        <Button className="slotbtn" title="ADD" onClick={onClick} />
      </div>
    </div>
  );
};
export default AddSlot;
