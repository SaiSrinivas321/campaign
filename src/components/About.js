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
      <Center  maxHeight={'90vh'} flexDirection={['column','row']} marginTop={'60px'} width = {['100%','100%','80%','80%']} p={2} alignItems={'center'}>
          <Center m={2} p={2} height ={'80vh'}  width = {['100%','50%']}>
              <Image src = {dheeraj}/>
          </Center>
          <Center  width = {['100%','50%']} height={'50vh'}>
          <Heading
              fontSize="xl"
              fontWeight="bold"
              // color={"gray.500"}
              marginTop={2}
            >
           <Center flexDirection={'column'}>
              <span><Text>Hey, My Name is</Text></span>
              <Heading fontStyle={'italic'} className={'typewriter'}>Dheeraj</Heading>
            <Text><strong>Lets make our saarang great again</strong></Text> 
        
            </Center>
            </Heading>
            
          </Center>

      </Center>
  );
}
export default About;