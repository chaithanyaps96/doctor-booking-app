import './hospitals.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

const Hospitals = () => {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState([]);

  const getHospital = async () => {
    const response = await axios.get('/hospital');
    console.log(response.data);
    setHospitals(response.data);
  };
  useEffect(() => {
    getHospital();
  }, []);
  const onAddHospital = () => {
    navigate('/add-hospital');
  };
  const onEdit = id => {
    navigate(`/edit-hospital/${id}`);
  };
  return (
    <Container>
      <div className="admin-department">
        <div className="add-btn">
          <Button
            onClick={onAddHospital}
            icon={<i class="fa-solid fa-plus"></i>}
            title="ADD"
          />
        </div>
        <Table
          onEdit={onEdit}
          head={[
            { key: '_id', text: 'ID' },
            { key: 'name', text: 'Name' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
            { key: 'about', text: 'About' },
            { key: 'location', text: 'Location' },
            { key: 'phonenumber', text: 'Phone Number' },
            { key: 'department', text: 'Department' },
            { key: 'edit', text: 'Edit', type: 'edit' },
          ]}
          data={hospitals}
        />
      </div>
    </Container>
  );
};
export default Hospitals;
