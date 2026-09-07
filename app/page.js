"use client";

import {
  info,
  hero,
  featured,
  specials,
  story,
  testimonials,
  hours,
  social,
} from "./data";

export default function Home() {
  return (
    <div className="site">
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img src="/img/logo.png" alt="Mi Rey" className="brand-logo" />
            <span className="brand-name">Mi Rey Taquería &amp; Grill</span>
          </div>
          <nav className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#specials">Specials</a>
            <a href="#story">Our Story</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn-gold" href={`tel:${info.phoneHref}`}>
            Order Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img src="/img/spread.png" alt="Platillos mexicanos" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <img src="/img/logo.png" alt="Mi Rey" className="hero-crown" />
          <p className="eyebrow">Wilmington, NC · Comida Mexicana</p>
          <h1>{hero.title}</h1>
          <p className="hero-text">{hero.text}</p>
          <a className="btn-gold big" href={`tel:${info.phoneHref}`}>
            {hero.cta}
          </a>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured" id="menu">
        <div className="section-head">
          <span className="ornament">♛</span>
          <h2>Featured Dishes</h2>
          <p>Recetas jaliscienses hechas con amor y herencia.</p>
        </div>
        <div className="gallery">
          {featured.map((img, i) => (
            <figure key={i} className={`g-item g-${i}`}>
              <img src={img.src} alt={img.alt} />
            </figure>
          ))}
        </div>
      </section>

      {/* SPECIALS */}
      <section className="specials" id="specials">
        <div className="specials-inner">
          <div className="section-head light">
            <span className="ornament">♛</span>
            <h2>Daily Specials</h2>
          </div>
          <ul className="specials-list">
            {specials.map((s) => (
              <li key={s.day}>
                <span className="day">{s.day}</span>
                <span className="dot" />
                <span className="deal">{s.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STORY */}
      <section className="story" id="story">
        <div className="story-img">
          <img src="/img/tostada2.png" alt="Tostada de birria" />
        </div>
        <div className="story-body">
          <h2>{story.title}</h2>
          <div className="rule" />
          <p>{story.text}</p>
          <a className="btn-navy" href="#menu">
            {story.cta}
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="section-head">
          <span className="ornament">♛</span>
          <h2>Lo que dicen nuestros reyes</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name}>
              <span className="quote-mark">“</span>
              <p>{t.quote}</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-grid">
          <div>
            <h3>📍 Located at</h3>
            <p>{info.address}</p>
          </div>
          <div>
            <h3>📞 Call or email us</h3>
            <p>
              <a href={`tel:${info.phoneHref}`}>{info.phone}</a>
              <br />
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </p>
          </div>
          <div>
            <h3>🕒 Hours</h3>
            <ul className="hours">
              {hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img src="/img/logo.png" alt="Mi Rey" className="footer-logo" />
        <div className="socials">
          {social.map((s) => (
            <span key={s} className="social-chip">
              {s}
            </span>
          ))}
        </div>
        <p className="copy">© 2025 by Mi Rey Taquería and Grill · Wilmington, NC</p>
        <a href={`tel:${info.phoneHref}`} className="back">
          Order Now → {info.phone}
        </a>
      </footer>

      <style jsx>{`
        .site {
          --navy: #16215c;
          --navy-deep: #0c1233;
          --gold: #e6b64c;
          --gold-soft: #f2c14e;
          --cream: #f3e7d3;
          --cream-2: #ede0cd;
          background: var(--cream);
          color: var(--navy);
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
        }
        h1,
        h2,
        h3 {
          font-family: "Playfair Display", serif;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(12, 18, 51, 0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(230, 182, 76, 0.35);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.7rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .brand-logo {
          width: 44px;
          border-radius: 8px;
        }
        .brand-name {
          color: var(--gold-soft);
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .nav-links {
          margin-left: auto;
          display: flex;
          gap: 1.6rem;
        }
        .nav-links a {
          color: #f3e7d3;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          opacity: 0.85;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--gold-soft);
        }
        .btn-gold {
          background: linear-gradient(180deg, var(--gold-soft), var(--gold));
          color: var(--navy-deep);
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 18px rgba(230, 182, 76, 0.35);
          transition: transform 0.15s;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
        }
        .btn-gold.big {
          padding: 0.9rem 2.4rem;
          font-size: 1rem;
          letter-spacing: 2px;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--cream);
        }
        .hero-media {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 50% 40%,
              rgba(12, 18, 51, 0.55),
              rgba(12, 18, 51, 0.88)
            );
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 720px;
          padding: 4rem 1.5rem;
        }
        .hero-crown {
          width: 120px;
          margin: 0 auto 1.4rem;
          border-radius: 14px;
          box-shadow: 0 14px 44px rgba(0, 0, 0, 0.5);
        }
        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.75rem;
          color: var(--gold-soft);
          margin-bottom: 1rem;
        }
        .hero h1 {
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          line-height: 1.08;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        .hero-text {
          max-width: 540px;
          margin: 0 auto 2rem;
          line-height: 1.7;
          opacity: 0.9;
          font-weight: 300;
        }

        /* SECTION HEAD */
        .section-head {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 2.6rem;
        }
        .ornament {
          color: var(--gold);
          font-size: 1.6rem;
          display: block;
          margin-bottom: 0.4rem;
        }
        .section-head h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
        }
        .section-head p {
          margin-top: 0.6rem;
          opacity: 0.7;
        }
        .section-head.light h2,
        .section-head.light .ornament {
          color: var(--gold-soft);
        }

        /* FEATURED GALLERY */
        .featured {
          padding: 5rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 14px;
        }
        .g-item {
          overflow: hidden;
          border-radius: 14px;
          border: 2px solid rgba(230, 182, 76, 0.4);
          position: relative;
        }
        .g-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .g-item:hover img {
          transform: scale(1.08);
        }
        .g-0 {
          grid-column: span 2;
          grid-row: span 2;
        }
        .g-3 {
          grid-column: span 2;
        }

        /* SPECIALS */
        .specials {
          background: linear-gradient(160deg, var(--navy), var(--navy-deep));
          padding: 5rem 1.5rem;
        }
        .specials-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .specials-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .specials-list li {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          background: rgba(243, 231, 211, 0.04);
          border: 1px solid rgba(230, 182, 76, 0.15);
          color: var(--cream);
        }
        .day {
          font-family: "Playfair Display", serif;
          color: var(--gold-soft);
          font-weight: 700;
          min-width: 150px;
          font-size: 1.05rem;
        }
        .dot {
          flex: 1;
          border-bottom: 1px dotted rgba(230, 182, 76, 0.4);
          transform: translateY(-4px);
        }
        .deal {
          flex: 2;
          text-align: right;
          opacity: 0.9;
          font-weight: 300;
          font-size: 0.92rem;
        }

        /* STORY */
        .story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          min-height: 520px;
        }
        .story-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .story-body {
          background: var(--cream-2);
          padding: clamp(2.5rem, 6vw, 5rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .story-body h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--navy);
        }
        .rule {
          width: 70px;
          height: 3px;
          background: var(--gold);
          margin: 1rem 0 1.6rem;
        }
        .story-body p {
          line-height: 1.9;
          opacity: 0.85;
          margin-bottom: 2rem;
        }
        .btn-navy {
          align-self: flex-start;
          background: var(--navy);
          color: var(--gold-soft);
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid var(--gold);
          transition: background 0.2s;
        }
        .btn-navy:hover {
          background: var(--navy-deep);
        }

        /* TESTIMONIALS */
        .testi {
          padding: 5rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        blockquote {
          background: #fff;
          border-radius: 16px;
          padding: 2.4rem 1.8rem 2rem;
          border: 1px solid rgba(22, 33, 92, 0.08);
          box-shadow: 0 12px 30px rgba(22, 33, 92, 0.06);
          position: relative;
        }
        .quote-mark {
          font-family: "Playfair Display", serif;
          font-size: 4rem;
          color: var(--gold);
          line-height: 0.5;
          display: block;
          margin-bottom: 0.6rem;
        }
        blockquote p {
          line-height: 1.7;
          font-size: 0.95rem;
          font-style: italic;
          opacity: 0.85;
          margin-bottom: 1.4rem;
        }
        blockquote footer strong {
          display: block;
          font-family: "Playfair Display", serif;
          color: var(--navy);
          letter-spacing: 0.5px;
        }
        blockquote footer span {
          font-size: 0.8rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* CONTACT */
        .contact {
          background: linear-gradient(160deg, var(--navy), var(--navy-deep));
          color: var(--cream);
          padding: 5rem 1.5rem;
        }
        .contact-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          text-align: center;
        }
        .contact h3 {
          color: var(--gold-soft);
          margin-bottom: 0.9rem;
          font-size: 1.2rem;
        }
        .contact p {
          line-height: 1.8;
          opacity: 0.9;
        }
        .contact a:hover {
          color: var(--gold-soft);
        }
        .hours {
          font-size: 0.85rem;
        }
        .hours li {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.25rem 0;
          border-bottom: 1px dotted rgba(230, 182, 76, 0.2);
        }

        /* FOOTER */
        .footer {
          background: var(--navy-deep);
          color: var(--cream);
          text-align: center;
          padding: 3rem 1.5rem;
          border-top: 1px solid rgba(230, 182, 76, 0.25);
        }
        .footer-logo {
          width: 90px;
          margin: 0 auto 1.4rem;
          border-radius: 10px;
        }
        .socials {
          display: flex;
          gap: 0.6rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.4rem;
        }
        .social-chip {
          border: 1px solid var(--gold);
          color: var(--gold-soft);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.78rem;
        }
        .copy {
          font-size: 0.8rem;
          opacity: 0.6;
          margin-bottom: 1rem;
        }
        .back {
          color: var(--gold-soft);
          font-size: 0.85rem;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 2px;
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
          .g-0 {
            grid-column: span 2;
          }
          .story {
            grid-template-columns: 1fr;
          }
          .testi-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .specials-list li {
            flex-direction: column;
            gap: 0.3rem;
          }
          .dot {
            display: none;
          }
          .deal {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
