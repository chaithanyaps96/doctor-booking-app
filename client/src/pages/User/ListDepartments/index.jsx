import './listdepartments.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import { useEffect, useState } from 'react';

const ListDepartments = () => {
  const navigate = useNavigate();

  const { hospitalid } = useParams();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartmentsByHospital();
  }, []);

  const onClickDepartment = departmentid => {
    console.log(departmentid);
    navigate(`/doctors/${hospitalid}&${departmentid}`);
  };

  const getDepartmentsByHospital = async () => {
    const response = await axios.get(`/hospital/${hospitalid}`);
    console.log(hospitalid);
    console.log(response.data.department);
    setDepartments(response.data.department);
  };
  return (
    <div className="department">
      <div className="department-container">
        {departments.map(item => {
          console.log(item._id);
          return (
            <div className="departments-list">
              <h1>{item.name}</h1>
              <p>{item.about}</p>
              <img src={item.image} />
              <button
                className="listdepbtn"
                onClick={() => onClickDepartment(item._id)}
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
export default ListDepartments;
