import Container from '../../../components/Container';
import AdminTitle from '../../../components/AdminTitle';
import Input from '../../../components/Input';
import './add-department.css';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('id: ', id);

  const [department, setDepartment] = useState({
    name: '',
    image: '',
    about: '',
  });
  const getDepartmentById = async () => {
    const response = await axios.get(`/department/${id}`);
    setDepartment({ ...department, ...response.data });
    console.log(response);
  };
  useEffect(() => {
    if (id) {
      getDepartmentById();
    }
  }, []);
  const onInputChange = (e, key) => {
    setDepartment({ ...department, [key]: e.target.value });
  };
  const onImageInputChange = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/image', formData);
    setDepartment({ ...department, image: response.data.url });
    //console.log(department);
    //console.log(e.target.files[0]);
  };
  const onAddDepartment = async () => {
    const response = await axios.post('/department', department);
    navigate('/department');
  };
  //console.log(department);
  const onEditDepartment = async () => {
    const response = await axios.patch(`/department/${id}`, department);
    navigate('/department');
  };
  console.log(department);
  return (
    <Container>
      <div className="admin-add-department">
        <AdminTitle title={id ? 'Edit Department' : 'Add Department'} />
      </div>
      <div className="department-form">
        <div className="left">
          <Input
            label="Name"
            value={department.name}
            onChange={e => onInputChange(e, 'name')}
          />
          <Input
            src={department.image}
            type="file"
            label="Image"
            onChange={onImageInputChange}
          />
        </div>
        <div className="right">
          <Textarea
            value={department.about}
            label="About"
            onChange={e => onInputChange(e, 'about')}
          />
        </div>
      </div>
      <div className="department-add-btn">
        <Button
          onClick={id ? onEditDepartment : onAddDepartment}
          title={id ? 'Edit' : 'add'}
        />
      </div>
    </Container>
  );
};
export default AddDepartment;
