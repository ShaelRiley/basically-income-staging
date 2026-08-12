import type { Metadata } from "next";
import { ButtonLink, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Fund the Work", description: "Fund the political capacity that finds leverage, moves candidates, and backs serious UBI champions." };

const capacities = [
  ["Find more opportunities", "Screen more races, monitor candidates, and identify moments when a clear intervention may matter."],
  ["Launch stronger campaigns", "Research the ask, mobilize supporters, create persuasive media, and respond to electoral timing."],
  ["Back serious champions", "Support strategically selected endorsed candidates with PAC resources, communications, events, and attention."],
  ["Publish better intelligence", "Maintain candidate histories, campaign records, evidence summaries, and honest results reporting."],
  ["Build durable capacity", "Develop staff, systems, audiences, media operations, and institutional memory."],
];

export default function FundPage() {
  return <PageShell>
    <PageHero eyebrow="Fund UBI politics" title="Build the electoral infrastructure basic income still lacks." body="Your contribution expands the capacity to find political leverage, pressure candidates, reward meaningful commitment, support selected champions, and publish what happened." actions={<><ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="orange" external>Contribute</ButtonLink><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Strategic%20briefing%20request">Request a Strategic Briefing</a></>} aside={<><StatusPill tone="gold">One institution</StatusPill><h3>Grassroots continuity. Strategic expansion.</h3><p>Both paths fund the UBI Leverage Loop. Donors do not control individual allocations.</p></>} />

    <section className="content-section"><div className="wide-shell"><h2>What additional capacity changes.</h2><p className="lede">Funding should translate into identifiable political capabilities rather than disappear into an amorphous mission.</p><div className="feature-grid">{capacities.map(([title,body], i) => <article className="info-card accent" key={title}><span className="card-number">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="content-section alt"><div className="content-shell prose-grid"><h2>Support the portfolio, inspect the judgment.</h2><div className="prose"><p>The PAC decides where money, attention, research, and advocacy may have the greatest political value. A campaign can explain current work without promising that a contribution is earmarked to that race.</p><div className="quote-panel">Support expands capacity. The PAC selects interventions. The public record shows what followed.</div><h3>No false unit economics</h3><p>We will not claim that $50 changes a candidate’s mind or that every dollar goes directly to a campaign. Where real operating costs are useful, we will report them retrospectively and with context.</p></div></div></section>

    <section className="content-section"><div className="wide-shell">
      <div className="feature-grid">
        <article className="action-panel"><span className="status-pill status-orange">Grassroots</span><h2 style={{marginTop: 20}}>Keep the pressure on.</h2><p>Monthly support sustains the recurring work between headlines: race screening, candidate research, campaign launches, public records, and follow-through.</p><div className="hero-actions"><ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="cream" external>Give Monthly</ButtonLink></div></article>
        <article className="campaign-placard"><span className="status-pill status-gold">Strategic backing</span><h2 style={{marginTop: 22, fontSize: 42}}>Fund the missing political layer.</h2><p>Examine our method, present scale, constraints, next-stage capabilities, leadership, measurement, and risk in a substantive conversation.</p><div className="hero-actions"><ButtonLink href="/fund/strategic-backing" variant="navy">Explore Strategic Backing</ButtonLink></div></article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="content-shell"><h2>What we promise supporters.</h2><div className="feature-grid"><article className="info-card"><h3>Disciplined selection</h3><p>We will use judgment to choose and execute political work.</p></article><article className="info-card"><h3>Inspectability</h3><p>We will report activity, outcomes, deployments, uncertainty, and learning with enough specificity to evaluate.</p></article></div><div className="notice-box" style={{marginTop: 25}}>Political outcomes remain uncertain. Funding expands the ability to act; it does not guarantee candidate movement or electoral victory.</div></div></section>
  </PageShell>;
}
