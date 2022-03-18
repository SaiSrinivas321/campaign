import { Link, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FaInstagram,
  FaRegThumbsUp,
  FaThumbsUp,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa';
import {
  Box,
  Center,
  Container,
  Input,
  Stack,
  Button,
  Text,
  Icon,
  Textarea,
} from '@chakra-ui/react';
import CountUp from 'react-countup';
var axios = require('axios');

const SocialButton = ({ children, label, href, color }) => {
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
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};
const Footer = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');
  const [ipv, setIpv] = useState('');

  React.useEffect(() => {

    const getData = async () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch("http://localhost:5000/count", requestOptions)
        .then(response => response.json())
        .then(result =>{ if(result.message){
          setCount(result.message)
        }})
        .catch(error => console.log('error', error));

      const res = await axios.get('https://geolocation-db.com/json/');
      setIpv(res.data.IPv4);
      var config = {
        method: 'get',
        url: `http://localhost:5000/support?id=${res.data.IPv4}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      await axios(config)
        .then(function (response) {
          if(response.data.message) setLike(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getData();
  });

  function submitForm() {
    window.open(
      `mailto:${'dheerajcs2210@gmail.com'}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  }

  const handleClick = async () => {
    var axios = require('axios');
    var data = JSON.stringify({
      id: ipv,
    });

    var config = {
      method: 'POST',
      url: 'http://localhost:5000/support',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        setLike(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Center
      width={'100%'}
      style={{ position: 'relative' }}
      flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
      p={2}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Center flexDirection={'column'}>
        <Box color={useColorModeValue('gray.700', 'gray.200')} width={'100%'}>
          <Container
            as={Stack}
            // maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <Icon as={FaEnvelope} w={5} h={5} _hover={{ color: 'red' }} />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <Icon as={FaInstagram} w={5} h={5} _hover={{ color: 'pink' }} />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <Icon
                  as={FaFacebook}
                  w={5}
                  h={5}
                  _hover={{ color: 'blue.400' }}
                />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
        <Text m={2}>
          {' '}
          Join{' '}
          <span>
            <Link>Campaign</Link>
          </span>
        </Text>
        <Text mb={2}>Designed by Naga Sai , Srinivas</Text>
      </Center>
      <Center
        flexDirection={'column'}
        className={window.innerWidth > 1200 && 'supportus'}
        p={2}
        m={2}
        justifySelf={['flex-end']}
      >
        <Button
          p={2}
          width={'100%'}
          leftIcon={
            like ? <FaThumbsUp color="blue" /> : <FaRegThumbsUp color="blue" />
          }
          colorScheme="blue"
          variant="solid"
          onClick={handleClick}
          isDisabled={like}
        >
          Show your Support
        </Button>
        <Box p={2} width={'100%'}>
          <Center>
            <Text fontWeight={'600'}>
              Supporters : <strong><CountUp end={count} /></strong>
            </Text>
          </Center>
        </Box>
      </Center>
      <Center>
        <form onSubmit={submitForm}>
          <Stack
            spacing={8}
            m={3}
            marginBottom={5}
            paddingLeft={2}
            paddingRight={2}
          >
            <Input
              variant="flushed"
              placeholder="Name"
              _placeholder={{ color: 'gray.500' }}
              color="black"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setname(e.target.value)}
              borderBottomColor="black"
              padding={2}
            />
            <Input
              variant="flushed"
              placeholder="Email"
              _placeholder={{ color: 'gray.500' }}
              color="black"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setemail(e.target.value)}
              borderBottomColor="black"
              padding={2}
            />
            <Input
              variant="flushed"
              placeholder="Subject"
              _placeholder={{ color: 'gray.500' }}
              color="black"
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={e => setsubject(e.target.value)}
              borderBottomColor="black"
              padding={2}
            />
            <Textarea
              variant="flushed"
              placeholder="Message"
              _placeholder={{ color: 'gray.500' }}
              color="black"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={e => setmessage(e.target.value)}
              borderBottomColor="black"
              padding={2}
            />
          </Stack>
          <Button
            color="black"
            backgroundColor="#ff7e20"
            marginTop={3}
            marginBottom={5}
            className="submit-btn"
            onClick={submitForm}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Center>
    </Center>
  );
};

export default Footer;
