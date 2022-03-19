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
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Routes,
} from "react-router-dom";
import Manifesto from './components/Manifesto';
function App() {

  return (
    <ChakraProvider theme={theme}>
      <Flex height={'100vh'}>
      <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/manifesto" element={<Manifesto />} />
      </Routes>
      </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
