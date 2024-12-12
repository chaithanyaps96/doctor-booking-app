import Button from '../../../components/Button';
import Input from '../../../components/Input';
import './login.css';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [docLogin, setDocLogin] = useState({ email: '', password: '' });

  const onChange = (e, key) => {
    setDocLogin({ ...docLogin, [key]: e.target.value });
  };
  const onDoctorLogin = async () => {
    const response = await axios.post('/doctor/login', docLogin);
    localStorage.setItem('token', response.data.token);
    navigate('/doctor-dashboard');
    console.log(response.data);
  };
  //console.log(userLogin);
  const onSignUp = () => {
    navigate('/doctor/signup');
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="head">
          <img src="/hlogo.jpg" />
          <div className="text">
            <h1>Care Track</h1>
            <span>DOCTOR LOGIN</span>
          </div>
        </div>
        <div className="inputs">
          <Input label="Email" onChange={e => onChange(e, 'email')} />
          <Input
            label="Password"
            type="password"
            onChange={e => onChange(e, 'password')}
          />
          <div className="btn-container">
            <Button title="Login" onClick={onDoctorLogin} />
            <p onClick={onSignUp}>
              Don't have an account ? <span>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorLogin;
