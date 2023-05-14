import React from 'react';
import "./Home.css"
import chair from '../../images/chair2.jpg'
import people from '../../images/h2-img-1.png'
const Home = () => {
    
    return (
     
       <div>
        
         <div className="hero  min-h-screen  customHero ">
  <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
    <img className='image' src={chair} />
    <div className='text-left' >
      <h5 className="text-2xl font-bold my-5">About Us</h5>
      <h1 className="text-5xl font-bold">We established cooperation with various global partners.s</h1>
      <p className="py-8">We've combined a new kind of doctor's experience that blends the highest level of health care with exceptional service. People can enroll membership by paying only an annual membership fee of just $129.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div className="hero min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div>
   <img className='image2' src={people} />
   </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


       </div>


    );
};

export default Home;