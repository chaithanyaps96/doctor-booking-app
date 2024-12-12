import { NavLink, useNavigate } from 'react-router-dom';
import UserConsole from '../../UserConsole';
import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-sidebar">
      <UserConsole />
      <div className="sidebar-menu">
        <NavLink to="/doctor-dashboard" className="admin-menu-item">
          <i class="fa-solid fa-table-columns"></i>
          Dashboard
        </NavLink>
        {/* <NavLink to="/doctor-profile" className="admin-menu-item">
          <i class="fa-solid fa-table-columns"></i>
          Profile
        </NavLink> */}
        <NavLink to="/view-bookings" className="admin-menu-item">
          <i class="fa-regular fa-calendar-check"></i>
          View Bookings
        </NavLink>
        <NavLink to="/appointments" className="admin-menu-item">
          <i class="fa-solid fa-marker"></i> Appointments
        </NavLink>
        <NavLink to="/add-slot" className="admin-menu-item">
          <i class="fa-solid fa-plus"></i> Add Slot
        </NavLink>
        <p
          onClick={() => {
            //localStorage.removeItem('token');
            navigate('/doctor/login');
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
