import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { Web3ModalProvider } from '@web3modal/react'
import { ChakraProvider } from '@chakra-ui/react'

const config: ConfigOptions = {
  projectId: '52cb0732fe5c6e4ca4914e5a3df2190e',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
    <Web3ModalProvider config={config}>
      <Component {...pageProps} />
    </Web3ModalProvider>
    </ChakraProvider>
     )
}

export default MyApp
