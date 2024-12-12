import Button from '../../../components/Button';
import Input from '../../../components/Input';
import './login.css';
import { useState } from 'react';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: '', password: '' });

  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };
  const onLogin = async () => {
    const response = await axios.post('/admin/login', login);
    localStorage.setItem('token', response.data.token);
    console.log(response);
    navigate('/dashboard');
  };
  console.log(login);
  return (
    <div className="login">
      <div className="login-container">
        <div className="head">
          <img src="/hlogo.jpg" />
          <div className="text">
            <h1>Care Track</h1>
            <span>ADMIN PANEL</span>
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
            <Button title="Login" onClick={onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
