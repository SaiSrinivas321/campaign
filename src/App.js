import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import axios from 'axios'

function App() {
  let { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  onClose = () => {window.location.reload()};
  const [alertt , setAlert] = useState();

  React.useEffect(()=>{
    document.addEventListener('contextmenu',(e)=>{
      e.preventDefault();
      setAlert(true);
    })
    document.onkeydown = (e) =>{
      if(e.ctrlKey || e.shiftKey || e.key == 'F12'){
        e.preventDefault();
        setAlert(true)
      }
    }
  })
  return (
    <ChakraProvider theme={theme}>
      {
        alertt ? (    <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={true}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader></AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody fontSize='xl' fontWeight={'bold'}>Method Not allowed</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>) : null
      }
      <Home />
    </ChakraProvider>
  );
}

export default App;
