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
    title: 'Head, Non Competitive Events (Informals, Meraki, Spotlight) || Sangam - Saarang ',
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
    title: 'Litsoc Representative, Godavari Hostel',
    year: '2022-present',
    color: '#B5FE83',
  },
  {
    title: 'Coordinator, Nova || Saarang',
    year: '2020-21',
    color: '#FFB72B',
  },
];
const gencred = [
  {
    title: 'Consultant, 180 Degrees Consulting IITM ',
    year: '2021 - 2022',
    color: '#FFE61B',
  },
  {
    title: 'Coordinator, Internship Team',
    year: '2020-21',
    color: '#00B4D8',
  },
  {
    title: 'Coordinator, Sponsorship & Finance || ChES',
    year: '2020-21',
    color: '#FFE61B',
  },
  {
    title: 'Coordinator, Events & Workshops || Shaastra',
    year: '2020-21',
    color: '#00B4D8',
  },
  {
    title: 'Volunteer, Moot Court || Shaastra',
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
          Relevant Credentials
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
          Other Credentials
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
