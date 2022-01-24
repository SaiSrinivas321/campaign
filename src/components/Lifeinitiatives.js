import React from 'react';
import { Box, Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../images/bg1.png'

const Lifeinitiatives = () => {
    const phrases = ["An array", "of strings", "to pass the component"]; // Required
    const interval = 3000; // The time to wait before rendering the next string
 
  return(
    <Center  flexDirection = {'column'} p={2} m={2} fontWeight={700}>
    <Heading m={2} className="heading" marginTop={"60px"}>Life Initiatives</Heading>
    <Center width={"100%"} p={3}>
    <SimpleGrid columns={[1,1,2,2]}>
    <Center m={2} p={2}>
           <Box
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                padding={2}
                className="success-stories1"
             >
            <Text padding={2}>
              <blockquote>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tellus eu diam venenatis consequat. Integer consectetur feugiat purus sit amet tempus. Morbi facilisis augue id diam rhoncus vulputate. Vestibulum neque risus, semper non mollis eget, pharetra sed risus. Pellentesque nec molestie nisi, in tristique ex. 
                 Donec sapien diam, euismod ut ante quis, hendrerit blandit nisl. Duis vel rutrum mi. Praesent et dui pharetra,
                porta risus vestibulum, pulvinar arcu. Mauris vehicula, purus at facilisis cursus, urna neque blandit quam, ac
               </blockquote>
              <br />
            </Text>
                 </Box>
           </Center>
            <Center m={2} p={2}>
            <Box
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                padding={2}
                className="success-stories1"
             >
            <Text padding={2}>
              <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tellus eu diam venenatis consequat. Integer consectetur feugiat purus sit amet tempus. Morbi facilisis augue id diam rhoncus vulputate. Vestibulum neque risus, semper non mollis eget, pharetra sed risus. Pellentesque nec molestie nisi, in tristique ex. Donec sapien diam, euismod ut ante quis, hendrerit blandit nisl. Duis vel rutrum mi. Praesent et dui pharetra, porta risus vestibulum, pulvinar arcu. Mauris vehicula, purus at facilisis cursus, urna neque blandit quam</blockquote>
              <br />
            </Text>
                 </Box>
            </Center>
            <Center m={2} p={2}>
            <Box
                shadow="lg"
                borderWidth="2px"
                borderRadius="md"
                padding={2}
                className="success-stories1"
             >
            <Text padding={2}>
              <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tellus eu diam venenatis consequat. Integer consectetur feugiat purus sit amet tempus. Morbi facilisis augue id diam rhoncus vulputate. Vestibulum neque risus, semper non mollis eget, pharetra sed risus. Pellentesque nec molestie nisi, in tristique ex. Donec sapien diam, euismod ut ante quis, hendrerit blandit nisl. Duis vel rutrum mi. Praesent et dui pharetra, porta risus vestibulum, pulvinar arcu. Mauris vehicula, purus at facilisis cursus, urna neque blandit quam</blockquote>
              <br />
            </Text>
                 </Box>
            </Center>
           
    </SimpleGrid>
    </Center>
   
    </Center>
  );
}

export default Lifeinitiatives;
