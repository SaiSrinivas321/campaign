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
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';
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
            <Heading size={'lg'}  >#<span style ={{'font-weight': 800,'color' : 'orange'}}>C</span>ul<span style ={{'font-weight': 800,'color' : '#32CD32'}}>S</span>ec<span style ={{'font-weight': 800,'color' : '#87CEEB'}}>D</span>heeraj</Heading>
             </a>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                    <Box m={1} pt={2} px={2} >
                   <a href='#motive'><Heading size={'md'} className={'navtext'}>Initiatives</Heading></a> 
                    </Box>
                    <Box m={1} pt={2} px={2} >
                    <a href='/manifesto' target={'_blank'}> <Heading size={'md'} className={'navtext'}>Manifesto</Heading></a>
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
                    <a href='/feasibility' target={'_blank'}> <MenuItem> <Text>Feasibility-report</Text></MenuItem></a>
                    <MenuItem isDisabled> <Text>Video Campaign</Text></MenuItem>
                        <MenuDivider />
                        <a href={'https://wa.me/917337493297'} target={'_blank'}><MenuItem> <Icon as={FaWhatsapp} my={1} mx={2} boxSize={'5'}/><Text p={2}>Contact</Text></MenuItem></a>
  
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
            <Box m={1} pt={2} px={2} onClick={onClose}>
            <a href='#motive'><Heading size={'md'} className={'navtext'}>Initiatives</Heading></a>
                    </Box>
                    <Box m={1} pt={2} px={2} onClick={onClose}>
                    <a href='/manifesto' target={'_blank'}> <Heading size={'md'} className={'navtext'}>Manifesto</Heading></a>
                    </Box>
                    <Box m={1} pt={2} px={2} onClick={onClose} >
                    <a href='#credentials'> <Heading size={'md'} className={'navtext'}>Credentials</Heading></a>
                    </Box>
                    
                    <Box pt={2} px={2}>
                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                       <Heading size={'md'} className={'navtext'}>Campaign</Heading>
                    </MenuButton>
                    <MenuList>
                    <a href='/feasibility' target={'_blank'}> <MenuItem onClick={onClose}> <Text>Feasibility-report</Text></MenuItem></a>
                    <MenuItem isDisabled> <Text>Video Campaign</Text></MenuItem>
                        <MenuDivider />
                        <a href={'https://wa.me/917337493297'} target={'_blank'}><MenuItem onClick={onClose} ><Icon as={FaWhatsapp} my={1} mx={2} boxSize={'5'} /> <Text p={2}>Join Campaign</Text></MenuItem></a>
  
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