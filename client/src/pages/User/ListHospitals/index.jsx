import './listhospitals.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';

const ListHospitals = () => {
  const navigate = useNavigate();

  const { location } = useParams();
  const [hospitalList, setHospitalList] = useState([]);

  useEffect(() => {
    getHospitalByLocation();
  }, []);

  const getHospitalByLocation = async () => {
    const response = await axios.get(`/hospital?location=${location}`);
    console.log(response.data);
    setHospitalList(response.data);
  };

  const onSelectHospital = id => {
    console.log(id);
    navigate(`/department/${id}`);
  };

  return (
    <div className="hospitals">
      <div className="hospital-list">
        {hospitalList.map(item => {
          console.log(hospitalList);
          return (
            <div className="hospital-items">
              <h1>{item.name}</h1>
              <p>
                <span>Contact Number :</span> {item.phonenumber}
              </p>
              <p>{item.about}</p>

              <img src={item.image} />
              <button
                className="listhospitalbtn"
                onClick={() => onSelectHospital(item._id)}
              >
                NEXT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListHospitals;
