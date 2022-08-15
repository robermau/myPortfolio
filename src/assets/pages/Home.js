import React from 'react'
import AboutMe from '../../components/AboutMe'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'



const Home = () => {
    return (

        <>
        <NavBar />
      <Header />
            <Hero />
            <AboutMe />
        </>
    )
}

export default Home