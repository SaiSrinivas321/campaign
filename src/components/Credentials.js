import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/styles.css';

const culcred = [
  {
    title: 'Non Competitive Events Head (Informals, Meraki, Spotlight) ',
    year: '2021- present',
    color: '#FFB72B',
  },
  {
    title: 'Literary Secretary, Cauvery Hostel',
    year: '2019-20',
    color: '#B5FE83',
  },
  {
    title: 'Sangam Representative, Cauvery Hostel',
    year: '2020-21',
    color: '#FFB72B',
  },
  {
    title: 'Nova Coordinator, Saarang',
    year: '2020-21',
    color: '#B5FE83',
  },
];
const gencred = [
  {
    title: 'Consultant, 180 Degrees Consulting IITM ',
    year: '2021 - present',
    color: '#FFE61B',
  },
  {
    title: 'Internship Coordinator',
    year: '2020-21',
    color: '#00B4D8',
  },
  {
    title: 'Sponsorship Coordinator, ChES',
    year: '2020-21',
    color: '#FFE61B',
  },
  {
    title: 'Workshops Coordinator, Shaastra',
    year: '2020-21',
    color: '#00B4D8',
  },
  {
    title: 'Moot Court Volunteer, Shaastra',
    year: '2019-20',
    color: '#FFE61B',
  },
];
const Credentials = () => {
  const [animate,setAnimate] = React.useState()
  React.useEffect(()=>{
    if(window.innerWidth > 1169){
      setAnimate(true)
    }else{
      setAnimate(false)
    }
  },[])
  return (
    <>
      <Center
        id="credentials"
        textAlign={'center'}
        flexDirection={'column'}
        p={2}
        m={2}
        fontWeight={700}
      >
        <Heading m={2} className="heading" marginTop={'75px'}>
          Cultural Credentials
        </Heading>
        <VerticalTimeline animate = {animate}>
          {culcred.map(cred => (
            <VerticalTimelineElement
             key={cred.title}
              contentStyle={{ background: cred.color, color: 'black' }}
              contentArrowStyle={{ borderRight: `7px solid ${cred.color} ` }}
              date={cred.year}
              iconStyle={{ background: cred.color, color: '#fff' }}
            >
              <h4 style={{ fontSize: '18px' }}>{cred.title}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <Heading m={2} className="heading" color={'#03045E'}>
          Gen Credentials
        </Heading>
        <VerticalTimeline animate = {animate}>
          {gencred.map(cred => (
            <VerticalTimelineElement
             key={cred.title}
              contentStyle={{ background: cred.color, color: 'black' }}
              contentArrowStyle={{ borderRight: `7px solid ${cred.color}` }}
              date={cred.year}
              iconStyle={{ background: cred.color, color: '#00C897' }}
            >
              <h4 style={{ fontSize: '18px' }}>{cred.title}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Center>
    </>
  );
};

export default Credentials;
