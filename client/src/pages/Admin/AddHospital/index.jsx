import Container from '../../../components/Container';
import AdminTitle from '../../../components/AdminTitle';
import Input from '../../../components/Input';
import './add-hospital.css';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from '../../../components/Select';
import Multiselect from '../../../components/Multiselect';

const AddHospital = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hospital, setHospital] = useState({
    name: '',
    image: '',
    about: '',
    location: '',
    phonenumber: '',
    department: [],
  });
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedDepName, setSelectedDepName] = useState([]);
  const [selectedDepId, setSelectedDepId] = useState([]);

  const getDepartment = async () => {
    const response = await axios.get('/department');
    console.log(response.data);
    setDepartments(response.data);
    const selectDepartment = response.data.map(item => {
      return { value: item._id, text: item.name };
    });
    setDepartments(selectDepartment);
    //console.log(selectDepartment);
  };
  const getLocations = async () => {
    const response = await axios.get('/location');
    const selectLocation = response.data.map(item => {
      return { value: item.name, text: item.name };
    });
    // console.log(response.data.department);
    setLocations(selectLocation);
    //console.log(selectLocation);
  };
  const getHospital = async () => {
    const response = await axios.get('/hospital/' + id);
    setHospital({ ...hospital, ...response.data });
    //console.log(hospital);
    const depNames = response.data.department.map(item => item.name);
    console.log(response.data.department.name);
    const depIds = response.data.department.map(item => item._id);
    console.log(response.data.department);
    setSelectedDepName([...selectedDepName, ...depNames]);
    setSelectedDepId([...selectedDepId, ...depIds]);

    // console.log(selectedDepId);
  };

  useEffect(() => {
    getDepartment();
    getLocations();
    if (id) {
      getHospital();
    }
  }, []);
  // const onAddDepartment = () => {
  //   navigate('/add-department');
  // };
  const onInputChange = (e, key) => {
    if (key == 'department') setHospital({ ...hospital, [key]: e });
    else setHospital({ ...hospital, [key]: e.target.value });
    console.log(hospital);
  };
  const onImageInputChange = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/image', formData);
    setHospital({ ...hospital, image: response.data.url });
    // console.log(hospital);
    //console.log(e.target.files[0]);
  };
  const onAddHospital = async () => {
    const response = await axios.post('/hospital', hospital);
    console.log(response);
    navigate('/hospital');
  };
  const onEditHospital = async () => {
    const response = await axios.patch(`/hospital/${id}`, hospital);
    navigate('/hospital');
    console.log(response);
  };
  //console.log(hospital);
  return (
    <Container>
      <div className="admin-add-hospital">
        <AdminTitle title={id ? 'Edit Hospital' : 'Add Hospital'} />
      </div>
      <div className="department-form">
        <div className="left">
          <Input
            value={hospital.name}
            label="Name"
            onChange={e => onInputChange(e, 'name')}
          />
          <Input
            src={hospital.image}
            type="file"
            label="Image"
            onChange={onImageInputChange}
          />
          <Textarea
            value={hospital.about}
            label="About"
            onChange={e => onInputChange(e, 'about')}
          />
        </div>
        <div className="right">
          <Input
            value={hospital.phonenumber}
            label="Contact Number"
            onChange={e => onInputChange(e, 'phonenumber')}
          />

          <Multiselect
            selectedTextData={selectedDepName}
            selectedValueData={selectedDepId}
            label="Department"
            options={departments}
            onChange={e => onInputChange(e, 'department')}
          />
          <Select
            value={hospital.location}
            label="Location"
            options={locations}
            onChange={e => onInputChange(e, 'location')}
          />
        </div>
      </div>
      <div className="department-add-btn">
        <Button
          onClick={id ? onEditHospital : onAddHospital}
          title={id ? 'Edit' : 'Add'}
        />
      </div>
    </Container>
  );
};
export default AddHospital;
