import HeaderAfter from '../../Components/HeaderAfter/HeaderAfter';
import FlightSearchBar from '../../Components/FlightSearchBar/FlightSearchBar';
import DCardApi from '../../Components/DealsCard/DCardApi';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FooterApp from '../../Components/Footer/FooterApp';
import CompDropdown from '../../Components/CompDropdown/CompDropdown'

const Home = () => {
  return (
    <div>
        <HeaderAfter />
        <div className='landing-page'>
        <div className='boxed-center'>
        <h1 className='click-book-fly'>Click ,Book ,Fly.</h1>
        <CompDropdown />
        </div>
       </div>
       <DCardApi />
       <Testimonials />
       <FooterApp />
    </div>
  )
}

export default Home;