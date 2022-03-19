import React from "react";
import { Box, Center, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import IMG1 from "../images/img1.png"
import ARC from "../images/arcade.jpg"
import BGAMES from "../images/boardgames.jpg"
import COMP from "../images/comp.jpg"
import GAM from "../images/gamification.jpg"
import GAM1 from "../images/gamification1.jpg"
import "../styles/styles.css"

const vision = [
  {
    title : "Board Games Adda",
    img : BGAMES,
    desc : `The board games culture in Insti will be rejuvenated and a specific venue will
    be allotted for enthusiasts to bond over the same`
  },
  {
    title : "Arcade & VR Zone",
    img : ARC,
    desc : `Gaming zone, arcade zone and amusement park will be set up in KV
    grounds, to ramp up the Saarang Festive vibes`
  },
  {
    title : "INTER IIT CULTURALS",
    img : COMP,
    desc : `To augment the cultural spirit, a bid to host the Inter IIT Cultural Meet in Insti
    will be put forth.`
  },
  {
    title : "LitSoc Gamification:",
    img : GAM,
    desc : `Hostels will be rewarded with “credits” in addition to LitSoc points to
    incentivise participation and boost overall enthusiasm.`
  },
  {
    title : "Board Games Adda",
    img : GAM1,
    desc : `The board games culture in Insti will be rejuvenated and a specific venue will
    be allotted for enthusiasts to bond over the same`
  }
]

const Motive = () => {
  return(
      <Center id='motive' className="motive"  flexDirection = {'column'} p={2} m={2}>
          <Heading m={3} className={'heading'} marginTop={"75px"}>Vision</Heading>
         <Center flexDirection={'column'}>
         <SimpleGrid columns={[1,1,3,3]} spacing={10}>
          {
           vision.map((vis,ind) =>{
            return(
          //     <Center flexDirection={'column'} width={'100%'} p={2} m={2}>
          //     <Flex flexDirection={['column','row']} width={'85%'} style={{"transition" : 'transform .2s'}} _hover={{'transform' : "scale(1.1)"}} p={4} m={2} boxShadow={'2xl'} borderRadius={'xl'}>
          //         <Box width={['100%','50%']}>
          //           <Image src={vis.img} objectFit={"cover"} height={'250px'} width={'300px'} rounded={'2xl'}/>
          //         </Box> 
          //         <Flex flexDirection={'column'}>
          //           <Heading>
          //             {vis.title}
          //           </Heading>
          //         <Box  width={['100%','50%']} p={2}>
          //           <Text>
          //             {vis.desc}
          //           </Text>
          //         </Box>
          //         </Flex>

          //     </Flex>
          // </Center>
          <Box  className="ECard">
             <Box
          maxW={'300px'}
          w={'full'}
          rounded={'md'}
          overflow={'hidden'}
          h={'300px'}
        >
          <Image
            h={'270px'}
            w={'auto'}
            src={vis.img}
            p={2}
            objectFit={"cover"}
            rounded="2xl"
            className="card-img"
          />
          <Box p={2} fontSize={"15px"} fontWeight={500}>
            <Stack spacing={1} align={'center'}>
              <Text className="cardtext"
                style={{
                  fontSize: "20px",
                  letterSpacing: "1px",
                  fontFamily: 'Roboto',
                  zIndex: 1
                }} >{vis.title}</Text>
              <Box className="overview" bg={'#191e38'} color="#ffffff" m={2} p={2}>
                <Center flexDirection={'column'} h={Number(vis.id) > 6 ? '375px' : '270'}>
                  <Heading as={'h3'} mb={"2"} fontSize={"2xl"} >
                    {vis.title}
                  </Heading>
                  <Text as={"h4"} p={4} fontSize={'sm'}
                  >{vis.desc}</Text>
                </Center>
              </Box>
            </Stack>
          </Box>
        </Box>
          </Box>
            )
           })
         }
          </SimpleGrid>
         </Center>
        

      </Center>
  );
}

export default Motive;
