import { communityRoutes } from '../data/communityData'

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.kellymillerrealestate.com').replace(/\/$/, '')
export const SITE_NAME = 'Kelly Miller Real Estate'

const baseRoutes = [
  ['/adu-opportunities-yachats', 'ADU Opportunities in Yachats, Oregon | Kelly Miller', 'Explore Yachats’ proposed ADU changes, coastal property possibilities, and questions for buyers with Kelly Miller, a Certified ADU Specialist.', '/media/24_Horizon_Hill_Rd_lot.webp'],
  ['/adus-in-bend-oregon', 'ADUs in Bend, Oregon: Property Possibilities | Kelly Miller', 'Explore Bend’s ADU rules, pre-approved plans, and property considerations with Kelly Miller, an ADU Specialist and Oregon REALTOR®/Broker.', '/media/Kobe3.webp'],
  ['/privacy', 'Privacy Notice | Kelly Miller Real Estate', 'How Kelly Miller’s website handles inquiries, email delivery, Google Analytics and cookies, with contact details for privacy questions.', '/media/IMG_1895.webp'],
  ['/terms', 'Website Terms | Kelly Miller Real Estate', 'Information about website content, property examples, inquiries and appointments with Kelly Miller at Fathom Realty Oregon, LLC.', '/media/IMG_1895.webp'],
  ['/accessibility', 'Accessibility | Kelly Miller Real Estate', 'Accessibility features, improvement goals and direct contact options for help using Kelly Miller’s real-estate website.', '/media/IMG_1895.webp'],
  ['/', 'Central Oregon & Oregon Coast Real Estate | Kelly Miller', 'Explore Central Oregon and Central Oregon Coast real estate with Kelly Miller, an Oregon REALTOR®/Broker (Lic. #201246475) connecting the Cascades and the coast.', '/media/IMG_1895.webp'],
  ['/list-with-me', 'Sell Your Central Oregon or Coast Home | Kelly Miller', 'Thoughtful home-selling guidance for Central Oregon and the Central Oregon Coast, from preparation and positioning through closing.', '/media/Front_De_Haviland.webp'],
  ['/find-a-home', 'Find a Home in Central Oregon or on the Coast | Kelly Miller', 'Start a personal home search in Bend, Sisters, Black Butte Ranch, Newport, Waldport, Yachats, and communities between the Cascades and coast.', '/media/LP3.webp'],
  ['/central-oregon', 'Central Oregon Real Estate Guide | Kelly Miller', 'Explore homes and everyday life in Bend, Sisters, Tumalo, Black Butte Ranch, Camp Sherman, and Redmond with local guidance from Kelly Miller.', '/media/IMG_1895.webp'],
  ['/central-oregon-coast', 'Central Oregon Coast Real Estate Guide | Kelly Miller', 'Explore coastal homes and community life in Newport, Waldport, Yachats, and Seal Rock with Oregon Coast real estate guidance from Kelly Miller.', '/media/IMG_2514.webp'],
  ['/second-homes-investment', 'Oregon Second Homes & Investment Properties | Kelly Miller', 'Explore second homes, vacation properties, and real estate investment considerations across Central Oregon and the Central Oregon Coast.', '/media/24_Horizon_Hill_Rd_lot.webp'],
  ['/services', 'Oregon Buyer & Seller Real Estate Services | Kelly Miller', 'Personal real estate guidance for buying, selling, relocating, and exploring second homes across Central Oregon and the Central Oregon Coast.', '/media/KellyM-PhotosxKristin-2.webp'],
  ['/about-me', 'About Kelly Miller, Oregon REALTOR®/Broker | Lic. #201246475', 'Meet Kelly Miller, a native Oregonian helping clients navigate homes, communities, and lifestyles from the Cascades to the Central Oregon Coast.', '/media/KellyM-PhotosxKristin-1.webp'],
  ['/testimonials', 'Client Experience | Kelly Miller Real Estate', 'Learn how Kelly approaches Oregon real estate with preparation, clear communication, dependable guidance, and personal attention.', '/media/KellyM-PhotosxKristin-3.webp'],
  ['/blog', 'Central Oregon & Oregon Coast Real Estate Journal', 'Stories of Oregon living, outdoor adventures, second homes, and life between the Cascade Mountains and the Central Oregon Coast.', '/media/IMG_1089.webp'],
  ['/life-with-two-homes-mountain-beach-living-oregon', 'Mountain & Beach Living in Oregon | Kelly Miller', 'Explore the idea of life with two homes, one in Central Oregon and one on the Oregon Coast, with practical context for buyers considering both.', '/media/IMG_1895.webp'],
  ['/videos', 'Central Oregon & Oregon Coast Videos | Kelly Miller', 'See the communities, landscapes, and real estate lifestyle Kelly knows from Central Oregon to the Central Oregon Coast.', '/media/IMG_2514.webp'],
  ['/contact', 'Contact Kelly Miller | Oregon Real Estate', 'Contact Kelly Miller for real estate guidance in Central Oregon, Bend, Sisters, Newport, Waldport, Yachats, and surrounding communities.', '/media/KellyM-PhotosxKristin-1.webp'],
  ['/book-appointment', 'Book a Real Estate Conversation | Kelly Miller', 'Schedule a conversation with Kelly Miller about buying or selling in Central Oregon or on the Central Oregon Coast.', '/media/KellyM-PhotosxKristin-2.webp'],
]

