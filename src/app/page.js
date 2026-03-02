"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const business = {
  name: "Bless The Unisex Family Salon And Academy",
  tagline: "Premium Salon & Bridal Studio in Bilaspur",
  phone: "+91 98271 17360",
  phoneLink: "tel:+919827117360",
  whatsappLink:
    "https://wa.me/919827117360?text=Hi%20Bless%20Salon%2C%20I%20want%20to%20book%20an%20appointment.",
  instagram: "https://www.instagram.com/bless_unisex_salon/",
  map: "https://share.google/IgzA6nP0kXS24HWD8",
  address:
    "Ground Floor, Umashri Parisar, Telephone Exchange Rd, opposite Hotel Heavens Park, Bilaspur, Telipara, Chhattisgarh 495001",
};

const services = [
  ["Bridal Makeup", "💍", "Signature bridal looks tailored for every ritual, ceremony, and reception moment."],
  ["Party Makeup", "✨", "Camera-ready glam with skin-focused finishing for elegant day and night events."],
  ["Hair Styling", "💇‍♀️", "Classic buns, soft waves, and runway-inspired hair styling with long hold."],
  ["Hair Spa & Treatments", "🧖‍♀️", "Repairing and nourishing treatments for healthy, glossy, wedding-ready hair."],
  ["Skin Care & Facials", "🌸", "Luxury facials and glow therapies designed for smooth, radiant skin."],
  ["Groom Makeup", "🤵", "Refined groom grooming and makeup that looks natural yet polished in photos."],
  ["Salon Training (Academy)", "🎓", "Hands-on professional learning for aspiring beauty artists and entrepreneurs."],
].map(([name, icon, description]) => ({ name, icon, description }));

const bridalGallery = [
  {
    title: "Haldi to Wedding Day Glow",
    before:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Soft Glam Bridal Transformation",
    before:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Reception Look Upgrade",
    before:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=80",
  },
];

const reasons = [
  "Expert Bridal Artists",
  "Premium Products Used",
  "Personalized Services",
  "Trusted by Hundreds of Clients",
  "Hygienic & Professional Environment",
];

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("animate-in"));
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="bg-rose-50 text-stone-800">
      <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">Bless The</p>
            <p className="text-base font-semibold md:text-lg">Unisex Family Salon And Academy</p>
          </div>
          <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2">
            Book Appointment
          </a>
        </div>
      </nav>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(24,24,27,.75), rgba(24,24,27,.42)),url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-24 text-white md:px-8 md:py-32" data-animate>
          <p className="section-kicker !text-rose-100">{business.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Your Dream Bridal Look Starts Here
          </h1>
          <p className="mt-6 max-w-2xl text-base text-rose-100 md:text-lg">
            Capture your wedding memories with makeup artistry that feels luxurious, lasts longer, and looks
            flawless in every photo.
          </p>
          <p className="mt-4 text-lg font-medium">Call: {business.phone}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
              Book Appointment
            </a>
            <a href={business.phoneLink} className="btn-secondary">
              Call Now
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Bridal Work
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8" data-animate>
        <p className="section-kicker">About Us</p>
        <h2 className="section-title">Trusted bridal and beauty experts in Bilaspur.</h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-stone-600">
          Bless The Unisex Family Salon And Academy is a trusted name in Bilaspur for professional salon and
          bridal services. We specialize in creating stunning bridal looks and delivering top-quality beauty
          treatments.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8" data-animate>
        <p className="section-kicker">Our Services</p>
        <h2 className="section-title">Premium care for brides, families, and special occasions.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="service-card">
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-stone-800">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-white/80 py-20" data-animate>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="section-kicker">Bridal Portfolio</p>
          <h2 className="section-title">Before and after transformations brides love.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {bridalGallery.map((item) => (
              <article key={item.title} className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[{ label: "Before", src: item.before }, { label: "After", src: item.after }].map((img) => (
                    <button
                      key={img.label}
                      onClick={() => setLightboxImage({ ...img, title: item.title })}
                      className="group text-left"
                      aria-label={`Open ${item.title} ${img.label} image`}
                    >
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src={img.src}
                          alt={`${item.title} ${img.label}`}
                          width={500}
                          height={500}
                          className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-rose-400">{img.label}</p>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8" data-animate>
        <p className="section-kicker">Instagram Showcase</p>
        <h2 className="section-title">Social proof that builds bridal trust.</h2>
        <div className="mt-8 grid gap-6 rounded-2xl border border-rose-100 bg-white p-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-stone-600">
              Explore our real bridal work, client reels, and latest looks on Instagram.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-stone-700">
              <li>✦ Bridal transformations</li>
              <li>✦ Hair styling reels</li>
              <li>✦ Real client testimonials</li>
              <li>✦ Studio behind-the-scenes</li>
            </ul>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Open Instagram
            </a>
          </div>
          <div className="rounded-xl border border-rose-100 bg-rose-50 p-6">
            <p className="text-sm text-stone-600">@bless_unisex_salon</p>
            <p className="mt-3 text-sm text-stone-700">
              Tap below to view the live Instagram profile and recent posts.
            </p>
            <a href={business.instagram} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-rose-500">
              View Feed ↗
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white/80 py-20" data-animate>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="section-kicker">Why Choose Us</p>
          <h2 className="section-title">Premium products, personal attention, proven results.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((point) => (
              <p key={point} className="rounded-xl border border-rose-100 bg-white p-4 text-center text-sm font-medium text-stone-700 shadow-sm">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8" data-animate>
        <p className="section-kicker">Google Map</p>
        <h2 className="section-title">Visit our studio in Bilaspur.</h2>
        <p className="mt-4 max-w-3xl text-stone-600">
          {business.address}. Serving Nehru Nagar and nearby areas.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-rose-100 bg-white p-2 shadow-sm">
          <iframe
            title="Bless The Unisex Family Salon And Academy location"
            src="https://www.google.com/maps?q=Ground+Floor,+Umashri+Parisar,+Telephone+Exchange+Rd,+opposite+Hotel+Heavens+Park,+Bilaspur,+Chhattisgarh+495001&output=embed"
            className="h-[360px] w-full rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-stone-900 py-20 text-white" data-animate>
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="section-kicker !text-rose-200">Contact / Booking</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Book Your Appointment Today</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={business.phoneLink} className="btn-primary">
              Call Now
            </a>
            <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp Now
            </a>
            <a href={business.map} target="_blank" rel="noreferrer" className="btn-secondary">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          <div>
            <h3 className="text-lg font-semibold">{business.name}</h3>
            <p className="mt-2 text-sm text-stone-600">{business.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-stone-600">{business.phone}</p>
            <p className="mt-2 text-sm text-stone-600">{business.address}</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <div className="mt-2 flex flex-col gap-2 text-sm text-rose-500">
              <a href="#portfolio">Bridal Portfolio</a>
              <a href={business.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={business.whatsappLink} target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500">© {year} {business.name}. All rights reserved.</p>
      </footer>

      <a
        href={business.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>

      {lightboxImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" onClick={() => setLightboxImage(null)}>
          <div className="max-w-3xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={`${lightboxImage.title} ${lightboxImage.label}`}
              width={1200}
              height={1200}
              className="max-h-[80vh] w-full rounded-xl object-cover"
            />
            <div className="mt-3 flex items-center justify-between text-white">
              <p className="text-sm uppercase tracking-[0.2em]">{lightboxImage.label}</p>
              <button className="rounded-full border border-white/50 px-4 py-1 text-sm" onClick={() => setLightboxImage(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
