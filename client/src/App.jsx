import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Departments from './pages/Admin/Departments';
import AddDepartment from './pages/Admin/AddDepartment';
import Doctors from './pages/Admin/Doctors';
import Hospitals from './pages/Admin/Hospitals';
import Profile from './pages/Admin/Profile';
import './App.css';
import AddHospital from './pages/Admin/AddHospital';
import Login from './pages/Admin/Login';
import UserLogin from './pages/User/Login';
import PrivateRoute from './components/PrivateRoute';
import DoctorLogin from './pages/Doctor/Login';
import ListHospitals from './pages/User/ListHospitals';
import ListDepartments from './pages/User/ListDepartments';
import AddSlot from './pages/Doctor/AddSlot';
import BookSlot from './pages/User/BookSlot';
import UserDashboard from './pages/User/Dashboard';
import DoctorDashboard from './pages/Doctor/Dashboard';
import AddPrescription from './pages/Doctor/AddPrescription';
import ListDoctors from './pages/User/ListDoctors';
import DoctorSignUp from './pages/Doctor/SignUp';
import DoctorProfile from './pages/Doctor/Profile';
import About from './pages/Doctor/About/termsconditions.jsx';
import ViewSlots from './pages/Doctor/ViewSlots';
import Privacy from './pages/Doctor/Privacy/privacypolicy.jsx';
import UserSignUp from './pages/User/SignUp';
import Appointments from './pages/User/Appointments';
import UserAbout from './pages/User/UserAbout/about.jsx';
import Faq from './pages/User/FAQ/Faq.jsx';
import DoctorAppointments from './pages/Doctor/DoctorAppointments/index.jsx';
import Prescriptions from './pages/User/Prescriprions/index.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/signup" element={<DoctorSignUp />} />
        <Route
          path="/"
          element={<PrivateRoute role="DOCTOR" path="/doctor/login" />}
        >
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-termsconditions" element={<About />} />
          <Route path="/doctor-privacypolicy" element={<Privacy />} />
          <Route path="/view-bookings" element={<ViewSlots />} />

          <Route
            path="add-prescription/:appointmentAndUserId"
            element={<AddPrescription />}
          />
          <Route path="/add-slot" element={<AddSlot />} />
          <Route path="/appointments" element={<DoctorAppointments />} />
        </Route>

        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route
          path="/"
          element={<PrivateRoute role="USER" path="/user/login" />}
        >
          <Route path="/list-hospital" element={<ListHospitals />} />
          <Route path="/department/:hospitalid" element={<ListDepartments />} />
          <Route path="/book-slot/:doctor" element={<BookSlot />} />
          <Route
            path="/doctors/:hospitaldepartmentid"
            element={<ListDoctors />}
          />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/user-about" element={<UserAbout />} />
          <Route path="/user-faq" element={<Faq />} />
          <Route
            path="/prescriptions/:appointmentId"
            element={<Prescriptions />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute role="ADMIN" path="login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/edit-department/:id" element={<AddDepartment />} />
          <Route path="/doctor" element={<Doctors />} />

          <Route path="/hospital" element={<Hospitals />} />
          <Route path="/add-hospital" element={<AddHospital />} />
          <Route path="/edit-hospital/:id" element={<AddHospital />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
