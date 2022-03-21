import { useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import {
  Box,
  Center,
  Container,
  Stack,
  Button,
  Text,
  Icon,
} from '@chakra-ui/react';

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
      target={'_blank'}
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
  // const [name, setname] = useState('');
  // const [email, setemail] = useState('');
  // const [subject, setsubject] = useState('');
  // const [message, setmessage] = useState('');

  // function submitForm() {
  //   window.open(
  //     `mailto:${'srinivas.32194@gmail.com'}?subject=${encodeURIComponent(
  //       subject
  //     )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
  //       email
  //     )}): ${encodeURIComponent(message)}`
  //   );
  // }

  return (
    <Center
      width={'100%'}
      style={{ position: 'relative' }}
      flexDirection={'column'}
      p={3}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Center width={'100%'} flexDirection={'column'} p={2}>
        {/* <Heading>Any Queries?</Heading> */}
        {/* <form onSubmit={submitForm} style={{width : '60%'}}>
                <Stack
                width={'100%'}
                  spacing={8}
                  m={3}
                  marginBottom={5}
                  paddingLeft={2}
                  paddingRight={2}
                >
                  <Input
                    placeholder='Name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    padding={2}
                  />
                  <Input
                    placeholder='Email'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    padding={2}
                  />
                  <Input
                    placeholder='Subject'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='subject'
                    name='subject'
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                    padding={2}
                  />
                  <Textarea
                    placeholder='Message'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='message'
                    name='message'
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    padding={2}
                  />
                </Stack>
               <Center>
               <Button
                  width={'25%'}
                  color='white'
                  colorScheme={'blue'}
                  marginTop={3}
                  marginBottom={5}
                  className='submit-btn'
                  onClick={submitForm}
                  type='submit'
                >
                  Send
                </Button>
               </Center>
              </form> */}
      </Center>
      <Center flexDirection={'column'}>
        <Text mb={2}>Designed by Naga Sai , Srinivas</Text>
      </Center>
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
            <a href="mailto:dheerajcs2210@gmail.com">
              <SocialButton label={'Twitter'}>
                <Icon as={FaEnvelope} w={5} h={5} _hover={{ color: 'red' }} />
              </SocialButton>
            </a>
            <SocialButton
              label={'Instagram'}
              href={
                'https://instagram.com/culseclit_csdheeraj?utm_medium=copy_link'
              }
            >
              <Icon as={FaInstagram} w={5} h={5} _hover={{ color: 'pink' }} />
            </SocialButton>
            <SocialButton
              label={'Whats app'}
              href={'https://wa.me/917337493297'}
            >
              <Icon as={FaWhatsapp} w={5} h={5} _hover={{ color: '#075e54' }} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Center>
  );
};

export default Footer;
