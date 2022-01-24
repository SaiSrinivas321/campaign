import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import dheeraj from "../images/dheeraj.png";
import "../styles/styles.css"
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import React from "react";
const images = [bg1,bg2];
const About = () => {
  const [rand , setRand] = React.useState();
  // React.useEffect(()=>{
  //   let bg = setInterval(()=>{
  //     let rand = (Math.random()*10) % 2  ;
  //     setRand(rand);
  //   },3000)
  //   return () =>{
  //     clearInterval(bg)
  //   }
  // })
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
          <blockquote><Center flexDirection={'column'}>
              <span><Text>Hey, My Name is</Text></span>
              <Heading fontStyle={'italic'}>Dheeraj</Heading>
            <Text><strong>Lets make our saarang great again</strong></Text> </Center></blockquote>
            </Heading>
          </Center>

      </Center>
  );
}
export default About;