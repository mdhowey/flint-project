import { useReducer, createContext, useContext } from "react";
import Hero from '../components/Hero';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import recommendations from '../stores/recommendations';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main recommendations={recommendations} />
      <Footer />
    </>
  )
}

export default Home