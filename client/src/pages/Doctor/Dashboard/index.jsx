import './dashboard.css';
import Sidebar from '../../../components/Doctor/Sidebar';
import { useNavigate } from 'react-router-dom';
const DoctorDashboard = () => {
  const navigate = useNavigate();

  const onClickTerms = () => {
    navigate('/doctor-termsconditions');
  };
  const onClickPrivacy = () => {
    navigate('/doctor-privacypolicy');
  };
  return (
    <div>
      <div className="doctor-dashboard">
        <Sidebar />
        <div className="main">
          <div className="image">
            <img src="/dash1.jpg" />
          </div>
          <div className="details">
            <h1>
              Streamline Your Practice with Doctors App <br /> Best EMR Software
            </h1>
            <p>
              At Doctors App, we understand the challenges that healthcare
              providers face in managing patient records efficiently. That's why
              we've developed an advanced Electronic Medical Records (Most
              Popular EMR Systems) software solution to help doctors streamline
              their practice and deliver better patient care.
            </p>
          </div>
        </div>
      </div>
      <div className="features">
        <h4>EXPLORE DOCTORSAPP</h4>
        <h1>Key Features</h1>
        <div className="key-features">
          <img src="/docdashk.jpg" alt="img" />
          <p>
            <span>Centralized Patient Records</span> <br />
            Say goodbye to paper-based record-keeping. Our Best EMR software
            allows doctors to store all patient information securely in one
            centralized system, making it easily accessible whenever needed.
          </p>
        </div>
        <div className="key-features">
          <p>
            <span>More Digital Presence on Internet</span>
            <br />
            Increase your Google reviews by 10X times through our in-built
            personalized video messages for Doctors which would be sent to
            Patients requesting them to share feedback.
          </p>
          <img src="/docdashk.jpg" alt="img" />
        </div>
      </div>
      <div className="services">
        <h4>Our Services</h4>
        <h1>What we can do for you</h1>
        <div className="boxes">
          <div className="box1">
            <h3>Efficiency</h3>
            <p>
              Spend less time on paperwork and more time with patients. Our Best
              EMR software automates routine tasks, allowing doctors to focus on
              delivering quality care.
            </p>
          </div>
          <div className="box1">
            <h3>Accuracy</h3>
            <p>
              Reduce errors associated with manual record-keeping. Our software
              ensures that patient information is accurately documented and
              easily accessible when needed.
            </p>
          </div>
          <div className="box1">
            <h3>Improved Patient Care</h3>
            <p>
              Access comprehensive patient records at your fingertips, enabling
              informed decision-making and personalized treatment plans.
            </p>
          </div>
          <div className="box1">
            <h3>Compliance</h3>
            <p>
              Stay compliant with regulatory requirements and standards for data
              security and privacy, minimizing the risk of penalties and fines.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="links">
            <p onClick={onClickTerms}>Terms & Conditions</p>
          </div>
          <div className="links">
            <p onClick={onClickPrivacy}>Privacy & Policy</p>
          </div>
          <div className="links">
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorDashboard;
