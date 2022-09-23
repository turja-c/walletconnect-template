import { Center, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import WalletConnect from './WalletConnect'

const Home: NextPage = () => {
  return (
      <Container style={{marginTop: '20rem'}}>
        <Center>
          <WalletConnect />
        </Center>
      </Container>
  )
}

export default Home
