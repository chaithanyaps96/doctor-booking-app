import Button from '../../../components/Button';
import Input from '../../../components/Input';
import './login.css';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const onChange = (e, key) => {
    setUserLogin({ ...userLogin, [key]: e.target.value });
  };
  const onUserLogin = async () => {
    const response = await axios.post('/user/login', userLogin);
    localStorage.setItem('token', response.data.token);
    navigate('/user-dashboard');
    console.log(response);
  };
  console.log(userLogin);
  const onSignUp = () => {
    navigate('/user/signup');
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="head">
          <img src="/hlogo.jpg" />
          <div className="text">
            <h1>Care Track</h1>
            <span>USER LOGIN</span>
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
            <Button title="Login" onClick={onUserLogin} />
            <p onClick={onSignUp}>
              Don't have an account ? <span>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
