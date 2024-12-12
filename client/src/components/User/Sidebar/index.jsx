import { NavLink, useNavigate } from 'react-router-dom';
import UserConsole from '../../UserConsole';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-sidebarr">
      <UserConsole />
      <div className="sidebar-menu">
        <NavLink to="/user-dashboard" className="admin-menu-item">
          <i class="fa-solid fa-table-columns"></i>
          Dashboard
        </NavLink>
        <NavLink to="/list-hospital" className="admin-menu-item">
          <i class="fa-regular fa-building"></i>
          Hospitals
        </NavLink>
        <NavLink to="/appointment" className="admin-menu-item">
          <i class="fa-regular fa-calendar-check"></i>My Appointments
        </NavLink>

        <p
          onClick={() => {
            // localStorage.removeItem('token');
            navigate('/user/login');
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
