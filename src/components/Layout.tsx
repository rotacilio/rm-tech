import { Outlet } from 'react-router-dom'
import GridBackground from './ui/GridBackground'
import ScrollProgress from './ui/ScrollProgress'
import ScrollToHash from './ScrollToHash'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <ScrollProgress />
      <ScrollToHash />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
