import './doctors.css';
import Container from '../../../components/Container';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import Table from '../../../components/Table';
import { useNavigate, useParams } from 'react-router-dom';

const Doctors = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('id: ', id);
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  const getDoctors = async () => {
    const response = await axios.get('/doctor');
    console.log(response.data);
    setDoctors(response.data);
  };
  console.log(doctors);

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <Container>
      <div className="admin-doctors">
        <Table
          head={[
            { key: '_id', text: 'ID' },
            { key: 'firstname', text: 'First Name' },
            { key: 'lastname', text: 'Last Name' },
            { key: 'image', text: 'Image', type: 'img', width: '100' },
            { key: 'specialization', text: 'Specialization' },
            { key: 'hospital', text: 'Hospital' },
            { key: 'department', text: 'Department' },
            { key: 'about', text: 'About' },
          ]}
          data={doctors}
        />
      </div>
    </Container>
  );
};
export default Doctors;
