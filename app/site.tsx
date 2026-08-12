import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  ["Basic Income", "/basic-income"],
  ["Campaigns", "/campaigns"],
  ["Candidates", "/candidates"],
  ["Our Strategy", "/strategy"],
  ["Evidence", "/evidence"],
  ["Blog", "/blog"],
  ["Calendar", "/calendar"],
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
        <Link href="/strategy">See how it works <span aria-hidden="true">→</span></Link>
      </div>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link className="button button-ghost button-small" href="/take-action">Take Action</Link>
            <Link className="button button-navy button-small" href="/fund">Fund the Work</Link>
          </div>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
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
        <div className="footer-column">
          <h2>Act</h2>
          <Link href="/campaigns">Current Campaign</Link>
          <Link href="/take-action">Take Action</Link>
          <a href="https://secure.actblue.com/donate/basicincome" rel="noreferrer">Contribute</a>
          <a href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Get Updates</a>
        </div>
        <div className="footer-column">
          <h2>Inspect</h2>
          <Link href="/candidates">Candidate Positions</Link>
          <Link href="/results">Results & Work Log</Link>
          <Link href="/strategy">Selection Method</Link>
          <Link href="/evidence">Evidence</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/fund">What Funding Enables</Link>
        </div>
        <div className="footer-column">
          <h2>Connect</h2>
          <a href="mailto:contact@basicallyincome.org">Contact</a>
          <Link href="/fund/strategic-backing">Strategic Backing</Link>
          <a href="https://discord.com/invite/wEpZZYwufm" rel="noreferrer">Discord</a>
          <a href="https://bsky.app/profile/basicallyincome.org" rel="noreferrer">Bluesky</a>
        </div>
      </div>
      <div className="footer-bottom"><span>Money for everyone.</span><span>BasicallyIncome.org</span></div>
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

export function PageHero({ eyebrow, title, body, actions, aside }: {
  eyebrow: string; title: string; body: string; actions?: ReactNode; aside?: ReactNode;
}) {
  return (
    <section className="page-hero"><div className="page-hero-inner">
      <div className="page-hero-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{body}</p>{actions && <div className="hero-actions">{actions}</div>}</div>
      {aside && <div className="page-hero-aside">{aside}</div>}
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
