import './container.css';
import Sidebar from '../Admin/Sidebar';
const Container = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <nav>
          <div className="user-details-container">
            <img src="/admin.jpg" />
            <div className="user-details">
              <p className="admin-name">Admin</p>
              <p className="admin-email">admin@gmail.com</p>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};
export default Container;
