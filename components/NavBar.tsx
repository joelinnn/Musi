import { Box, Container, Stack } from '@chakra-ui/react'
import { DarkMode } from './DarkMode'
import { LoginModal } from './LoginModal'
import { BandModal } from './BandModal'

export const NavBar = (props:any) => {
  return (
    <Box as='nav' w='100%' css={{ backDropFilter: 'blur(10px)' }}{...props}>
      <Container display='flex' p={2} maxW='container.xl'>
        <Stack direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
            mt={{ base: 5, md: 0 }}/>
        <Stack direction='row'>
          <LoginModal/>
          <BandModal/>
          <DarkMode/>
        </Stack>
      </Container>
  </Box>
  )
}