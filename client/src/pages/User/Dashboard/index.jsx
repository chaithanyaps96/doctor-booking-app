import './dashboard.css';
import Container from '../../../components/Container';
import Sidebar from '../../../components/User/Sidebar';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const onClickAbout = () => {
    navigate('/user-about');
  };
  const onClickFaq = () => {
    navigate('/user-faq');
  };
  return (
    <div>
      <div className="user-dashboard">
        <Sidebar />
        <div className="main">
          <div className="imagee">
            <img src="/userdashk1.jpg" />
          </div>
          <div className="detailss">
            <h1>Doctor Appointment Booking App for Patients</h1>
            <img src="/meet-my-doctorr.png" />
          </div>
        </div>
      </div>
      <div className="featuress">
        <h2>CareTrack Offers All Possible Medical Solution & Even More</h2>
      </div>

      <div className="boxez">
        <div className="box-1">
          <i class="fa-solid fa-calendar-days"></i>
          <h3>Book Appointment with Doctors Easily</h3>
          <p>
            CareTrack service enables patients to search for top doctors in the
            locality and book confirmed appointments.
          </p>
        </div>
        <div className="box-1">
          <i class="fa-solid fa-person"></i>
          <h3>Consult with Doctor Online</h3>
          <p>
            Whether it is a second opinion or a follow up question, why visit
            the doctor, when you can check with them online?
          </p>
        </div>
        <div className="box-1">
          <i class="fa-solid fa-heart"></i>
          <h3>
            Manage Your Health Records with The Best Doctor Appointment App
          </h3>
          <p>
            All your medical records are securely kept in your health account.
            Just login to our MeetMyDoctor service, and all records will be in
            one place.
          </p>
        </div>
        <div className="box-1">
          <i class="fa-solid fa-mobile"></i>
          <h3>Download CareTrack App</h3>
          <p>
            Book appointment and access your records using our DocPulse App.
            Download it from Google Play Store or Apple store.
          </p>
        </div>
      </div>
      <div className="bottomz">
        <div className="linkz">
          <p onClick={onClickAbout}>About Us</p>
        </div>
        <div className="linkz">
          <p onClick={onClickFaq}>FAQ</p>
        </div>
        <div className="linkz">
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
