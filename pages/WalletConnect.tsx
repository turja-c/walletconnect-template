import { ConnectButton, useAccount } from '@web3modal/react'
import AccountSection from '../pages/sections/AccountSection'
import BalanceSection from '../pages/sections/BalanceSection'
import EnsSection from '../pages/sections/EnsSection'
import SignMessageSection from '../pages/sections/SignMessageSection'
import SignTypedDataSection from '../pages/sections/SignTypedDataSection'
import SwitchChainSection from '../pages/sections/SwitchChainSection'
import { TransactionSection } from '../pages/sections/TransactionSection'

export default function WalletConnect() {
  const { connected } = useAccount()

  return connected ? (
    <>
      <AccountSection />
      <SwitchChainSection />
      <SignTypedDataSection />
      <SignMessageSection />
      <BalanceSection />
      <TransactionSection />
      <EnsSection />
    </>
  ) : (
    <ConnectButton />
  )
}
