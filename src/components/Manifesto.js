import { Flex } from '@chakra-ui/react';
import React from 'react';
import DOC from '../images/Manifesto.pdf';
import '../styles/styles.css';

const Manifesto = () => {
  return (
    <Flex className='Manifesto'>
      <iframe src={`${DOC}#view=fitH`} title="testPdf" height="100%" width="100%" allowFullScreen></iframe>
    </Flex>
  );
};

export default Manifesto;
