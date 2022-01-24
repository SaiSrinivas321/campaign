import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import About from './About';
import Credentials from './Credentials';
import Motive from './Motive';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import React, { useState } from 'react';
import "../styles/styles.css";
import Footer from './Footer';
import Lifeinitiatives from './Lifeinitiatives';


const Home = ()=>{

  const [per , setPer] = useState(0);
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    setPer(scrollPostion);
  }
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  }
 
  React.useEffect(async()=>{
    listenToScrollEvent();
    
  })
  return(
      <Flex  flexDirection={"column"} className="mainbg">
         <Flex width={"100%"} flexDirection={'column'} >
         <Navbar percentage = {per} />
         <Center>
         <About />
         </Center>
         </Flex>
         <Motive />
         <Credentials />
         {/* <Lifeinitiatives /> */}
         <Testimonials />
         <Footer />
        
      </Flex>
  )
}

export default Home;
