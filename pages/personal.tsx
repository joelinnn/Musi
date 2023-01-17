import dynamic from 'next/dynamic'
import ProfileImage from '../components/ProfileImage'
import { NavBar } from '../components/NavBar'
import { PersonalDescription } from '../components/PersonalDescription'
import { CommentSection } from '../components/CommentSection'
import { Container } from '@chakra-ui/react'
import { useState } from 'react'

const LazyVisualizer = dynamic(() => import('../components/AudioVisualizer'), {
  ssr: false
})

const personal = () => {
  interface Data {
    imgURL: string,
    name: string,
    instruments: string[],
  }

  const [data, setData] = useState({
    imgURL: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
    name: 'Tracy Hillberg',
    instruments: ['cello', 'flute', 'drums'],
  })

  return(
    <>
      <NavBar />
      <Container>
        <ProfileImage imgURL={data.imgURL} name={data.name}/>
        <PersonalDescription instruments={data.instruments} sectionName='personal'/>
        <LazyVisualizer/>
        <CommentSection/>
      </Container>
    </>
  )
}

export default personal;