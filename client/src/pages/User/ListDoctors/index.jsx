import './doctors.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

const ListDoctors = () => {
  const navigate = useNavigate();

  const { hospitaldepartmentid } = useParams();

  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  useEffect(() => {
    getDoctors();
  }, []);

  // const onClickDoctor = doctor => {
  //   navigate(`/book-slot/${doctor}`);
  // };
  const getDoctors = async () => {
    const id = hospitaldepartmentid.split('&');
    const response = await axios.get(`/doctor?hos=${id[0]}&dep=${id[1]}`);
    console.log(id);
    setDoctors(response.data);
  };
  const onClickBookNow = doctor => {
    console.log(doctor);
    navigate(`/book-slot/${doctor}`);
  };
  return (
    <div className="doctors">
      <div className="doctor-container">
        {doctors.map(item => {
          return (
            <div
              // onClick={() => onClickDoctor(item._id)}
              className="doctors-list"
            >
              <h1>{item.firstname + ' ' + item.lastname}</h1>
              <p>{item.specialization}</p>
              <img src={item.image} />
              <button
                className="listdocbtn"
                onClick={() => onClickBookNow(item._id)}
              >
                Book Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListDoctors;
