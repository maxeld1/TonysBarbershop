import { useEffect } from 'react'
import logo from './assets/images/tonysbarbershop_logo.png'
import tonyPortrait from './assets/images/tony.jpg'
import tonyCutting from './assets/images/tony_cutting.webp'
import tonyInside from './assets/images/tony_inside.webp'
import tonyInsideDark from './assets/images/tony_inside_dark.webp'
import storefrontImage from './assets/images/tony_storefront.jpg'
import storefrontImage2 from './assets/images/tony_storefront_2.webp'
import storefrontImage3 from './assets/images/tony_storefront_3.webp'
import storefrontImage4 from './assets/images/tony_storefront_4.webp'
import { siteContent } from './content/siteContent'

function App() {
  const { business, nav, hero, about, services, reasons, testimonials, team, gallery, booking, hours, faq } =
    siteContent
  const teamImages = {
    tony: tonyPortrait,
  }
  const galleryImages = {
    cutting: tonyCutting,
    inside: tonyInside,
    insideDark: tonyInsideDark,
    storefront2: storefrontImage2,
    storefront3: storefrontImage3,
    storefront4: storefrontImage4,
  }

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink-950 font-body text-ink-50">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink-950/92 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <nav className="hidden items-center gap-6 text-sm text-ink-200 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-accent-300">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#top" className="justify-self-start lg:justify-self-center">
            <img
              src={logo}
              alt={`${business.name} logo`}
              className="h-14 w-auto object-contain sm:h-16 lg:h-20"
            />
          </a>
          <a
            href={business.bookingUrl}
            className="justify-self-end rounded-full border border-accent-300/70 bg-accent-300 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent-100"
          >
            {hero.primaryCta}
          </a>
        </div>
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-4 sm:px-6 lg:hidden lg:px-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <main id="top" className="pt-[104px] lg:pt-[112px]">
        <section className="relative isolate flex min-h-[calc(100svh-104px)] items-center overflow-hidden lg:min-h-[calc(100svh-112px)]">
          <img
            src={storefrontImage}
            alt={`${business.name} storefront in Havertown`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,15,0.34),rgba(17,16,15,0.58)_54%,rgba(17,16,15,0.76))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,15,0.58),rgba(17,16,15,0.28)_38%,rgba(17,16,15,0.14)_62%,rgba(17,16,15,0.24))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,211,77,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-4xl animate-rise rounded-[2rem] border border-white/10 bg-ink-950/38 p-6 shadow-glow backdrop-blur-[6px] sm:p-8 lg:p-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">{hero.eyebrow}</p>
              <p className="font-display text-6xl uppercase leading-[0.88] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
                {business.name}
              </p>
              <h1 className="mt-4 max-w-3xl text-2xl font-semibold uppercase tracking-[0.14em] text-ink-50 [text-shadow:0_8px_24px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-100 [text-shadow:0_6px_18px_rgba(0,0,0,0.45)]">{hero.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={business.bookingUrl}
                  className="inline-flex items-center justify-center rounded-full bg-accent-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 transition hover:bg-accent-100"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-accent-300 hover:text-accent-300"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-ink-950/45 p-5 backdrop-blur-sm">
                  <p className="font-display text-3xl uppercase tracking-[0.08em] text-accent-300">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal-item">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">About the shop</p>
              <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">{about.title}</h2>
            </div>
            <div className="reveal-item" style={{ transitionDelay: '120ms' }}>
              <p className="text-lg leading-8 text-ink-200">{about.body}</p>
              <div className="mt-8 space-y-4">
                {about.points.map((point) => (
                  <div key={point} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-300" />
                    <p className="text-ink-100">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ink-900/70" data-reveal>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl reveal-item">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Services</p>
              <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">{services.title}</h2>
              <p className="mt-5 text-lg leading-8 text-ink-200">{services.intro}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.items.map((item, index) => (
                <article
                  key={item.name}
                  className="reveal-item rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                  style={{ transitionDelay: `${80 + index * 90}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl uppercase text-white">{item.name}</h3>
                    <p className="rounded-full border border-accent-300/30 bg-accent-300/10 px-3 py-1 text-sm font-semibold text-accent-300">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-4 leading-7 text-ink-200">{item.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-300">{services.note}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
          <div className="max-w-3xl reveal-item">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Why choose us</p>
            <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">The reasons clients keep coming back</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="reveal-item rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
                style={{ transitionDelay: `${80 + index * 90}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">0{index + 1}</p>
                <h3 className="mt-4 font-display text-3xl uppercase text-white">{reason.title}</h3>
                <p className="mt-4 leading-7 text-ink-200">{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="bg-ink-900/70" data-reveal>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl reveal-item">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Reviews</p>
                <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">Words people actually use</h2>
              </div>
            </div>
            <div className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-3">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={testimonial.author}
                  className="reveal-item mb-6 break-inside-avoid rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                  style={{ transitionDelay: `${80 + index * 70}ms` }}
                >
                  <p className="text-lg leading-8 text-white">&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className="mt-5 text-sm uppercase tracking-[0.24em] text-accent-300">{testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
          <div className="max-w-3xl reveal-item">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Barbers</p>
            <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">{team.title}</h2>
            <p className="mt-5 text-lg leading-8 text-ink-200">{team.intro}</p>
          </div>
          <div className="mt-10 max-w-sm">
            {team.members.map((member, index) => (
              <article
                key={member.name}
                className="reveal-item overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                style={{ transitionDelay: `${80 + index * 120}ms` }}
              >
                {teamImages[member.imageKey] ? (
                  <img
                    src={teamImages[member.imageKey]}
                    alt={`${member.name}, barber at ${business.name}`}
                    className="h-72 w-full object-cover object-center"
                  />
                ) : (
                  <>
                    {/* TODO: Replace with a real barber portrait.
                        Suggested alt text pattern: "[Barber Name], barber at [Business Name], smiling inside the shop". */}
                    <div className="h-72 bg-[linear-gradient(135deg,#2b241f,#171513)]" />
                  </>
                )}
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">{member.role}</p>
                  <h3 className="mt-3 font-display text-3xl uppercase text-white">{member.name}</h3>
                  <p className="mt-4 leading-7 text-ink-200">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-ink-900/70" data-reveal>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl reveal-item">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Gallery</p>
              <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">{gallery.title}</h2>
              <p className="mt-5 text-lg leading-8 text-ink-200">{gallery.intro}</p>
            </div>
            <div className="mt-10 columns-1 gap-6 sm:columns-2 xl:columns-3">
              {gallery.items.map((item, index) => (
                <figure
                  key={item.imageKey}
                  className="reveal-item group relative mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
                  style={{
                    transitionDelay: `${80 + index * 80}ms`,
                    marginTop:
                      index % 3 === 0 ? '0.75rem' : index % 3 === 1 ? '0' : '1.5rem',
                  }}
                >
                  <img
                    src={galleryImages[item.imageKey]}
                    alt={item.alt}
                    className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950 via-ink-950/72 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm uppercase tracking-[0.2em] text-ink-100">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
          <div className="reveal-item overflow-hidden rounded-[2rem] border border-accent-300/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(198,172,120,0.08),rgba(17,16,15,0.75))] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-100">Booking</p>
                <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">{booking.title}</h2>
                <p className="mt-5 text-lg leading-8 text-ink-100">{booking.text}</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={business.bookingUrl}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950 transition hover:bg-accent-100"
                >
                  {booking.primaryCta}
                </a>
                <a
                  href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white"
                >
                  {booking.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink-900/70" data-reveal>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="reveal-item">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">Visit the shop</p>
              <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">Hours, location, contact</h2>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-ink-300">Address</p>
                <p className="mt-3 text-xl text-white">{business.addressLine1}</p>
                <p className="text-lg text-ink-200">{business.addressLine2}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-300">Phone</p>
                <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="mt-3 block text-xl text-white hover:text-accent-300">
                  {business.phone}
                </a>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-300">Notes</p>
                <p className="mt-3 leading-7 text-ink-200">{business.hoursNote}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={business.bookingUrl}
                    className="rounded-full bg-accent-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-950"
                  >
                    Book online
                  </a>
                  <a
                    href={business.directionsUrl}
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="reveal-item rounded-[1.75rem] border border-white/10 bg-white/5 p-6" style={{ transitionDelay: '100ms' }}>
                <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Hours</p>
                <div className="mt-4 space-y-3">
                  {hours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm sm:text-base">
                      <span className="text-ink-200">{item.day}</span>
                      <span className="font-semibold text-white">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal-item rounded-[1.75rem] border border-white/10 bg-white/5 p-6" style={{ transitionDelay: '180ms' }}>
                <div className="overflow-hidden rounded-[1.25rem] border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.9171303362677!2d-75.31282955470923!3d39.98795722327809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c129f72708e5%3A0x65da1d217bbd5870!2sTony&#39;s%20Barber%20shop!5e0!3m2!1sen!2sus!4v1775058193813!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="aspect-[16/10] w-full"
                    title={`${business.name} map location`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8" data-reveal>
          <div className="max-w-3xl reveal-item">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-300">FAQ</p>
            <h2 className="mt-4 font-display text-5xl uppercase text-white sm:text-6xl">Helpful details before the visit</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faq.map((item, index) => (
              <details
                key={item.question}
                className="reveal-item group rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                style={{ transitionDelay: `${80 + index * 70}ms` }}
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  <span className="inline-flex items-center gap-4">
                    <span className="text-accent-300 transition group-open:rotate-45">+</span>
                    {item.question}
                  </span>
                </summary>
                <p className="mt-4 pl-8 leading-7 text-ink-200">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <img
              src={logo}
              alt={`${business.name} logo`}
              className="h-16 w-auto object-contain sm:h-20"
            />
            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-300">{business.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-300">Visit</p>
            <p className="mt-4 text-lg text-white">{business.addressLine1}</p>
            <p className="text-base text-ink-200">{business.addressLine2}</p>
            <a
              href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
              className="mt-4 block text-base text-white transition hover:text-accent-300"
            >
              {business.phone}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-300">Hours</p>
            <div className="mt-4 space-y-2 text-sm">
              {hours.map((item) => (
                <div key={item.day} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 text-ink-200">
                  <span>{item.day}</span>
                  <span className="text-right text-white">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
