import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import { regionPages } from './data/siteData'

const Home = lazy(() => import('./pages/Home'))
const ListWithMe = lazy(() => import('./pages/ListWithMe'))
const FindHome = lazy(() => import('./pages/FindHome'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const RegionPage = lazy(() => import('./pages/RegionPage'))
const SecondHomes = lazy(() => import('./pages/SecondHomes'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Blog = lazy(() => import('./pages/Blog'))
const Article = lazy(() => import('./pages/Article'))
const Videos = lazy(() => import('./pages/Videos'))
const Contact = lazy(() => import('./pages/Contact'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const location = useLocation()
  return (
    <div className="site-shell">
      <SmoothScroll />
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-loader" aria-label="Loading page" />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/list-with-me" element={<ListWithMe />} />
            <Route path="/find-a-home" element={<FindHome />} />
            <Route path="/central-oregon" element={<RegionPage data={regionPages.central} />} />
            <Route path="/central-oregon-coast" element={<RegionPage data={regionPages.coast} />} />
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
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
