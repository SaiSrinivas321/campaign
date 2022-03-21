import { Center } from '@chakra-ui/react';
import React from 'react';
import '../styles/styles.css';

const Manifesto = () => {
  return (
    // <Flex className='Manifesto'>
    //     {/* ${DOC}#view=fitH?zoom=50 */}
    //   <iframe loading="lazy" src={`https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE7X5mQZsg&#x2F;view?embed`} title="Manifesto" height="100%" width="100%" allowFullScreen>
    //   </iframe>
    // </Flex>
    <React.Fragment>
        <Center width={'100%'}>
        <Center width={['100%','80%']}>
        <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '141.4286%', paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
          <iframe title='Manifesto' loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}} src="https://www.canva.com/design/DAE7X5mQZsg/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
          </iframe>
        </div>
        <a href="https://www.canva.com/design/DAE7X5mQZsg/view?utm_content=DAE7X5mQZsg&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noreferrer">Manifesto</a>
        </Center>
        </Center>
      </React.Fragment>
  );
};

export default Manifesto;
