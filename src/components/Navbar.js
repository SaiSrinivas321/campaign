import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Progress,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import "../styles/styles.css"

const Navbar = ({percentage}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if(percentage > 95){
    percentage = 100
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')}  zIndex={10} className={'navbar'} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={2}>
          <HStack spacing={8} alignItems={'center'}>
          <a href="/" _hover = {{ textDecoration : 'none'}} >
            <Heading size={'lg'}  >#<span className = 'hashtag'>C</span>ul<span className = 'hashtag'>S</span>ec<span className = 'hashtag'>D</span>heeraj</Heading>
             </a>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                    <Box m={1} pt={2} px={2} >
                   <a href='#motive'><Heading size={'md'} className={'navtext'}>Vision</Heading></a> 
                    </Box>
                    <Box m={1} pt={2} px={2} >
                    <a href='/manifesto'> <Heading size={'md'} className={'navtext'} isDisabled>Manifesto</Heading></a>
                    </Box>
                    <Box m={1} pt={2} px={2} >
                    <a href='#credentials'> <Heading size={'md'} className={'navtext'}>Credentials</Heading></a>
                    </Box>
                    <Box pt={2} px={2}>
                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                       <Heading size={'md'} className={'navtext'}>Campaign</Heading>
                    </MenuButton>
                    <MenuList>
                        <MenuItem isDisabled> <Text>Feasibility-report</Text></MenuItem>
                        <MenuDivider />
                        <MenuItem isDisabled> <Text>Video Campaign</Text></MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          </Flex>
         
        </Flex>
        <Box width={"100%"}>
        <Progress hasStripe value={percentage}  size='sm'/>
        </Box>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} zIndex={10}>
            <Stack as={'nav'} spacing={4} zIndex={10}>
            <Box m={1} pt={2} px={2} >
            <a href='#motive'><Heading size={'md'} className={'navtext'}>Vision</Heading></a>
                    </Box>
                    <Box m={1} pt={2} px={2} >
                    <a href='#'> <Heading size={'md'} className={'navtext'} isDisabled>Manifesto</Heading></a>
                    </Box>
                    <Box m={1} pt={2} px={2} >
                    <a href='#credentials'> <Heading size={'md'} className={'navtext'}>Credentials</Heading></a>
                    </Box>
                    
                    <Box pt={2} px={2}>
                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                        Campaign
                    </MenuButton>
                    <MenuList>
                        <MenuItem isDisabled><Text>Feasibility-report</Text></MenuItem>
                        <MenuDivider />
                        <MenuItem isDisabled><Text>Video Campaign </Text></MenuItem>
                    </MenuList>
                    </Menu>
                    </Box>
            </Stack>
          </Box>
        ) : null}
       
      </Box>
    </>
  );
}

export default Navbar;