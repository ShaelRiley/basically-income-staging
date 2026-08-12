import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell } from "../site";

export const metadata: Metadata = { title: "Universal Basic Income Evidence", description: "A disciplined map of the evidence, implementation questions, objections, and uncertainty surrounding basic income and cash transfers." };

const topics = [
  ["Cash programs & experiments", "Compare amount, eligibility, duration, place, and how closely each program resembles a true UBI."],
  ["Work & labor markets", "Examine hours, job search, caregiving, education, health, and how program design shapes behavior."],
  ["Families, health & care", "Trace material pathways such as food, utilities, transport, housing stability, parental time, and stress."],
  ["Entrepreneurship & local economies", "Assess risk tolerance, business formation, demand stability, and the limits of multiplier claims."],
  ["Financing & implementation", "Compare taxes, dividends, program interactions, net distribution, administration, and transition rules."],
  ["Automation & AI", "Study distribution through technological change without pretending the timing or magnitude is settled."],
];

export default function EvidencePage() {
  return <PageShell>
    <PageHero eyebrow="Evidence within reach" title="Simple enough to understand. Serious enough to scrutinize." body="Cash-transfer evidence is substantial and heterogeneous. Programs differ in amount, duration, eligibility, location, and design. We will say what each source can tell us and what it cannot." actions={<ButtonLink href="#topics" variant="orange">Explore the Evidence Map</ButtonLink>} aside={<><h3>Evidence rule</h3><p>A guaranteed-income pilot can inform UBI. It should not be silently redescribed as UBI.</p></>} />

    <section className="content-section" id="topics"><div className="wide-shell"><h2>Six evidence pathways.</h2><p className="lede">The launch library is structured around the questions serious visitors actually ask.</p><div className="feature-grid three">{topics.map(([title, body]) => <article className="info-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="content-section alt"><div className="content-shell prose-grid"><h2>Every claim gets a truth condition.</h2><div className="prose"><h3>Definitions</h3><p>State what the organization means by UBI, guaranteed income, universality, recurrence, and unconditionality.</p><h3>Normative positions</h3><p>Present beliefs such as economic security expanding human choice as organizational judgments, not laboratory findings.</p><h3>Empirical claims</h3><p>Name the source, population, place, payment, duration, outcome, and limitation.</p><h3>Institutional facts</h3><p>Attach dates and responsible records to campaign activity, candidate contacts, responses, endorsements, and deployments.</p></div></div></section>

    <section className="content-section"><div className="content-shell">
      <h2>What an evidence card must answer</h2>
      <div className="feature-grid"><article className="info-card accent"><h3>What was tested?</h3><p>Who received what, where, for how long, and under which eligibility rules?</p></article><article className="info-card accent"><h3>What was measured?</h3><p>Which outcome, over what period, with what comparison or research design?</p></article><article className="info-card accent"><h3>What was found?</h3><p>A plain-language result with its denominator, uncertainty, and original source.</p></article><article className="info-card accent"><h3>What cannot be inferred?</h3><p>The limitation, transferability problem, or difference from a permanent national UBI.</p></article></div>
      <div className="notice-box" style={{marginTop: 28}}><b>Editorial state:</b> the evidence archive is being migrated and re-sourced. This page establishes the method before publishing a shallow pile of decontextualized statistics.</div>
    </div></section>

    <CtaBand eyebrow="Evidence into action" title="Research answers whether an idea deserves attention. Politics decides whether it receives power." body="See how evidence informs candidate asks without pretending that research predetermines every political or implementation choice." primary={<ButtonLink href="/strategy" variant="cream">See the Political Method</ButtonLink>} secondary={<ButtonLink href="/basic-income" variant="outline">Return to the Policy</ButtonLink>} />
  </PageShell>;
}
