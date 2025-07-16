import './DealsCard.css'
import React from 'react'
import Dealscard from './Dealscard';

const DCardApi = () => {




    const dealsData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1492136344046-866c85e0bf04?q=80&w=1164&auto=format&fit=crop',
    landmark: 'Eiffel Tower',
    city: 'Delhi',
    price: '15,000 Rs',
    airline: 'Indigo Airlines',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1164&auto=format&fit=crop',
    landmark: 'Statue of Liberty',
    city: 'Mumbai',
    price: '25,000 Rs',
    airline: 'Emirates',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1676123045373-10a3c877b378?q=80&w=1291&auto=format&fit=crop',
    landmark: 'Big Ben',
    city: 'London',
    price: '20,500 Rs',
    airline: 'British Airways',
  },
  {
    id: 4,
    image:
      'https://plus.unsplash.com/premium_photo-1661938399624-3495425e5027?q=80&w=1170&auto=format&fit=crop',
    landmark: 'Colosseum',
    city: 'Rome',
    price: '18,750 Rs',
    airline: 'Alitalia',
  },
  {
    id: 5,
    image:
      'https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1071&auto=format&fit=crop',
    landmark: 'Burj Khalifa',
    city: 'Dubai',
    price: '22,000 Rs',
    airline: 'FlyDubai',
  },
  {
    id: 6,
    image:
      'https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1071&auto=format&fit=crop',
    landmark: 'Burj Khalifa',
    city: 'Dubai',
    price: '22,000 Rs',
    airline: 'FlyDubai',
  }
];


  return (
    <>
    
    <div className="deals-card-container">
        {
        dealsData.map((temp)=> <Dealscard image={temp.image} landmark={temp.landmark} city={temp.city} price={temp.price} airline={temp.airline} />)
        }
    </div>

    </>
  )
}

export default DCardApi
