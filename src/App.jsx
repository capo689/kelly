import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Article from './pages/Article'
import Blog from './pages/Blog'
import BookAppointment from './pages/BookAppointment'
import CommunityPage from './pages/CommunityPage'
import Contact from './pages/Contact'
import FindHome from './pages/FindHome'
import Home from './pages/Home'
import ListWithMe from './pages/ListWithMe'
import NotFound from './pages/NotFound'
import RegionPage from './pages/RegionPage'
import SecondHomes from './pages/SecondHomes'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Videos from './pages/Videos'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/SEO'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import { communityRoutes } from './data/communityData'
import { regionPages } from './data/siteData'

export default function App() {
  const location = useLocation()
  return (
    <div className="site-shell">
      <SmoothScroll />
      <ScrollToTop />
      <SEO />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/list-with-me" element={<ListWithMe />} />
          <Route path="/find-a-home" element={<FindHome />} />
          <Route path="/central-oregon" element={<RegionPage data={regionPages.central} />} />
          <Route path="/central-oregon-coast" element={<RegionPage data={regionPages.coast} />} />
          {communityRoutes.map((community) => <Route key={community.path} path={community.path} element={<CommunityPage data={community} />} />)}
          <Route path="/second-homes-investment" element={<SecondHomes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/life-with-two-homes-mountain-beach-living-oregon" element={<Article />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