const staticSeo = Object.fromEntries(baseRoutes.map(([path, title, description, image]) => [path, { path, title, description, image }]))
// Keep the unfinished testimonials page out of search until approved reviews exist.
staticSeo['/testimonials'].noindex = true
Object.assign(staticSeo['/adu-opportunities-yachats'], {
  articleHeadline: 'ADU Opportunities in Yachats: Proposed Changes and Coastal Property Possibilities',
  datePublished: '2026-09-20',
})
staticSeo['/life-with-two-homes-mountain-beach-living-oregon'].articleHeadline = 'Life With Two Homes: Mountain and Beach Living in Oregon'
Object.assign(staticSeo['/adus-in-bend-oregon'], {
  articleHeadline: 'ADUs in Bend, Oregon: More Possibilities for Your Property',
  datePublished: '2026-09-19',
})

for (const community of communityRoutes) {
  staticSeo[community.path] = {
    path: community.path,
    title: `${community.name}, Oregon Real Estate & Local Guide | Kelly Miller`,
    description: `Explore ${community.name}, Oregon real estate, everyday life, property considerations, and buyer questions with local guidance from Kelly Miller.`,
    image: community.hero,
    community,
  }
}

export const siteRoutes = Object.values(staticSeo)
export const indexableRoutes = siteRoutes.filter((page) => !page.noindex)

function absolute(path = '/') {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE_URL}/#real-estate-agent`,
    name: 'Kelly Miller Real Estate',
    url: SITE_URL,
    logo: absolute('/brand/kelly-miller-logo.png'),
    image: absolute('/media/KellyM-PhotosxKristin-1.webp'),
    telephone: '+1-307-699-0494',
    email: 'kellymiller.realestate@gmail.com',
    description: 'Real estate guidance across Central Oregon and the Central Oregon Coast.',
    areaServed: ['Bend', 'Sisters', 'Tumalo', 'Black Butte Ranch', 'Camp Sherman', 'Redmond', 'Newport', 'Waldport', 'Yachats', 'Seal Rock'].map((name) => ({ '@type': 'Place', name })),
    founder: { '@type': 'Person', name: 'Kelly Miller', jobTitle: 'REALTOR®/Broker', identifier: 'Oregon License #201246475' },
    sameAs: ['https://www.instagram.com/kellymillerrealestate/', 'https://www.facebook.com/profile.php?id=100083294471567'],
  }
}

function breadcrumbSchema(page) {
  const items = [{ name: 'Home', item: SITE_URL }]
  if (page.community) {
    const coast = page.community.region === 'coast'
    items.push({ name: coast ? 'Central Oregon Coast' : 'Central Oregon', item: absolute(coast ? '/central-oregon-coast' : '/central-oregon') })
    items.push({ name: page.community.name, item: absolute(page.path) })
  } else if (page.articleHeadline) {
    items.push({ name: 'Journal', item: absolute('/blog') })
    items.push({ name: page.articleHeadline, item: absolute(page.path) })
  } else if (page.path !== '/') {
    items.push({ name: page.title.split('|')[0].trim(), item: absolute(page.path) })
  }
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })),
  }
}

export function getSeo(pathname = '/') {
  const cleanPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'
  const page = staticSeo[cleanPath] || {
    path: cleanPath,
    title: `Page Not Found | ${SITE_NAME}`,
    description: 'The requested page could not be found.',
    image: '/media/IMG_1895.webp',
    noindex: true,
  }
  const canonical = absolute(page.path)
  const schemas = [
    businessSchema(),
    {
      '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`,
      name: SITE_NAME, url: SITE_URL, publisher: { '@id': `${SITE_URL}/#real-estate-agent` },
    },
    {
      '@context': 'https://schema.org', '@type': page.articleHeadline ? 'Article' : 'WebPage',
      '@id': `${canonical}#webpage`, url: canonical, name: page.title, description: page.description,
      ...(page.articleHeadline ? { headline: page.articleHeadline, image: absolute(page.image), ...(page.datePublished ? { datePublished: page.datePublished } : {}), author: { '@type': 'Person', name: 'Kelly Miller', url: absolute('/about-me') } } : {}),
      isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL },
      about: { '@id': `${SITE_URL}/#real-estate-agent` },
      primaryImageOfPage: { '@type': 'ImageObject', url: absolute(page.image) },
    },
    ...(page.path === '/' ? [] : [breadcrumbSchema(page)]),
  ]
  if (page.community) {
    schemas.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: page.community.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    })
  }
  return { ...page, canonical, image: absolute(page.image), schemas }
}
