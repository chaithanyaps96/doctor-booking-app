import './department.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

const Departments = () => {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  const getDepartment = async () => {
    const response = await axios.get('/department');
    console.log(response.data);
    setDepartments(response.data);
  };
  const onDeleteDepartment = async id => {
    const response = await axios.delete(`/department/${id}`);
    getDepartment();
    // console.log(id);
  };
  useEffect(() => {
    getDepartment();
  }, []);

  const onEdit = id => {
    navigate(`/edit-department/${id}`);
  };
  const onAddDepartment = () => {
    navigate('/add-department');
  };
  return (
    <Container>
      <div className="admin-department">
        <div className="add-btn">
          <Button
            onClick={onAddDepartment}
            icon={<i class="fa-solid fa-plus"></i>}
            title="ADD"
          />
        </div>
        <Table
          onEdit={onEdit}
          onDelete={onDeleteDepartment}
          head={[
            { key: '_id', text: 'ID' },
            { key: 'name', text: 'Name' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
            { key: 'about', text: 'About' },
            { key: 'edit', text: 'Edit', type: 'edit' },
            { key: 'delete', text: 'Delete', type: 'delete' },
          ]}
          data={departments}
        />
      </div>
    </Container>
  );
};
export default Departments;
