export const siteContent = {
  reviewThemes: [
    'Consistent, detail-oriented cuts that keep long-time clients coming back for years.',
    'A welcoming neighborhood atmosphere led by a barber who listens, remembers preferences, and treats people well.',
    'Reliable service for adults, kids, and elderly clients, with fair pricing and classic finishing touches.',
  ],
  business: {
    name: "Tony's Barbershop",
    eyebrowService: 'Eyebrow trim',
    razorService: 'Straight-razor neck cleanup',
    addressLine1: '2341 W Darby Rd',
    addressLine2: 'Havertown, PA 19083',
    // TODO: Replace with the real phone number.
    phone: '(610) 555-0199',
    // TODO: Replace with the real booking link.
    bookingUrl: 'https://example.com/book',
    // TODO: Replace with the real map or directions link.
    directionsUrl: 'https://maps.google.com',
    tagline: 'A neighborhood barbershop known for detail, consistency, and a genuinely welcoming chair.',
    hoursNote: 'Walk-ins welcome. Weekend traffic can be busier, so arriving early helps.',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Neighborhood favorite in Havertown',
    title: 'Precision cuts. Easy conversation. The kind of barber people drive back for.',
    description:
      "Built from what customers repeat most: Tony listens, takes his time, gets the details right, and delivers a haircut people trust week after week, year after year.",
    primaryCta: 'Book a Cut',
    secondaryCta: 'View Services',
    stats: [
      { value: '8+ yrs', label: 'with many loyal clients' },
      { value: '10/10', label: 'common quality theme in reviews' },
      { value: 'Kids to seniors', label: 'comfortable for all ages' },
    ],
  },
  about: {
    title: 'Classic service with modern polish',
    body:
      "Customers describe the experience as a blast from the past in the best way: warm welcome, no rushing, strong attention to detail, and a barber who asks how you're doing before he asks what you're getting done. The result is a shop that feels local, trusted, and worth returning to.",
    points: [
      'Known for listening closely and matching the cut you asked for, even from a reference photo.',
      'Attentive service for kids, longtime regulars, and elderly clients who value patience and care.',
      'Fair pricing paired with consistent work that feels polished, not rushed.',
    ],
  },
  services: {
    title: 'Services built around what clients actually mention',
    intro: '',
    items: [
      {
        name: 'Signature Haircut',
        price: '$30',
        description:
          'A clean, detail-focused cut with shape, balance, and time taken to get it right.',
      },
      {
        name: 'Kids’ Cut',
        price: '$25',
        description:
          'Patient, reliable cuts for younger clients from a barber families already trust.',
      },
      {
        name: 'Beard Trim',
        price: '$18',
        description:
          'A neat beard cleanup designed to match the haircut and leave everything sharp.',
      },
      {
        name: 'Detail Finish',
        price: '$12+',
        description:
          'Optional finishing work such as eyebrow trimming or a warm-cream straight-razor neck cleanup.',
      },
    ],
  },
  reasons: [
    {
      title: 'Attention to detail',
      text: 'Review after review calls out diligent work, careful finishing, and a barber who takes pride in the final result.',
    },
    {
      title: 'Consistent every visit',
      text: 'Many clients mention coming back for years because the haircut stays reliable and high quality.',
    },
    {
      title: 'Welcoming personality',
      text: 'The shop stands out for easy conversation, customer focus, and making people feel comfortable right away.',
    },
    {
      title: 'Fair-value local shop',
      text: 'Customers regularly mention strong value: a great haircut at a fair price without compromising quality.',
    },
  ],
  testimonials: [
    {
      quote: 'I drive from the Delaware-Pennsylvania line just to get my hair cut here.',
      author: "James O'Brien",
    },
    {
      quote: 'He asks how you are doing, then how you want your haircut. He hits the mark every time.',
      author: 'Paul H',
    },
    {
      quote: 'I showed him an old photo and he matched it perfectly. A master at his trade.',
      author: 'William Walsh',
    },
    {
      quote: 'Great local barber. Good with kids, and always a reliable haircut.',
      author: 'Andrew Sharp',
    },
    {
      quote: 'He always does a 10 out of 10 job and makes sure you are happy with your cut.',
      author: 'Peter Ohnigian',
    },
    {
      quote: 'Never had a more diligent haircut. My hair looks great, and the cost was lower than expected.',
      author: 'Colin Swarts',
    },
    {
      quote: 'He did not rush. He took his time and gave both of us awesome haircuts.',
      author: 'Ed Johnson',
    },
    {
      quote: 'The whole experience feels like a blast from the past with exceptional detail.',
      author: 'David George',
    },
  ],
  team: {
    title: 'Meet the barbers',
    intro: 'One chair, one standard, and one barber customers have trusted for years.',

    members: [
      {
        name: 'Tony',
        role: 'Owner / Barber',
        bio: 'Known in reviews for consistency, professionalism, patience, and the kind of attention to detail that turns first-time visitors into long-time regulars.',
        imageKey: 'tony',
      },
    ],
  },
  gallery: {
    title: 'Shop and cut gallery',
    intro:
      'A closer look at the shop, the chair, and the kind of clean finish clients keep talking about.',
    items: [
      {
        title: 'Inside the shop',
        alt: "Interior view inside Tony's Barbershop in Havertown",
        imageKey: 'inside',
      },
      {
        title: 'At the chair',
        alt: 'Tony cutting hair inside the shop',
        imageKey: 'cutting',
      },
      {
        title: 'Storefront view',
        alt: "Alternate storefront view of Tony's Barbershop",
        imageKey: 'storefront2',
      },
      {
        title: 'Shop atmosphere',
        alt: "Moody interior view of Tony's Barbershop",
        imageKey: 'insideDark',
      },
      {
        title: 'Neighborhood presence',
        alt: "Street-facing view of Tony's Barbershop in Havertown",
        imageKey: 'storefront3',
      },
      {
        title: 'Another storefront angle',
        alt: "Additional exterior angle of Tony's Barbershop",
        imageKey: 'storefront4',
      },
    ],
  },
  booking: {
    title: 'Ready for a barber you can stick with?',
    text:
      'Whether you want a dependable regular cut, a patient kids’ appointment, or a sharper beard cleanup, make it easy for people to take the next step.',
    primaryCta: 'Book Now',
    secondaryCta: 'Call the Shop',
  },
  hours: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  faq: [
    {
      question: 'Do you take walk-ins?',
      answer:
        'The reviews mention first come, first served traffic and busy weekends. Update this answer to reflect your exact walk-in and booking policy.',
    },
    {
      question: 'What services do clients come in for most?',
      answer:
        'Haircuts are the main service mentioned, along with kids’ cuts, beard trims, eyebrow trims, shape-ups, and straight-razor neck cleanups.',
    },
    {
      question: 'Is the shop good with kids or older clients?',
      answer:
        'Yes. Reviews specifically mention reliable kids’ cuts and thoughtful attention given to elderly clients.',
    },
    {
      question: 'What makes the experience different?',
      answer:
        'Clients consistently describe a welcoming atmosphere, fair pricing, patience, and a high level of detail from start to finish.',
    },
  ],
}
