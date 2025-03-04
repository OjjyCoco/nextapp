import Link from "next/link"
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  return (
    <nav className="navbar">
        <div>Logo</div>
        <div className="flex-between w-1/4">
            <Link href="/">Home</Link>
            <Link href="/cv">CV</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dapp">DApp</Link>
        </div>
        <ConnectButton />
    </nav>
  )
}

export default Header