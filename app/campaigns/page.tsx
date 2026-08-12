import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Campaigns", description: "See where Basically Income PAC is applying political pressure, why each target was selected, and what happened." };

export default function CampaignsPage() {
  return <PageShell>
    <PageHero eyebrow="The operating layer" title="Turn public support into a candidate incentive." body="A campaign is a time-bounded political intervention with a target, a precise ask, a supporter action, and a public result." actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Campaign%20updates">Get Campaign Updates</a><ButtonLink href="/strategy" variant="navy">How We Select Races</ButtonLink></>} visual={{src: "/community-abundance.webp", alt: "Neighbors gathering across generations at a joyful community meal", caption: "Politics is the machinery. Flourishing together is the destination.", tone: "orange"}} aside={<><StatusPill tone="orange">Research desk active</StatusPill><h3>No public action is open today.</h3><p>We are selecting the next target. We show this state instead of leaving stale urgency online.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>The next campaign begins with judgment.</h2><p className="lede">The team is screening races for a real decision window, a clear candidate ask, strategic significance, supporter reach, and plausible movement.</p>
      <div className="feature-grid three">
        <article className="info-card"><span className="card-number">SCREEN</span><h3>Find a live opening</h3><p>Monitor electoral timing, candidate positions, and moments when a public commitment could matter.</p></article>
        <article className="info-card"><span className="card-number">CHOOSE</span><h3>Select the lever</h3><p>Prefer a finite, meaningful ask over generalized awareness or indiscriminate pressure.</p></article>
        <article className="info-card"><span className="card-number">PREPARE</span><h3>Build the record first</h3><p>Document the current position, source the claim, and define what would count as movement.</p></article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="content-shell">
      <h2>Public political record</h2><p className="lede">Campaigns, endorsements, and candidate support are distinct records. The archive will preserve each one as the underlying documentation is migrated.</p>
      <div className="timeline">
        <article className="timeline-item"><span>Endorsement record</span><div><h3>Matt Dodson, U.S. Senate, New Mexico</h3><p>Basically Income PAC’s endorsement is externally listed. The redesigned record will add the candidate’s UBI commitment, the PAC’s decision rationale, any support deployed, and the election outcome without overstating causality.</p><p><a href="https://ballotpedia.org/Matt_Dodson" rel="noreferrer"><b>View the external record →</b></a></p></div></article>
        <article className="timeline-item"><span>Archive migration</span><div><h3>Earlier pressure campaigns</h3><p>Campaign source files are being converted into durable records with dates, exact asks, candidate responses, closeouts, and causal-confidence labels.</p></div></article>
      </div>
      <div className="notice-box"><b>Evidence rule:</b> campaign activity, candidate response, platform movement, endorsement, support, and election victory will never be collapsed into one “win” metric.</div>
    </div></section>

    <CtaBand eyebrow="Keep the pressure on" title="Political opportunities do not arrive on a fundraising schedule." body="Recurring support sustains the research, creative work, communications, monitoring, and follow-through required to act when a useful race appears." primary={<ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="cream" external>Give Monthly</ButtonLink>} secondary={<ButtonLink href="/fund" variant="outline">What Funding Enables</ButtonLink>} />
  </PageShell>;
}
