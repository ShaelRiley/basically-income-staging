import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Results and Work Log", description: "See what Basically Income PAC did, what happened, and how confidently the organization can describe its political contribution." };

export default function ResultsPage() {
  return <PageShell>
    <PageHero eyebrow="Proof before promise" title="What we did. What happened. What we can claim." body="Political organizations should report more than aspiration. This record separates PAC activity, external outcomes, and the strength of any causal connection." actions={<><ButtonLink href="#work-log" variant="orange">View the Work Log</ButtonLink><ButtonLink href="/strategy" variant="navy">Read the Method</ButtonLink></>} visual={{src: "/community-abundance.webp", alt: "Children and neighbors enjoying a flourishing public life", caption: "The public record measures the machinery. Human flourishing remains the purpose.", tone: "navy"}} aside={<><StatusPill tone="navy">Early public ledger</StatusPill><h3>Small record. Complete definitions.</h3><p>We are publishing the reporting structure before enough observations exist for an impressive dashboard.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>Four facts, kept separate.</h2><p className="lede">A single “impact” number would conceal more than it reveals.</p>
      <div className="feature-grid">
        <article className="info-card accent"><span className="card-number">INPUT</span><h3>Resources committed</h3><p>Staff time, money, research, creative work, systems, and relationships.</p></article>
        <article className="info-card accent"><span className="card-number">OUTPUT</span><h3>Work produced</h3><p>Candidate contacts, supporter actions, media, events, campaign pages, and public records.</p></article>
        <article className="info-card accent"><span className="card-number">OUTCOME</span><h3>External change</h3><p>Candidate responses, clarified positions, platform movement, endorsements, deployments, and election results.</p></article>
        <article className="info-card accent"><span className="card-number">CONFIDENCE</span><h3>Connection established</h3><p>Direct confirmation, strong evidence, plausible contribution, or unknown.</p></article>
      </div>
    </div></section>

    <section className="content-section alt" id="work-log"><div className="content-shell">
      <h2>Public work log</h2><p className="lede">The initial ledger records only facts with a visible basis. Campaign-level entries will expand as source files are migrated.</p>
      <div className="timeline">
        <article className="timeline-item"><span>Current</span><div><h3>Next pressure target under review</h3><p>The campaign desk is screening races using the published Pressure Target Screen. No public action is open while verification is incomplete.</p><p><StatusPill tone="orange">Research active</StatusPill></p></div></article>
        <article className="timeline-item"><span>Recurring</span><div><h3>Basic Income Roundtable</h3><p>The PAC maintains a recurring public forum for researchers, advocates, candidates, builders, and supporters. Event-level archives and recordings are the next migration layer.</p><p><StatusPill tone="navy">Institutional output</StatusPill></p></div></article>
        <article className="timeline-item"><span>Endorsement</span><div><h3>Matt Dodson, U.S. Senate, New Mexico</h3><p>An external candidate record lists the Basically Income PAC endorsement. The full decision memo, support record, and outcome are being reconstructed.</p><p><StatusPill tone="gold">Verified external record</StatusPill> <a href="https://ballotpedia.org/Matt_Dodson" rel="noreferrer"><b>View source →</b></a></p></div></article>
      </div>
      <div className="notice-box"><b>Reporting rule:</b> absence of a candidate response is a campaign result. It is not erased, relabeled as engagement, or hidden behind aggregate reach.</div>
    </div></section>

    <section className="content-section"><div className="content-shell"><h2>Causal-confidence labels</h2><table className="comparison-table"><thead><tr><th>Label</th><th>Required basis</th></tr></thead><tbody><tr><td>Direct confirmation</td><td>The candidate or authorized staff explicitly connects the campaign and response.</td></tr><tr><td>Strong evidence</td><td>Timing, communication, and documentation strongly connect the intervention and change.</td></tr><tr><td>Plausible contribution</td><td>The PAC acted before an observed change, while other causes remain material or unknown.</td></tr><tr><td>Unknown</td><td>Activity and outcome are documented; causation cannot be assessed.</td></tr></tbody></table></div></section>

    <CtaBand eyebrow="Fund inspectable politics" title="The public record is part of the work." body="Support expands political activity and the capacity to document decisions, responses, deployments, uncertainty, and learning." primary={<ButtonLink href="/fund" variant="cream">Fund the Work</ButtonLink>} secondary={<ButtonLink href="/campaigns" variant="outline">See Campaigns</ButtonLink>} />
  </PageShell>;
}
