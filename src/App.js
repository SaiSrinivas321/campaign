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
} from 'react-router-dom';
import Manifesto from './components/Manifesto';
import Feasibility from './components/Feasibility';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/dheerajforcul/" element={<Home />} />
            <Route path="/dheerajforcul/manifesto" element={<Manifesto />} />
            <Route path="/dheerajforcul/feasibility" element={<Feasibility />} />
          </Routes>
        </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
