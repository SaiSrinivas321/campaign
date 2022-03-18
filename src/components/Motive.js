import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import IMG1 from "../images/img1.png"
import "../styles/styles.css"
const Motive = () => {
  return(
      <Center id='motive' className="motive"  flexDirection = {'column'} p={2} m={2}>
          <Heading m={3} className={'heading'} marginTop={"75px"}>Vision</Heading>
          <Center flexDirection={'column'} width={'100%'} p={2} m={2}>
              <Flex flexDirection={['column','row']} width={'85%'} style={{"transition" : 'transform .2s'}} _hover={{'transform' : "scale(1.1)"}} p={4} m={2} boxShadow={'2xl'} borderRadius={'xl'}>
                  <Box width={['100%','50%']}>
                    <Image src={IMG1} />
                  </Box>
                  <Box  width={['100%','50%']} p={2}>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </Box>

              </Flex>
          </Center>
          <Center flexDirection={'column'} width={'100%'} p={2} m={2}>
              <Flex flexDirection={['column','row-reverse']} width={'85%'} style={{"transition" : 'transform .2s'}} _hover={{'transform' : "scale(1.1)"}} p={4} m={2} boxShadow={'2xl'} borderRadius={'xl'}>
                  <Center width={['100%','50%']}>
                    <Image src={IMG1} />
                  </Center>
                  <Box  width={['100%','50%']} p={2}>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </Box>

              </Flex>

          </Center>
          <Center flexDirection={'column'} width={'100%'} p={2} m={2}>
              <Flex flexDirection={['column','row']} width={'85%'} style={{"transition" : 'transform .2s'}} _hover={{'transform' : "scale(1.1)"}} p={4} m={2} boxShadow={'2xl'} borderRadius={'xl'}>
                  <Box width={['100%','50%']}>
                    <Image src={IMG1} />
                  </Box>
                  <Box  width={['100%','50%']} p={2}>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </Box>

              </Flex>
          </Center>
          <Center flexDirection={'column'} width={'100%'} p={2} m={2}>
              <Flex flexDirection={['column','row-reverse']} width={'85%'} style={{"transition" : 'transform .2s'}} _hover={{'transform' : "scale(1.1)"}}  boxShadow={'2xl'} p={4} m={2}>
                  <Center width={['100%','50%']}>
                    <Image src={IMG1} />
                  </Center>
                  <Box  width={['100%','50%']} p={2}>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </Box>

              </Flex>

          </Center>

      </Center>
  );
}

export default Motive;
