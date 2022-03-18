import { Center, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/styles.css'

const culcred = [
  {
    title : "Non Competitive Events (Informals, Meraki, Spotlight) head",
    year : "2021- present",
    color : "#FF1818"
  },
  {
    title : "Cauvery Hostel Literary Secretary",
    year : "2019-20",
    color : "#6D42C7"
  },
  {
    title : "Cauvery Sangam Representative",
    year : "2020-21",
    color : "#FF6107"
  },
  {
    title : "Nova Coordinator",
    year : "2020-21",
    color : "#357C3C"
  },
  
]
const gencred = [
  
  {
    title : "Consultant 180 Degrees Consulting IITM ",
    year : "2021 - present",
    color : "#313552"
  },
  {
    title : "Internship Coordinator",
    year : "2020-21",
    color :"#FFC300"
  },
  {
    title : "Ches Sponsorship coordinator",
    year : "2020-21",
    color : "#9A0680"
  },
  {
    title : "Workshops coordinator shaastra",
    year : "2020-21",
    color : "#533535"
  },
  {
    title : "Moot court volunteer",
    year : "2019-20",
    color : "#F21170"
  },
  
]
const Credentials = () =>{
  return (
    <>
    <Center id='credentials' textAlign={'center'} flexDirection = {'column'} p={2} m={2} fontWeight={700}>
    <Heading m={2} className="heading" marginTop={"75px"}>Cultural Credentials</Heading>
    <VerticalTimeline>
    {
      culcred.map(cred => (
        <VerticalTimelineElement  contentStyle={{ background: cred.color, color: '#fff' }}
      contentArrowStyle={{ borderRight: `7px solid ${cred.color} ` }}
      date={cred.year}
      iconStyle={{ background: cred.color, color: '#fff' }}>
        <h4>
         {
           cred.title
         }
        </h4>
        </VerticalTimelineElement>
      ))
    }   
    </VerticalTimeline>
     <Heading m={2} className="heading" color={"#03045E"}>Gen Credentials</Heading>
     <VerticalTimeline>
     {
       gencred.map(cred => (
         <VerticalTimelineElement  contentStyle={{ background: cred.color, color: '#fff' }}
       contentArrowStyle={{ borderRight: `7px solid ${cred.color}` }}
       date={cred.year}
       iconStyle={{ background: cred.color, color: '#00C897' }}>
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
