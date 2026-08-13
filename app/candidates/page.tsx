import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Candidates and Campaigns", description: "Current candidate-pressure work, sourced UBI positions, endorsements, and public results from Basically Income PAC." };

const levels = [
  ["No verified UBI commitment", "No qualifying public source, opposition to UBI, or support limited to targeted cash."],
  ["Moving toward UBI", "The candidate is exploring the idea or supports it in principle without a defined commitment."],
  ["Supports a defined UBI", "The candidate supports a universal, recurring, individual, unconditional income floor."],
  ["UBI champion", "A defined proposal plus sustained public advocacy, legislation, organizing, or political action."],
];

const screens = [
  ["Commitment", "Is the candidate already serious about UBI—or plausibly movable toward it?"],
  ["Political opening", "Is there a live decision window, clear ask, and reachable audience?"],
  ["Marginal value", "Could a modest amount of money, attention, or supporter action matter here?"],
  ["Demonstration value", "Would movement in this race make UBI more visible, credible, or politically useful elsewhere?"],
];

export default function CandidatesPage() {
  return <PageShell>
    <PageHero eyebrow="Candidates, campaigns & endorsements" title="One public record for the politics of UBI." body="See who supports a real basic income, where we are applying pressure, why a race matters, what the PAC did, and what happened next." actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Get Campaign Updates</a><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Candidate%20position%20source">Submit a Public Source</a></>} aside={<><StatusPill tone="orange">Research desk active</StatusPill><h3>Next pressure target under review.</h3><p>No stale deadline and no manufactured emergency. The next action will name the candidate, exact ask, decision window, and reason for selection.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>Current campaign</h2>
      <div className="campaign-placard"><StatusPill tone="orange">Selection underway</StatusPill><h2 style={{marginTop: 22}}>We are screening the next candidate ask.</h2><p>Our team is checking candidate access, timing, supporter reach, strategic importance, and whether public movement toward UBI is plausible. Subscribe for the action when the record is ready.</p><div className="hero-actions"><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Notify Me</a><ButtonLink href="/take-action" variant="orange">Ways to Help Now</ButtonLink></div></div>
    </div></section>

    <section className="content-section alt"><div className="wide-shell">
      <h2>How we choose where to act.</h2><p className="lede">We do not spread attention evenly. We look for political leverage—and publish the judgment in plain language.</p>
      <div className="feature-grid">{screens.map(([title, body]) => <article className="info-card accent" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      <div className="notice-box" style={{marginTop: 26}}><b>Decision rule:</b> support for UBI is necessary for endorsement, but it is not sufficient. Competitiveness, integrity, strategic value, and the usefulness of PAC support also matter.</div>
    </div></section>

    <section className="content-section"><div className="wide-shell">
      <h2>A clear position ladder.</h2><p className="lede">A candidate can move as public commitments become clearer. Every classification should carry a source, date, explanation, and review state.</p>
      <div className="feature-grid">{levels.map(([title, body], i) => <article className="info-card" key={title}><span className="card-number">LEVEL {i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="content-section alt" id="record"><div className="content-shell">
      <h2>Public record</h2><p className="lede">Campaigns, candidate positions, endorsements, PAC support, and election outcomes stay distinct.</p>
      <div className="timeline">
        <article className="timeline-item"><span>Current</span><div><h3>Next pressure target under review</h3><p>No public action is open while candidate records and the decision window are being verified.</p><p><StatusPill tone="orange">Research active</StatusPill></p></div></article>
        <article className="timeline-item"><span>Endorsement</span><div><h3>Matt Dodson · U.S. Senate, New Mexico</h3><p>An external candidate record lists the Basically Income PAC endorsement. The expanded record will attach the candidate’s UBI commitment, decision rationale, PAC support, and election outcome.</p><p><StatusPill tone="gold">Verified external record</StatusPill> <a href="https://ballotpedia.org/Matt_Dodson" rel="noreferrer"><b>View source →</b></a></p></div></article>
      </div>
      <div className="notice-box"><b>Correction standard:</b> candidates and authorized staff may submit public statements, platform pages, video, legislation, or other verifiable sources. Material corrections will be reviewed and preserved in the history.</div>
    </div></section>

    <CtaBand eyebrow="Keep the pressure on" title="Political opportunities do not arrive on a fundraising schedule." body="Monthly support sustains candidate research, campaign launches, public records, creative work, and follow-through." primary={<ButtonLink href="https://secure.actblue.com/donate/basically-income-1?amount=8" variant="cream" external>Give $8 Monthly</ButtonLink>} secondary={<ButtonLink href="/fund" variant="outline">See Active Donation Campaigns</ButtonLink>} />
  </PageShell>;
}
