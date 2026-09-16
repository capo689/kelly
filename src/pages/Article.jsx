import Hero from '../components/Hero'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'

const sections = [
  {
    title: 'Mountain Living in Central Oregon',
    paragraphs: [
      'There is something special about waking up surrounded by ponderosa pine trees, junipers, Cascade Mountain views, and some of Oregon’s most iconic peaks.',
      'Sisters offers a quintessential Central Oregon lifestyle, with easy access to the Three Sisters, hiking, camping, mountain biking, fishing, and scenic drives. Just north of Sisters, Black Butte Ranch and Camp Sherman offer mountain views, golf, trails, horseback riding, the Metolius River, and year-round recreation.',
      'Then there is Bend, where outdoor adventure meets restaurants, breweries, shopping, and year-round recreation. From the Deschutes River and Shevlin Park to Mt. Bachelor, Bend offers a distinctive combination of convenience and outdoor living.',
    ],
    image: '/media/IMG_1131.webp',
  },
  {
    title: 'Life on the Oregon Coast',
    paragraphs: [
      'Head west and the ponderosas give way to shore pines, manzanita, rocky beaches, and ocean views. The pace changes. The landscape changes. A morning walk becomes a chance to search for starfish and sand dollars while listening to the waves.',
      'Newport offers a classic Oregon coastal lifestyle, from the working waterfront and marina to beaches, local restaurants, and fresh seafood from the docks. Nye Beach adds wide sandy shores, colorful sunsets, neighborhood shops, galleries, coffee spots, and a relaxed, walkable atmosphere.',
      'Farther south, Waldport and Seal Rock offer two distinctly beautiful ways to experience the coast. Waldport is known for sandy beaches and an easygoing shoreline. Seal Rock offers a more rugged landscape with towering formations, crashing surf, tide pools, and sweeping Pacific views.',
      'Then there is Yachats, a place where life seems to slow down. Dramatic waves, rocky shoreline, forested trails, and an unhurried rhythm make it a special setting for a coastal home, vacation retreat, or a slower pace of life.',
    ],
    image: '/media/IMG_2514.webp',
  },
  {
    title: 'A Different Kind of Outdoor Lifestyle',
    paragraphs: [
      'Mountain living and coastal living may look completely different, but they share something important. The outdoors are part of everyday life.',
      'In Central Oregon, the day might begin with a hike beneath the Three Sisters, a mountain bike ride, paddleboarding on Suttle Lake, or skiing at Mt. Bachelor. At the coast, it might mean beachcombing, surfing, fishing, crabbing, stand-up paddleboarding, or walking the beach with the dogs.',
      'And sometimes the best activity is simply sitting outside and taking it all in. That is what makes Oregon so special.',
    ],
    image: '/media/IMG_0417.webp',
    preserveSubject: true,
  },
  {
    title: 'From the Mountains to the Ocean',
    paragraphs: [
      'One of the things I love most about Oregon real estate is the opportunity to create a lifestyle that connects both places.',
      'Maybe you are looking to move to Bend for the trails, restaurants, recreation, and Central Oregon lifestyle. Maybe you are ready for Sisters, where small-town charm meets the Cascade Mountains. Perhaps your dream is to wake up in Yachats or Waldport with the sound of the ocean nearby.',
      'And maybe you do not want to choose. A mountain home and a beach home can provide two different escapes while keeping you connected to the outdoor lifestyle that makes Oregon so special.',
    ],
    image: '/media/IMG_1089.webp',
  },
]

export default function Article() {
  return (
    <PageTransition>
      <Hero eyebrow="Journal · Oregon Living" title="Life With Two Homes" copy="Mountain and beach living in Oregon, and the freedom to imagine a life that connects both." image="/media/IMG_1895.webp" imageRight="/media/IMG_2514.webp" compact />
      <article className="article-body">
        <div className="article-lead wrap">
          <Reveal>
            <p className="article-deck">What if you could have the best of both worlds, a home in the mountains and a home at the beach?</p>
            <p>For many of us, Oregon is about having more than one way to live. It is morning coffee surrounded by the pines, afternoon adventures in the mountains, or a walk along the beach with the sound of the waves in the background.</p>
          </Reveal>
        </div>
        {sections.map((section, index) => (
          <section className={`article-section ${index % 2 ? 'reverse' : ''}`} key={section.title}>
            <Reveal className={`article-image image-reveal ${section.preserveSubject ? 'safe-image' : ''}`} direction="scale">
              {section.preserveSubject && <span className="safe-image-backdrop" style={{ backgroundImage: `url(${section.image})` }} aria-hidden="true" />}
              <img src={section.image} alt="" loading="lazy" />
            </Reveal>
            <Reveal className="article-copy" direction={index % 2 ? 'left' : 'right'}>
              <span className="article-number">0{index + 1}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </Reveal>
          </section>
        ))}
        <section className="article-close">
          <div className="wrap">
            <Reveal><div className="section-kicker">Your Cascades-to-Coast connection</div><h2>Because sometimes the perfect Oregon lifestyle is not about choosing between the mountains and the ocean. It is about having both.</h2><p>Kelly Miller, REALTOR®/Broker · Kelly Miller Real Estate</p></Reveal>
          </div>
        </section>
      </article>
      <CTASection />
    </PageTransition>
  )
}
