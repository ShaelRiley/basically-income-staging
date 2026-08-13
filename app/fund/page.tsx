import type { Metadata } from "next";
import { ButtonLink, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Donate", description: "Choose an active Basically Income PAC donation campaign or provide recurring support for the team." };

const capacities = [
  ["Candidate research", "Screen more races, verify positions, and identify moments when a clear political intervention may matter."],
  ["Pressure campaigns", "Build a precise ask, mobilize supporters, create persuasive media, and follow through with candidates."],
  ["Endorsed-candidate support", "Direct PAC money, communications, events, and attention toward strategically selected UBI champions."],
  ["Public intelligence", "Maintain candidate histories, evidence summaries, campaign records, and honest results reporting."],
];

export default function FundPage() {
  return <PageShell>
    <PageHero eyebrow="Active donation campaigns" title="Choose what you want to strengthen." body="Support a specific legislative campaign or provide steady monthly backing for the team that researches candidates, runs pressure campaigns, and builds electoral power for basic income." aside={<><StatusPill tone="gold">Two active paths</StatusPill><h3>Campaign support or team capacity.</h3><p>Both links use Basically Income PAC’s ActBlue forms. The PAC retains responsibility for lawful political decisions and allocations.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <div className="donation-grid">
        <article className="donation-card campaign-donation"><span className="card-number">LEGISLATIVE CAMPAIGN</span><h2>Make Billionaires Pay Act</h2><p>Support the active campaign for a universal program that would deliver a national cash dividend while making the wealthiest Americans help fund it.</p><ButtonLink href="https://secure.actblue.com/donate/basicincome" variant="navy" external>Support This Campaign</ButtonLink></article>
        <article className="donation-card team-donation"><span className="card-number">MONTHLY TEAM SUPPORT</span><h2>Keep Basically Income working.</h2><p>Start with $8 a month to sustain the administrative, communications, research, and logistical capacity behind every campaign.</p><ButtonLink href="https://secure.actblue.com/donate/basically-income-1?amount=8" variant="orange" external>Give $8 Monthly</ButtonLink></article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="wide-shell"><h2>What team support makes possible.</h2><p className="lede">Your contribution should fund identifiable political capacity—not disappear into a generic mission statement.</p><div className="feature-grid">{capacities.map(([title,body]) => <article className="info-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="content-section"><div className="wide-shell">
      <div className="feature-grid">
        <article className="action-panel"><span className="status-pill status-orange">Grassroots continuity</span><h2 style={{marginTop: 20}}>Small monthly gifts keep the operating rhythm alive.</h2><p>Political opportunities appear before fundraising is convenient. Recurring support pays for readiness between the visible moments.</p><div className="hero-actions"><ButtonLink href="https://secure.actblue.com/donate/basically-income-1?amount=8" variant="cream" external>Join at $8 Monthly</ButtonLink></div></article>
        <article className="campaign-placard"><span className="status-pill status-gold">Strategic backing</span><h2 style={{marginTop: 22, fontSize: 42}}>Interested in expanding the institution?</h2><p>Review the political opportunity, current scale, constraints, leadership, measurement, and next-stage capacity—then request a substantive briefing.</p><div className="hero-actions"><ButtonLink href="/fund/strategic-backing" variant="navy">Explore Strategic Backing</ButtonLink></div></article>
      </div>
      <div className="notice-box" style={{marginTop: 28}}>Political outcomes remain uncertain. Funding expands the PAC’s ability to act; it does not guarantee candidate movement, endorsement, or electoral victory.</div>
    </div></section>
  </PageShell>;
}
