import './about.css';

const UserAbout = () => {
  return (
    <div className="about">
      <h1>CareTrack Quantitative Overview</h1>
      <div className="box-es">
        <div className="boxone">
          <h3>Our Vision</h3>
          <p>
            Empower healthcare enterprises to deliver exceptional healthcare
            services and enhance patient care worldwide through the utilization
            of advanced technology.
          </p>
        </div>
        <div className="boxone">
          <h3>Our Mission</h3>
          <p>
            Provide an affordable and secure healthcare platform for doctors,
            clinics, and hospitals, delivering exceptional value at a
            competitive price for optimized healthcare solutions.
          </p>
        </div>
      </div>
      <h1>Values</h1>
      <p>
        Our core values shape our identity and serve as a stabilizing force
        during challenging times. Our organizational culture prioritizes
        customer focus, ongoing enhancement, and dedicated customer service.
      </p>
      <div className="box-es1">
        <div className="boxtwo">
          <i class="fa-solid fa-person"></i>
          <h3>Customer Focus</h3>
          <p>
            Empower healthcare enterprises to deliver exceptional healthcare
            services and enhance patient care worldwide through the utilization
            of advanced technology.
          </p>
        </div>
        <div className="boxtwo">
          <i class="fa-solid fa-bag-shopping"></i>
          <h3>Our Goal</h3>
          <p>
            Provide an affordable and secure healthcare platform for doctors,
            clinics, and hospitals, delivering exceptional value at a
            competitive price for optimized healthcare solutions.
          </p>
        </div>
        <div className="boxtwo">
          <i class="fa-solid fa-phone"></i>
          <h3>Customer service</h3>
          <p>
            Provide an affordable and secure healthcare platform for doctors,
            clinics, and hospitals, delivering exceptional value at a
            competitive price for optimized healthcare solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserAbout;
