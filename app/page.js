import Image from 'next/image'
import Hero from './components/Hero'
import Main from './components/Main'
import WhoWeWre from './components/WhoWeWre'
import Faq from './components/Faq'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Main/>
      <WhoWeWre/>
      <Faq/>
    </main>
  )
}
