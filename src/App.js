import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Manifesto from './components/Manifesto';
import Feasibility from './components/Feasibility';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/feasibility" element={<Feasibility />} />
          </Routes>
        </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
