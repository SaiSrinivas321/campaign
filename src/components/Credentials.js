import { Center, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/styles.css'

const culcred = [
  {
    title : "Non Competitive Events (Informals, Meraki, Spotlight) head",
    year : "2021- present"
  },
  {
    title : "Cauvery Hostel Literary Secretary",
    year : "2019-20"
  },
  {
    title : "Cauvery Sangam Representative",
    year : "2020-21"
  },
  {
    title : "Nova Coordinator",
    year : "2020-21"
  },
  
]
const gencred = [
  
  {
    title : "Consultant 180 Degrees Consulting IITM ",
    year : "2021 - present"
  },
  {
    title : "Internship Coordinator",
    year : "2020-21"
  },
  {
    title : "Ches Sponsorship coordinator",
    year : "2020-21"
  },
  {
    title : "Workshops coordinator shaastra",
    year : "2020-21"
  },
  {
    title : "Moot court volunteer",
    year : "2019-20"
  },
  
]
const Credentials = () =>{
  return (
    <>
    <Center id='credentials' flexDirection = {'column'} p={2} m={2} fontWeight={700}>
    <Heading m={2} className="heading" marginTop={"75px"}>Cultural Credentials</Heading>
    <VerticalTimeline>
    {
      culcred.map(cred => (
        <VerticalTimelineElement  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={cred.year}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
        <h4>
         {
           cred.title
         }
        </h4>
        </VerticalTimelineElement>
      ))
    }   
    </VerticalTimeline>
     <Heading m={2} className="heading">Gen Credentials</Heading>
     <VerticalTimeline>
     {
       gencred.map(cred => (
         <VerticalTimelineElement  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
       date={cred.year}
       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
         <h4>
          {
            cred.title
          }
         </h4>
         </VerticalTimelineElement>
       ))
     }
 
         
     </VerticalTimeline>
 
   
     </Center>
     </>
  );
}

export default Credentials;
