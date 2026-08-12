import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../../site";

export const metadata: Metadata = { title: "Strategic Backing", description: "Examine the political opportunity, operating method, constraints, and next-stage capacity of Basically Income PAC." };

const constraints = [
  ["Race-screening bandwidth", "More political opportunities exist than the current team can fully research and compare."],
  ["Rapid-response production", "A useful electoral window can close before research, copy, art, distribution, and follow-up are ready."],
  ["Candidate-support capacity", "An endorsement creates more political value when the PAC can add material money, media, events, and attention."],
  ["Measurement and public reporting", "Better systems increase institutional learning and make judgment easier for supporters to evaluate."],
];

export default function StrategicBackingPage() {
  return <PageShell>
    <PageHero eyebrow="Strategic backing" title="Fund the missing political layer for universal basic income." body="Basically Income PAC converts UBI support into candidate pressure, public commitment, endorsement, strategic support, and political attention. Added capacity expands the number and quality of interventions the PAC can undertake." actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Strategic%20briefing%20request">Request a Strategic Briefing</a><ButtonLink href="/fund/brief" variant="navy">Read the Backer Brief</ButtonLink></>} visual={{src: "/family-enterprise.webp", alt: "A family and neighbors building a flourishing local business", caption: "Political capacity is valuable because it can enlarge the horizon of ordinary life.", tone: "gold"}} aside={<><StatusPill tone="gold">Early-stage leverage</StatusPill><h3>Operational enough to inspect. Early enough to accelerate.</h3><p>The proposition is a functioning political mechanism with substantial unrealized capacity.</p></>} />

    <section className="content-section"><div className="content-shell prose-grid"><h2>The institutional opportunity.</h2><div className="prose"><p>Basic income has economists, research programs, pilots, advocates, and an established intellectual history. Its dedicated electoral-incentive infrastructure remains comparatively thin.</p><div className="quote-panel">The missing layer finds leverage, moves candidates, rewards commitment, and makes UBI support politically valuable.</div><p>Basically Income PAC is building that layer through a repeatable cycle of race selection, candidate pressure, verification, endorsement, amplification, and public reporting.</p></div></div></section>

    <section className="content-section alt"><div className="wide-shell"><h2>Current constraints are operating opportunities.</h2><p className="lede">Strategic backing should remove a bottleneck, not merely enlarge an undifferentiated budget.</p><div className="feature-grid">{constraints.map(([title,body], i) => <article className="info-card accent" key={title}><span className="card-number">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="content-section"><div className="content-shell"><h2>What a serious backer can inspect.</h2><div className="feature-grid"><article className="info-card"><h3>Method</h3><p>The Leverage Loop, pressure-target screen, endorsement screen, and causal-confidence doctrine.</p></article><article className="info-card"><h3>Execution</h3><p>Current campaigns, candidate records, endorsements, work log, and resource deployments as available.</p></article><article className="info-card"><h3>Capacity</h3><p>Present operating scale, bottlenecks, leadership responsibility, and budget-grounded expansion scenarios.</p></article><article className="info-card"><h3>Risk</h3><p>Electoral uncertainty, attribution limits, concentration, reputation, execution, and early-stage fragility.</p></article></div><div className="hero-actions"><ButtonLink href="/fund/brief" variant="navy">Open the Ten-Minute Brief</ButtonLink><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Strategic%20briefing%20request">Request a Conversation</a></div></div></section>

    <CtaBand eyebrow="One institution" title="Strategic depth without donor rule." body="Backers receive decision-quality information and accountable stewardship. The PAC retains judgment over campaign selection, endorsements, and allocation." primary={<a className="button button-cream" href="mailto:contact@basicallyincome.org?subject=Strategic%20briefing%20request">Request a Briefing</a>} secondary={<ButtonLink href="/results" variant="outline">Inspect the Record</ButtonLink>} />
  </PageShell>;
}
