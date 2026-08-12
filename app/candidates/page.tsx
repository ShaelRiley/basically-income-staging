import type { Metadata } from "next";
import { ButtonLink, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Candidate Positions", description: "A sourced, dated public record of candidate positions on universal basic income and Basically Income PAC endorsements." };

const levels = [
  ["No verified public position", "No qualifying source found. This does not mean opposition."],
  ["Opposes UBI", "The candidate has publicly rejected UBI or a defining feature."],
  ["Targeted cash only", "Supports cash for a limited population, not a universal payment."],
  ["Exploring UBI", "Expresses interest or openness without a clear commitment."],
  ["Supports UBI in principle", "Endorses the idea without enough design detail."],
  ["Supports a defined UBI", "Supports a universal, recurring, individual, unconditional floor."],
  ["UBI champion", "Combines a defined proposal with sustained public advocacy or action."],
];

export default function CandidatesPage() {
  return <PageShell>
    <PageHero eyebrow="Candidate accountability" title="What candidates say should be easy to find." body="We preserve sourced public positions over time, distinguish targeted cash from universal basic income, and keep policy support separate from PAC endorsement." actions={<a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Candidate%20position%20source">Submit a Public Source</a>} visual={{src: "/family-enterprise.webp", alt: "A family working together at its neighborhood bakery", caption: "Public policy is ultimately judged in the lives people can build.", tone: "navy"}} aside={<><StatusPill tone="navy">Method before score</StatusPill><h3>No black-box ratings.</h3><p>Every classification needs a source, date, explanation, reviewer, and confidence level.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>A descriptive ladder, not a yes-or-no badge.</h2><p className="lede">A candidate can move through these states as public commitments become clearer. The history remains visible.</p>
      <div className="feature-grid">{levels.map(([title, body], i) => <article className="info-card" key={title}><span className="card-number">LEVEL {i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell">
      <h2>Verified record in migration</h2><p className="lede">The public tracker will grow only as sources and review dates are attached. One documented endorsement already establishes the PAC’s entry into electoral politics.</p>
      <table className="comparison-table"><thead><tr><th>Candidate</th><th>Race</th><th>UBI record</th><th>PAC relationship</th></tr></thead><tbody><tr><td>Matt Dodson</td><td>U.S. Senate, New Mexico</td><td>Defined federal basic-income proposal; full source record in editorial migration</td><td><StatusPill tone="gold">Endorsed</StatusPill><br /><a href="https://ballotpedia.org/Matt_Dodson" rel="noreferrer">External endorsement record →</a></td></tr></tbody></table>
      <div className="notice-box" style={{marginTop: 24}}><b>Correction standard:</b> candidates and authorized staff may submit public statements, platform pages, videos, legislation, or other verifiable sources. Submission does not guarantee a classification or endorsement.</div>
    </div></section>

    <section className="content-section"><div className="content-shell action-panel"><h2>Does a candidate’s record need correction?</h2><p>Send the public source, date, and context. Material changes will be verified and preserved in the position history.</p><div className="hero-actions"><a className="button button-cream" href="mailto:contact@basicallyincome.org?subject=Candidate%20record%20correction">Submit a Public Source</a><ButtonLink href="/strategy" variant="outline">Read the Endorsement Method</ButtonLink></div></div></section>
  </PageShell>;
}
