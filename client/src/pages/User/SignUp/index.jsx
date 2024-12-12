import Container from '../../../components/Container';
import AdminTitle from '../../../components/AdminTitle';
import Input from '../../../components/Input';
import './usersignup.css';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '../../../components/Select';

const UserSignUp = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    age: '',
    phonenumber: '',
    address: '',
    gender: '',
    weight: '',
    bloodgroup: '',
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
    setUser({ ...user, [key]: e.target.value });
    console.log(user);
  };

  const onAddUser = async () => {
    const response = await axios.post('/user/signup', user);
    localStorage.setItem('token', response.data.token);
    console.log(response.data);
    navigate('/user/login');
  };

  const onEditUser = async () => {
    const response = await axios.patch(`/user/${id}`, user);
    navigate('/user');
  };
  // console.log(doctor);

  return (
    <>
      <div className="admin-add-doctors">
        <AdminTitle title={id ? 'Edit User' : 'Sign Up'} />
      </div>
      <div className="department-form">
        <div className="left">
          <Input
            label="First Name"
            value={user.firstname}
            onChange={e => onInputChange(e, 'firstname')}
          />
          <Input
            label="Email"
            value={user.email}
            onChange={e => onInputChange(e, 'email')}
          />
          <Input
            label="Age"
            value={user.age}
            onChange={e => onInputChange(e, 'age')}
          />
          <Textarea
            label="Address"
            value={user.address}
            onChange={e => onInputChange(e, 'address')}
          />
          <Input
            label="Weight"
            value={user.weight}
            onChange={e => onInputChange(e, 'weight')}
          />
        </div>
        <div className="right">
          <Input
            label="Last Name"
            value={user.lastname}
            onChange={e => onInputChange(e, 'lastname')}
          />
          <Input
            label="Password"
            value={user.password}
            onChange={e => onInputChange(e, 'password')}
          />
          <Input
            label="Contact Number"
            value={user.phonenumber}
            onChange={e => onInputChange(e, 'phonenumber')}
          />
          <Input
            label="Gender"
            value={user.gender}
            onChange={e => onInputChange(e, 'gender')}
          />
          <Input
            label="Blood Group"
            value={user.bloodgroup}
            onChange={e => onInputChange(e, 'bloodgroup')}
          />
          {/* <Select
            label="Hospital"
            value={doctor.hospital}
            options={hospitals}
            onChange={e => onInputChange(e, 'hospital')}
          /> */}
        </div>
      </div>
      <div className="department-add-btn">
        <Button
          onClick={id ? onEditUser : onAddUser}
          title={id ? 'Edit' : 'ADD'}
        />
      </div>
    </>
  );
};
export default UserSignUp;
