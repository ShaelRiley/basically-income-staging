import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell } from "../site";

export const metadata: Metadata = { title: "Our Political Strategy", description: "How Basically Income PAC selects leverage, pressures candidates, verifies movement, endorses champions, and publishes results." };

const steps = [
  ["Scan", "Monitor races, candidate positions, electoral timing, and policy opportunity."],
  ["Select leverage", "Choose targets where a clear ask and finite resources may have unusual value."],
  ["Mobilize", "Give supporters a specific candidate action through email, social, events, and outreach."],
  ["Verify movement", "Document responses, platform language, specificity, and changes over time."],
  ["Reward commitment", "Recognize meaningful movement, then endorse selectively when criteria are met."],
  ["Amplify", "Use money, media, events, creative work, and supporter attention strategically."],
  ["Publish and learn", "Report the work, observed outcome, uncertainty, and next decision."],
];

export default function StrategyPage() {
  return <PageShell>
    <PageHero eyebrow="The UBI Leverage Loop" title="Make meaningful UBI support politically advantageous." body="Policies become viable partly because candidates encounter constituencies, money, attention, expertise, and public recognition when they support them. We are building that incentive layer for basic income." actions={<><ButtonLink href="/campaigns" variant="orange">See Campaigns</ButtonLink><ButtonLink href="/fund" variant="navy">Fund the Machinery</ButtonLink></>} aside={<><h3>Political thesis</h3><p>Research makes UBI credible. Organized electoral reward makes credibility consequential.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>One political cycle. Repeated.</h2><p className="lede">Each step produces a public record and improves the selection of the next intervention.</p>
      <div className="feature-grid">{steps.map(([title, body], i) => <article className="info-card accent" key={title}><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid"><h2>Two decisions require two screens.</h2><div className="prose"><h3>Pressure-target screen</h3><p>We assess plausibility of movement, strategic value, timing, candidate accessibility, supporter reach, media value, clarity of ask, and the possibility of constructive pressure.</p><h3>Endorsement and investment screen</h3><p>We assess specificity and durability of the UBI commitment, willingness to defend it, implementation seriousness, integrity, campaign competence, viability, marginal usefulness of PAC support, coalition value, and downside risk.</p><div className="quote-panel">A candidate can be worth pressuring without being ready for endorsement. A candidate can support UBI without earning PAC support.</div></div></div></section>

    <section className="content-section"><div className="content-shell">
      <h2>Publish judgment without counterfeit precision.</h2><p className="lede">Until enough decisions exist to validate numerical weights, the public method uses eligibility gates, High/Medium/Low dimensions, source links, confidence labels, dates, and narrative decision memos.</p>
      <table className="comparison-table"><thead><tr><th>Record</th><th>What it shows</th><th>What it does not prove</th></tr></thead><tbody><tr><td>Input</td><td>Money, staff time, research</td><td>That a candidate moved</td></tr><tr><td>Output</td><td>Contacts, actions, media, events</td><td>That the output caused a response</td></tr><tr><td>Observed outcome</td><td>Response, platform change, election result</td><td>The PAC’s causal share</td></tr><tr><td>Causal confidence</td><td>Direct, strong, plausible, or unknown connection</td><td>Certainty beyond the evidence</td></tr></tbody></table>
    </div></section>

    <CtaBand eyebrow="Add political reach" title="The next constraint is capacity." body="More resources expand race screening, candidate research, campaign speed, creative distribution, endorsed-candidate support, and public reporting." primary={<ButtonLink href="/fund" variant="cream">See What Funding Enables</ButtonLink>} secondary={<ButtonLink href="mailto:contact@basicallyincome.org?subject=Strategic%20briefing%20request" variant="outline">Request a Briefing</ButtonLink>} />
  </PageShell>;
}
