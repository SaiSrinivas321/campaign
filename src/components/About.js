import dheeraj from "../images/dheeraj.png";
import "../styles/styles.css"
import React from "react";
import {
  Center,
  Heading,
  Text,
  Image
} from '@chakra-ui/react';

const About = () => {
  return(
      <Center className="About" maxHeight={'90vh'} flexDirection={['column','column','row','row']} marginTop={'60px'} width = {['100%','100%','80%','80%']} p={2} alignItems={'center'}>
          <Center m={2} p={2} height ={['100vh','100vh','90vh']}  width = {['100%','100%','100%','60%']}>
              <Image src = {dheeraj} maxH={['50vh','50vh','50vh','70vh']} maxW= {['75%','75%','75%','55%']}/>
          </Center>
          <Center  width = {['100%','50%']} height={'50vh'}>
           <Center flexDirection={'column'} p={2}>
              <Text my={2} fontSize="xl">I am <span className="name">C S Dheeraj</span></Text>
              <Text my={2} fontSize="xl">Contesting for the post of </Text>
              <Heading size={['lg']}  my={2} >Cultural Affairs Secretary<span className="name"> Lit</span></Heading>
              <Heading size={'lg'}  my={3} fontStyle={'italic'} className={'typewriter'}>Expand. Evoke. Empower.</Heading>
        
            </Center>            
          </Center>

      </Center>
  );
}
export default About;