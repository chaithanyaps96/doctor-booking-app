import { NavLink, useNavigate } from 'react-router-dom';
import UserConsole from '../../UserConsole';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-sidebars">
      <UserConsole />
      <div className="sidebar-menu">
        <NavLink to="/dashboard" className="admin-menu-item">
          <i class="fa-solid fa-table-columns"></i>
          Dashboard
        </NavLink>
        <NavLink to="/department" className="admin-menu-item">
          <i class="fa-regular fa-building"></i>
          Departments
        </NavLink>
        <NavLink to="/doctor" className="admin-menu-item">
          <i class="fa-solid fa-user-doctor"></i>Doctors
        </NavLink>
        <NavLink to="/hospital" className="admin-menu-item">
          <i class="fa-regular fa-hospital"></i>Hospitals
        </NavLink>
        <NavLink to="/profile" className="admin-menu-item">
          <i class="fa-regular fa-user"></i>
          Profile
        </NavLink>
        <p
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/admin/login');
          }}
          className="admin-menu-item"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Logout
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
