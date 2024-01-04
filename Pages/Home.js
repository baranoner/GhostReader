import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Style/home.scss"

const Home = () => {
  return (
    
    <div className='home-body'>
     
     
    <div className="container">



      <h1 id="home-header">Easy to use, disabled friendly book application!</h1>
      
      <a id="sign-in-button" href="/register">Sign-in</a>
      

    </div>
    <Footer />
    </div>
  )
}

export default Home