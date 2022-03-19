import {
  Center,
  Flex,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  Button,
  useDisclosure,
  AlertDialogBody,
} from '@chakra-ui/react';
import About from './About';
import Credentials from './Credentials';
import Motive from './Motive';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import React, { useState } from 'react';
import '../styles/styles.css';
import Footer from './Footer';

const Home = () => {
  const [per, setPer] = useState(0);
  let { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  onClose = () => {
    window.location.reload();
  };
  const [alertt, setAlert] = useState();

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setPer(scrollPostion);
  };
  const listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  React.useEffect(async () => {
    listenToScrollEvent();
  });
  React.useEffect(() => {
    document.addEventListener('contextmenu', e => {
      e.preventDefault();
      setAlert(true);
    });
    document.onkeydown = e => {
      if (e.ctrlKey || e.shiftKey || e.key == 'F12') {
        e.preventDefault();
        setAlert(true);
      }
    };
  });
  return (
    <Flex flexDirection={'column'} className="mainbg">
      <Flex width={'100%'} flexDirection={'column'}>
        {alertt ? (
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={true}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader></AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody fontSize="xl" fontWeight={'bold'}>
                Method Not allowed
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Ok
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : null}
        <Navbar percentage={per} />
        <Center>
          <About />
        </Center>
      </Flex>
      <Motive />
      <Credentials />
      {/* <Lifeinitiatives /> */}
      <Testimonials />
      <Footer />
    </Flex>
  );
};

export default Home;
