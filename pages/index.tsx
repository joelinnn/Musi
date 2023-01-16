import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'

const LazyVisualizer = dynamic(() => import('../components/AudioVisualizer'), {
  ssr: false
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue-Ocean</title>
      </Head>

      <Container>
        <NavBar mb='10rem'/>
        <LazyVisualizer/>
      </Container>
    </>
  )
}
