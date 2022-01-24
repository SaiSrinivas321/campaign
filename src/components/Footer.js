import { Box, Button, Center, Container, Flex, Heading, Icon, Link, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube,FaEnvelope, FaFacebook } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import countapi from 'countapi-js';
import { FaHeart, FaRegHeart, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
var uuid = require("uuid");
const SocialButton = ({
    children,
    label,
    href,
    color
  }) => {
    return (
      <Button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={12}
        h={12}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    );
  };
const Footer = () => {
  const [count , setCount] = useState(0);
  const [like,setLike] = useState(false);

  React.useEffect(async ()=>{
    await countapi.get('dheerajforculsec', '8af8c613-9f91-4dcd-b24c-e1edf524fc6d')
    .then((result) => { 
      if(result.status == 200){
        setCount(result.value)
      }
    });
    let cookies = new Cookies();
    if(cookies.get('dheerajforcul')){
      setLike(true);
    }
  })
    
  return(
    <Center width={"100%"} style={{'position' : 'relative'}} flexDirection ={['column-reverse','column-reverse','row','row']} p={2} bg={useColorModeValue('gray.50', 'gray.900')}>
    <Center flexDirection={'column'}>
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      width={'100%'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <Icon as={FaEnvelope} w={5} h={5} _hover={{color : "red"}}/>
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <Icon as={FaInstagram} w={5} h={5} _hover={{color : "pink"}}/>
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <Icon as={FaFacebook} w={5} h={5} _hover={{color : 'blue.400'}}/>
          </SocialButton>
        </Stack>
      </Container> 
    </Box>
    <Text m={2}> Join  <span><Link>Campaign</Link></span></Text>
    <Text mb={2}>Designed by Naga Sai , Srinivas</Text>
    </Center>
         <Center flexDirection={'column'}  className={window.innerWidth >1200 && 'supportus'} p={2} m={2} justifySelf={['flex-end']}>
         <Button p={2}  width={'100%'} leftIcon={like ?<FaThumbsUp color='blue'/> :<FaRegThumbsUp color='blue' />} colorScheme='blue' variant='solid'
         onClick={async ()=>{
          await countapi.update('dheerajforculsec', '8af8c613-9f91-4dcd-b24c-e1edf524fc6d', +1);
          const cookies = new Cookies();
          cookies.set('dheerajforcul', uuid,{expires :new Date("April 30, 2022 23:59:59")});
          window.location.reload()
         }}   isDisabled = {like}>
          Show your Support
        </Button>
        <Box  p={2}  width={'100%'}>
        <Text fontWeight={"600"}>Supporters : <strong>{count}</strong></Text>
        </Box>
         </Center>
    </Center>
  );
}

export default Footer;
