import type { Metadata } from "next";
import { ButtonLink, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Take Action", description: "Join the current Basically Income PAC political action, submit candidate evidence, attend the Roundtable, or help select the next pressure campaign." };

export default function TakeActionPage() {
  return <PageShell>
    <PageHero eyebrow="One useful action" title="Help create a political reward for supporting basic income." body="When a pressure campaign is active, this page leads with one candidate and one ask. Between campaigns, you can strengthen the research, public record, and constituency that make the next intervention possible." actions={<a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Get Campaign Updates</a>} visual={{src: "/family-future.webp", alt: "A newborn welcomed by parents, a sibling, and grandparents", caption: "Take action for an economy where more people can choose care, children, and confidence in the future.", tone: "orange"}} aside={<><StatusPill tone="orange">Selection underway</StatusPill><h3>The next public action is being prepared.</h3><p>No stale deadline. No manufactured emergency. We will publish the candidate, ask, and decision window when the record is ready.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>Choose the action you can complete now.</h2><p className="lede">Each path feeds a specific part of the UBI Leverage Loop.</p>
      <div className="feature-grid">
        <article className="info-card accent"><span className="card-number">FOLLOW</span><h3>Receive the next candidate ask</h3><p>Join campaign updates so a live decision window does not pass unnoticed.</p><div className="hero-actions"><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Add%20me%20to%20campaign%20updates">Get Updates</a></div></article>
        <article className="info-card accent"><span className="card-number">SOURCE</span><h3>Improve a candidate record</h3><p>Send a platform page, public statement, video, legislation, or other verifiable UBI source.</p><div className="hero-actions"><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Candidate%20position%20source">Submit a Source</a></div></article>
        <article className="info-card accent"><span className="card-number">NOMINATE</span><h3>Suggest a race or candidate</h3><p>Identify the office, election, candidate, timing, and why a precise UBI ask may carry leverage.</p><div className="hero-actions"><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Race%20or%20candidate%20suggestion">Suggest a Target</a></div></article>
        <article className="info-card accent"><span className="card-number">CONVENE</span><h3>Join the Roundtable</h3><p>Meet the community examining cash, economic security, and the politics of universal basic income.</p><div className="hero-actions"><a className="button button-navy" href="https://www.clubhouse.com/house/basically-income-pac-6pbvj5ds0kgs" rel="noreferrer">Open Clubhouse</a></div></article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid"><h2>What happens when a campaign opens?</h2><div className="prose"><h3>One target</h3><p>The action names the candidate, office, geography, and current documented position.</p><h3>One ask</h3><p>Supporters receive a precise public commitment to request, with a message they can personalize.</p><h3>One record</h3><p>Candidate responses, silence, movement, and campaign closeout remain visible after the action ends.</p><div className="quote-panel">Participation matters more when supporters can see the political mechanism they are entering.</div></div></div></section>

    <section className="content-section"><div className="content-shell action-panel"><h2>Fund the readiness behind the action.</h2><p>Political opportunities appear before fundraising campaigns are convenient. Recurring support sustains research, creative production, communications, and follow-through.</p><div className="hero-actions"><ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="cream" external>Keep the Pressure On</ButtonLink><ButtonLink href="/fund" variant="outline">See What Funding Enables</ButtonLink></div></div></section>
  </PageShell>;
}
