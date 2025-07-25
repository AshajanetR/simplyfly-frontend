import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import FlightSearchBar from '../../Components/FlightSearchBar/FlightSearchBar';
import DCardApi from '../../Components/DealsCard/DCardApi';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FooterApp from '../../Components/Footer/FooterApp';

const Home = () => {
  return (
    <div>
        <HeaderAfter />
        <div className='landing-page'>
        <video className="bg-video" autoPlay muted loop playsInline>
  <source src={require('../../images/flightbg.mp4')} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className='boxed-center'>
        <h1 className='click-book-fly'>Click ,Book ,Fly.</h1>
        <FlightSearchBar />
        </div>
       </div>
       <DCardApi />
       <Testimonials />
       <FooterApp />
    </div>
  )
}

export default Home;