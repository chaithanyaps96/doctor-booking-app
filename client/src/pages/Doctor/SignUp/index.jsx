import Container from '../../../components/Container';
import AdminTitle from '../../../components/AdminTitle';
import Input from '../../../components/Input';
import './add-doctors.css';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '../../../components/Select';

const DoctorSignUp = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
    firstname: '',
    lastname: '',
    image: '',
    about: '',
    specialization: '',
    email: '',
    hospital: '',
    department: '',
  });

  const [departments, setDepartments] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const getDepartment = async () => {
    const response = await axios.get('/department');
    const selectDepartment = response.data.map(item => {
      return { value: item._id, text: item.name };
    });
    setDepartments(selectDepartment);
    console.log(selectDepartment);
  };

  const getHospital = async () => {
    const response = await axios.get('/hospital');
    const selectHospitals = response.data.map(item => {
      return { value: item._id, text: item.name };
    });
    setHospitals(selectHospitals);
    console.log(selectHospitals);
  };

  const getDoctorByID = async () => {
    const response = await axios.get(`/doctor/${id}`);
    setDoctor({ ...doctor, ...response.data });
    console.log(response);
  };

  useEffect(() => {
    getDepartment();
    getHospital();
    if (id) {
      getDoctorByID();
    }
  }, []);

  const onInputChange = (e, key) => {
    setDoctor({ ...doctor, [key]: e.target.value });
    console.log(doctor);
  };

  const onImageInputChange = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/image', formData);
    setDoctor({ ...doctor, image: response.data.url });
  };

  const onAddDoctor = async () => {
    const response = await axios.post('/doctor/signup', doctor);
    console.log(doctor);
    localStorage.setItem('token', response.data.token);
    console.log(response.data);
    navigate('/doctor/login');
  };

  const onEditDoctor = async () => {
    const response = await axios.patch(`/doctor/${id}`, doctor);
    navigate('/doctor');
  };
  // console.log(doctor);

  return (
    <>
      <div className="admin-add-doctors">
        <AdminTitle title={id ? 'Edit Doctor' : 'Sign Up'} />
      </div>
      <div className="department-form">
        <div className="left">
          <Input
            label="First Name"
            value={doctor.firstname}
            onChange={e => onInputChange(e, 'firstname')}
          />
          <Input
            label="Specialization"
            value={doctor.specialization}
            onChange={e => onInputChange(e, 'specialization')}
          />
          <Select
            value={doctor.department}
            label="Department"
            options={departments}
            onChange={e => onInputChange(e, 'department')}
          />
          <Textarea
            value={doctor.about}
            label="About"
            onChange={e => onInputChange(e, 'about')}
          />
        </div>
        <div className="right">
          <Input
            label="Last Name"
            value={doctor.lastname}
            onChange={e => onInputChange(e, 'lastname')}
          />
          <Input
            label="Email"
            value={doctor.email}
            onChange={e => onInputChange(e, 'email')}
          />

          <Select
            label="Hospital"
            value={doctor.hospital}
            options={hospitals}
            onChange={e => onInputChange(e, 'hospital')}
          />

          <Input
            src={doctor.image}
            type="file"
            label="Image"
            onChange={onImageInputChange}
          />
        </div>
      </div>
      <div className="department-add-btn">
        <Button
          onClick={id ? onEditDoctor : onAddDoctor}
          title={id ? 'Edit' : 'ADD'}
        />
      </div>
    </>
  );
};
export default DoctorSignUp;
