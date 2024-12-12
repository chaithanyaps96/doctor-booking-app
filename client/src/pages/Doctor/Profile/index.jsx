import './profile.css';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
const DoctorProfile = () => {
  const [doctorprofile, setDoctorProfile] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDoctorProfile();
  }, []);

  const getDoctorProfile = async () => {
    const response = await axios.get(`/doctor/profile/${id}`);
    console.log(id);
    console.log(response.data.doctor);
    setDoctorProfile(response.data.doctor);
  };
  return (
    <Container>
      <div className="profile-page">
        {doctorprofile.map(item => {
          console.log(item._id);
          return (
            <div className="departments-list">
              <h1>{item.firstname}</h1>
              <p>{item.about}</p>
              <img src={item.image} />
              {/* <button
                className="listdepbtn"
                onClick={() => onClickDepartment(item._id)}
              >
                NEXT
              </button> */}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export default DoctorProfile;
