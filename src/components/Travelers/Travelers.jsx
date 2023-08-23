import React,{useEffect} from 'react'

//imported destintaion image
import paris from '../../assets/paris.jpg'
import newYork from '../../assets/new-york.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'

//imported traveler image
import traveler1 from '../../assets/traveler1.jpg'
import traveler2 from '../../assets/traveler2.jpg'
import traveler3 from '../../assets/traveler3.jpg'
import traveler4 from '../../assets/traveler4.jpg'

//import AOS =========>
import Aos from 'aos'
import 'aos/dist/aos.css'


//we are going to use high order array methods called map to display all the data==>

const travelers = [
  {
  id: 1,
  destinationImage: paris,
  travelerImage: traveler1,
  travlerName:'IsraTech',
  socialLink:'@isratech8'
  },
  {
    id: 2,
    destinationImage: newYork,
    travelerImage: traveler2,
    travlerName:'Willson Lindsey',
    socialLink:'@willsonlindsey'
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travlerName:'Nicole Web',
    socialLink:'@nicolweb'
  },
  {
    id: 4,
    destinationImage:london,
    travelerImage: traveler4,
    travlerName:'Naresh Lamer',
    socialLink:'@nareshlamer'
  },

]


const Travelers = () => {
   //UseEffect to set animation duration========>
   useEffect(()=>{
    Aos.init({duration: 2000})

  }, [])


  return (
    <div className='travelers conatiner section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          
       {
          travelers.map(({id,destinationImage,travelerImage ,travlerName,socialLink})=>{
            return(
              //{/* single passanger card */}
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
              <img src={destinationImage} alt="" className='destinationImage' />

              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} alt="" className='travelerImage'/>
                </div>
                <div className="travelerName">
                  <span>{travlerName}</span>
                <p> {socialLink}</p> 
                </div>
                </div>

            </div>
            )
          })
       }

        </div>
      </div>

    </div>
  )
}

export default Travelers


