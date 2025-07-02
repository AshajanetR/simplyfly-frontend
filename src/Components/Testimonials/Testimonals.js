import { Carousel } from 'antd';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Flying High With Reviews</h2>
      <Carousel autoplay>
        <div className="testimonial-slide">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="testimonial-text">“SimplyFly stands out for its speed and user-friendly interface.”</p>
          <p className="testimonial-author">– Priyanka Desai, Travel Blogger</p>
        </div>

        <div className="testimonial-slide">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="testimonial-text">“Last-minute business trip was hassle-free with SimplyFly. Highly recommended!”</p>
          <p className="testimonial-author">– Arjun, Corporate Travel Manager</p>
        </div>

        <div className="testimonial-slide">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="testimonial-text">“The pricing was transparent — no hidden fees, just straightforward booking!”</p>
          <p className="testimonial-author">– Meera, Destination Planner</p>
        </div>

        <div className="testimonial-slide">
          <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="testimonial-text">“I booked for my entire family in under 5 minutes. No glitches, no fuss.”</p>
          <p className="testimonial-author">– Rahul, Luxury Travel Agent</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
