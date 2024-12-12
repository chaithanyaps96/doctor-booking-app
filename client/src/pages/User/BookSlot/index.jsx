import Input from '../../../components/Input';
import './bookslot.css';
import axios from '../../../utils/axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getId } from '../../../utils/authentication';
import moment from 'moment';

const BookSlot = () => {
  const navigate = useNavigate();
  const { doctor } = useParams();

  const [selectedDate, setSelectedDate] = useState(
    moment().format('yyyy-MM-DD')
  );
  const [slots, setSlots] = useState([]);

  const getSlotByDate = async () => {
    const response = await axios.get(
      `/slot?doctor=${doctor}&date=${selectedDate}`
    );
    setSlots(response.data);
    console.log(response.data);
  };

  const onChange = e => {
    setSelectedDate(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getSlotByDate();
  }, [selectedDate]);
  // console.log(selectedDate);

  const onBookSlot = async id => {
    console.log(id);
    const response = await axios.post('/slot/book', {
      slot: id,
      doctor: doctor,
      user: getId(),
    });
    console.log(response);
    getSlotByDate();
  };

  const onCancelSlot = async id => {
    const response = axios.delete(`/slot/${id}`);
    getSlotByDate();
  };
  const onHome = () => {
    navigate('/user-dashboard');
  };
  return (
    <div className="book-slot">
      <div className="top-full">
        <div className="top">
          <Input
            // value={selectedDate}
            onChange={onChange}
            label="Select Date"
            type="date"
          />
        </div>
        <div className="right-btn">
          <button className="homebtnn" onClick={onHome}>
            Go to Home
          </button>
        </div>
      </div>
      <div className="slots">
        {slots.map(item => {
          return (
            <div
              style={item.booked ? { backgroundColor: '#eeeeee' } : {}}
              key={item._id}
              className="slot-card"
            >
              <p>{`${item.startTime}-${item.endTime}`}</p>
              <p
                style={{ backgroundColor: item.booked ? 'red' : 'green' }}
                onClick={!item.booked ? () => onBookSlot(item._id) : () => {}}
                className="book-now"
              >
                {item.booked ? 'Booked!' : 'Book Now'}
              </p>
              {item.booked ? (
                <p
                  // onClick={() => onCancelSlot(item._id)}
                  className="cancel-slot"
                  onClick={
                    item.booked ? () => onCancelSlot(item._id) : () => {}
                  }
                >
                  Cancel
                </p>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BookSlot;
