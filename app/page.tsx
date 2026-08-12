import Link from "next/link";
import { ButtonLink, CtaBand, Eyebrow, Header, Footer, SectionHeading, StatusPill } from "./site";

const loop = [
  ["01", "Scan", "Monitor races, candidates, timing, and policy openings."],
  ["02", "Select", "Choose pressure points where finite resources may matter."],
  ["03", "Mobilize", "Give supporters one clear, timely candidate ask."],
  ["04", "Verify", "Document public responses and position changes."],
  ["05", "Reward", "Recognize meaningful movement and endorse selectively."],
  ["06", "Amplify", "Direct money, media, events, and attention strategically."],
  ["07", "Publish", "Report the work, the outcome, and what remains uncertain."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="sunburst" aria-hidden="true" />
          <div className="home-hero-inner">
            <div className="home-hero-copy">
              <Eyebrow light>Universal basic income, made political</Eyebrow>
              <h1>Money for<br /><span>everyone.</span></h1>
              <p className="hero-definition">A reliable cash floor for every U.S. citizen, paid to each person, without a work requirement.</p>
              <p className="hero-institution">We move candidates toward basic income, then back serious champions where support can matter.</p>
              <div className="hero-actions">
                <ButtonLink href="/take-action" variant="cream">Take Action</ButtonLink>
                <ButtonLink href="/basic-income" variant="outline">How It Works</ButtonLink>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-art-frame">
                {/* Static asset avoids preview-worker image proxy failures. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/basically-income-family.webp" alt="An exuberant illustrated family gathered around the Basically Income emblem" width="1672" height="941" />
              </div>
              <div className="hero-art-note"><b>Money is the means.</b> Human flourishing is the point.</div>
            </div>
          </div>
        </section>

        <section className="definition-ribbon" aria-label="The four defining features of basic income">
          <div><b>Universal</b><span>Everyone eligible receives it.</span></div>
          <div><b>Individual</b><span>It belongs to each person.</span></div>
          <div><b>Recurring</b><span>It arrives reliably.</span></div>
          <div><b>Unconditional</b><span>No work requirement.</span></div>
        </section>

        <section className="section campaign-feature">
          <div className="section-shell campaign-grid">
            <div className="campaign-placard">
              <StatusPill tone="orange">Research desk active</StatusPill>
              <p className="placard-kicker">Next pressure campaign</p>
              <h2>We’re selecting the next candidate ask.</h2>
              <p>Our team is screening races for candidate accessibility, strategic value, timing, supporter reach, and the plausibility of meaningful movement.</p>
              <div className="placard-actions">
                <ButtonLink href="/campaigns" variant="navy">Follow the Selection</ButtonLink>
                <a href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Get campaign updates</a>
              </div>
            </div>
            <div className="selection-note">
              <Eyebrow>Why show an empty state?</Eyebrow>
              <h3>Because political credibility begins with the truth.</h3>
              <p>We will not manufacture urgency or leave a stale action live. When a campaign opens, this module will name the candidate, the exact ask, the deadline, and the reason we selected the race.</p>
              <Link href="/strategy">See the pressure-target screen <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="section policy-section">
          <div className="section-shell">
            <SectionHeading eyebrow="A floor, not a ceiling" title="Money people can count on changes what feels possible." body="Basic income does not prescribe the good life. It gives more people the material latitude to choose one." align="center" />
            <div className="visual-story-grid" aria-label="Human flourishing in an economy with greater security">
              <figure className="visual-story visual-story-wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/family-future.webp" alt="A multigenerational family welcoming a newborn in a sunlit home" loading="lazy" />
                <figcaption><b>A future that feels possible.</b><span>People who want children should live in an economy where building a family does not feel financially reckless.</span></figcaption>
              </figure>
              <figure className="visual-story">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/family-enterprise.webp" alt="A family opening a neighborhood bakery together" loading="lazy" />
                <figcaption><b>Enterprise with a human center.</b><span>Security can widen the runway to start small, create value, and serve a neighborhood.</span></figcaption>
              </figure>
              <figure className="visual-story">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/community-abundance.webp" alt="Neighbors of many generations sharing food at a joyful block party" loading="lazy" />
                <figcaption><b>Prosperity people can see.</b><span>Thriving means time together, local abundance, public life, and confidence in tomorrow.</span></figcaption>
              </figure>
            </div>
            <div className="flourish-grid">
              <article className="flourish-card family-card"><span>Family & care</span><h3>More room to care for children, elders, partners, and yourself.</h3><p>People who want children should be able to imagine affording them.</p></article>
              <article className="flourish-card work-card"><span>Work & bargaining</span><h3>A dependable floor changes the penalty for saying no.</h3><p>Leave a bad job, endure a search, train, or negotiate from firmer ground.</p></article>
              <article className="flourish-card build-card"><span>Enterprise & creation</span><h3>Some valuable work begins before it pays.</h3><p>Take a risk, start small, make art, or build something whose return is uncertain.</p></article>
              <article className="flourish-card future-card"><span>Community & future</span><h3>Security gives people a longer horizon.</h3><p>Absorb shocks, participate locally, and plan beyond the next bill.</p></article>
            </div>
          </div>
        </section>

        <section className="section engine-section">
          <div className="section-shell">
            <SectionHeading eyebrow="The UBI Leverage Loop" title="Ideas move when politicians have a reason to move with them." body="Research can make a policy credible. Electoral machinery makes credibility consequential." />
            <div className="loop-grid">
              {loop.map(([number, title, body]) => <article className="loop-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
            </div>
            <div className="section-action"><ButtonLink href="/strategy" variant="navy">Inspect the Full Method</ButtonLink></div>
          </div>
        </section>

        <section className="section record-section">
          <div className="section-shell record-grid">
            <div><Eyebrow>Proof before promise</Eyebrow><h2>What we did. What happened. What we can claim.</h2><p>Campaign activity, candidate behavior, endorsements, resource deployments, and election results are different facts. Our public record keeps them separate.</p><div className="record-actions"><ButtonLink href="/results" variant="orange">Results & Work Log</ButtonLink><ButtonLink href="/candidates" variant="navy">Candidate Positions</ButtonLink></div></div>
            <div className="ledger-card">
              <div className="ledger-row"><span>Activity</span><b>What the PAC did</b></div>
              <div className="ledger-row"><span>Output</span><b>What the work produced</b></div>
              <div className="ledger-row"><span>Outcome</span><b>What changed externally</b></div>
              <div className="ledger-row"><span>Confidence</span><b>How well causation is known</b></div>
              <p>No inflated score. No victory lap without a record.</p>
            </div>
          </div>
        </section>

        <CtaBand eyebrow="Fund UBI politics" title="More capacity means more political surface area." body="Funding expands our ability to screen races, launch pressure campaigns, support endorsed candidates, produce persuasive media, and publish what happened." primary={<ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="cream" external>Fund the Work</ButtonLink>} secondary={<ButtonLink href="/fund" variant="outline">See What Funding Enables</ButtonLink>} />
      </main>
      <Footer />
    </>
  );
}
