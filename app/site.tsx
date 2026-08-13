import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  ["Basic Income", "/basic-income"],
  ["Candidates", "/candidates"],
  ["Bill Tracker", "/bill-tracker"],
  ["Evidence", "/evidence"],
  ["Blog", "/blog"],
  ["Calendar", "/calendar"],
  ["Outreach", "/outreach"],
  ["Contact", "/contact"],
  ["About", "/about"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand ${compact ? "brand-compact" : ""}`} href="/" aria-label="Basically Income PAC home">
      <span className="brand-mark" aria-hidden="true"><span>$</span></span>
      <span className="brand-type"><b>Basically</b> Income</span>
    </Link>
  );
}

export function Header() {
  return (
    <>
      <div className="institution-bar">
        <span>The electoral engine for universal basic income.</span>
        <Link href="/candidates">See candidates &amp; campaigns <span aria-hidden="true">→</span></Link>
      </div>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <Link className="button button-ghost button-small" href="/take-action">Take Action</Link>
            <Link className="button button-navy button-small" href="/fund">Fund the Work</Link>
          </div>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <ThemeToggle />
              <Link className="mobile-action" href="/take-action">Take Action</Link>
              <Link className="mobile-fund" href="/fund">Fund the Work</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-intro">
          <Brand compact />
          <p>We move candidates toward basic income, then back serious champions where support can matter.</p>
          <p className="footer-note">Paid for by Basically Income PAC.</p>
        </div>
        <div className="footer-signup">
          <div>
            <p className="eyebrow eyebrow-light">Join our mailing list</p>
            <h2>One useful email each week.</h2>
            <p>Campaign actions, PAC news, events, candidate developments, and new basic-income writing.</p>
          </div>
          <form action="mailto:contact@basicallyincome.org" method="post" encType="text/plain">
            <label htmlFor="footer-email">What is your email?</label>
            <div className="signup-row">
              <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <button className="button button-orange" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom"><span>Money for everyone.</span><span><Link href="/contact">Contact</Link> · <Link href="/about">About</Link> · BasicallyIncome.org</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

export function ButtonLink({ href, children, variant = "orange", external = false }: {
  href: string; children: ReactNode; variant?: "orange" | "navy" | "cream" | "outline"; external?: boolean;
}) {
  const cls = `button button-${variant}`;
  return external ? <a className={cls} href={href} rel="noreferrer">{children}</a> : <Link className={cls} href={href}>{children}</Link>;
}

export function SectionHeading({ eyebrow, title, body, align = "left" }: {
  eyebrow?: string; title: string; body?: string; align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function StatusPill({ children, tone = "orange" }: { children: ReactNode; tone?: "orange" | "gold" | "navy" | "neutral" }) {
  return <span className={`status-pill status-${tone}`}>{children}</span>;
}

export function EditorialImage({ src, alt, caption, tone = "gold" }: {
  src: string; alt: string; caption?: string; tone?: "gold" | "orange" | "navy";
}) {
  return (
    <figure className={`editorial-image editorial-${tone}`}>
      {/* Static assets keep the illustrated world dependable across runtimes. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function PageHero({ eyebrow, title, body, actions, aside }: {
  eyebrow: string; title: string; body: string; actions?: ReactNode; aside?: ReactNode;
  visual?: { src: string; alt: string; caption?: string; tone?: "gold" | "orange" | "navy" };
}) {
  return (
    <section className="page-hero"><div className="page-hero-inner">
      <div className="page-hero-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{body}</p>{actions && <div className="hero-actions">{actions}</div>}</div>
      {aside && <div className="page-hero-side"><div className="page-hero-aside">{aside}</div></div>}
    </div></section>
  );
}

export function CtaBand({ eyebrow, title, body, primary, secondary }: {
  eyebrow: string; title: string; body: string; primary: ReactNode; secondary?: ReactNode;
}) {
  return (
    <section className="cta-band"><div className="cta-band-inner">
      <div><Eyebrow light>{eyebrow}</Eyebrow><h2>{title}</h2><p>{body}</p></div>
      <div className="cta-actions">{primary}{secondary}</div>
    </div></section>
  );
}
