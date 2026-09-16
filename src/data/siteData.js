export const contact = {
  phone: '(307) 699-0494',
  phoneHref: 'tel:+13076990494',
  email: 'kellymiller.realestate@gmail.com',
  emailHref: 'mailto:kellymiller.realestate@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100083294471567',
  instagram: 'https://www.instagram.com/kellymillerrealestate/',
  license: 'Oregon Lic. #201246475',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'List With Me', to: '/list-with-me' },
  { label: 'Find a Home', to: '/find-a-home' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about-me' },
  { label: 'Journal', to: '/blog' },
]

export const regionCards = [
  {
    eyebrow: 'Central Oregon',
    title: 'Mountain and high-desert homes',
    copy: 'Explore Bend, Tumalo, Sisters, Black Butte Ranch, and Camp Sherman.',
    image: '/media/LP3.webp',
    to: '/central-oregon',
  },
  {
    eyebrow: 'Central Oregon Coast',
    title: 'Coastal homes and getaways',
    copy: 'Explore Newport, Waldport, Seal Rock, and Yachats.',
    image: '/media/IMG_2514.webp',
    to: '/central-oregon-coast',
  },
  {
    eyebrow: 'Across Both Regions',
    title: 'Second homes and investments',
    copy: 'Consider the possibilities without having to choose between mountains and ocean.',
    image: '/media/24_Horizon_Hill_Rd_lot.webp',
    to: '/second-homes-investment',
  },
]

export const regionPages = {
  central: {
    path: '/central-oregon',
    eyebrow: 'Central Oregon Real Estate',
    title: 'Find the Place That Fits the Way You Live',
    intro: 'What does your ideal Central Oregon lifestyle look like? From Bend and Sisters to Tumalo, Black Butte Ranch, and Camp Sherman, the right property starts with understanding what matters most to you.',
    hero: '/media/IMG_1895.webp',
    alignment: 'center 42%',
    statement: 'Your priorities are unique. Your home should be, too.',
    cards: [
      { tag: 'Connected', title: 'Bend and the Old Mill', text: 'Walkability, restaurants, the Deschutes River, and a lively Central Oregon rhythm.', image: '/media/LP3.webp' },
      { tag: 'Elevated', title: 'Mountain Lifestyle', text: 'Room to breathe, easy trail access, mountain views, and the quiet pull of the Cascades.', image: '/media/LP1.webp' },
      { tag: 'A Place to Begin', title: 'First Home', text: 'A practical search shaped around your priorities, your pace, and the way you want to live.', image: '/media/Main_front.webp' },
    ],
    priorities: [
      'Walkability and access to restaurants and local amenities',
      'Mountain views or a peaceful setting',
      'Easy access to hiking, biking, skiing, and outdoor recreation',
      'A larger yard or space for a workshop',
      'A neighborhood close to schools, parks, or community activities',
      'A second home or Central Oregon getaway',
      'Investment potential and long-term value',
    ],
    closeTitle: 'Let’s Find Your Central Oregon',
    closeCopy: 'Whether you are buying your first home, searching for a mountain retreat, relocating, or investing, I will take the time to understand what you are looking for and how you want to live.',
    cta: 'Start Your Central Oregon Search',
  },
  coast: {
    path: '/central-oregon-coast',
    eyebrow: 'Central Oregon Coast Real Estate',
    title: 'Find Your Place by the Sea',
    intro: 'Maybe it is waking up to ocean views, walking to the beach with your morning coffee, or ending the day watching the waves. Every coastal community offers its own pace, character, and view.',
    hero: '/media/IMG_2514.webp',
    alignment: 'center 48%',
    statement: 'Your Oregon Coast adventure starts here.',
    cards: [
      { tag: 'Ocean View', title: 'Room for the Horizon', text: 'A coastal home, a second home, or land with a view that makes every day feel different.', image: '/media/24_Horizon_Hill_Rd_lot.webp' },
      { tag: 'Newport', title: 'Marina and Bay Life', text: 'The working waterfront, local restaurants, fresh seafood, shops, and the energy of Nye Beach.', image: '/media/IMG_1025.webp' },
      { tag: 'Coastal Cottage', title: 'A Slower Pace', text: 'A tucked-away home close to the shoreline, forest trails, and everything you love about the coast.', image: '/media/Kobe1.webp' },
    ],
    priorities: [
      'Oceanfront or ocean-view property',
      'A home within walking distance of the beach',
      'A quiet community with a slower pace',
      'Restaurants, shops, and local amenities close by',
      'Easy access to hiking, beaches, and outdoor recreation',
      'A weekend getaway or vacation home',
      'Long-term investment potential',
    ],
    closeTitle: 'Find the Right Fit',
    closeCopy: 'Buying real estate is about more than finding a property. It is about finding the setting, community, and way of life that work for you.',
    cta: 'Start Your Coast Search',
  },
}

export const videoTopics = [
  { title: 'The Central Oregon Coast', image: '/media/IMG_2514.webp', subtitle: 'Coastline and community' },
  { title: 'Life Near the Cascades', image: '/media/IMG_1131.webp', subtitle: 'Mountain air and open space' },
  { title: 'Community Spotlight', image: '/media/IMG_1025.webp', subtitle: 'Places worth knowing' },
  { title: 'Oregon with Kiva and Xoco', image: '/media/IMG_0417.webp', subtitle: 'The trails Kelly loves' },
  { title: 'Property Stories', image: '/media/LP3.webp', subtitle: 'Homes with a sense of place' },
  { title: 'Meet Kelly', image: '/media/KellyM-PhotosxKristin-1.webp', subtitle: 'A personal introduction' },
]
