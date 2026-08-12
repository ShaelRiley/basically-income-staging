import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell } from "../site";

export const metadata: Metadata = { title: "What Is Universal Basic Income?", description: "A plain-language explanation of universal basic income: universal, individual, recurring cash without a work requirement." };

const faqs = [
  ["Would people stop working?", "Cash programs produce different labor effects across populations, payment levels, rules, and time horizons. A UBI does not disappear when a person takes a job, which avoids one familiar work penalty. Serious analysis should examine specific evidence rather than promise no labor response."],
  ["Would UBI cause inflation?", "Inflation depends on financing, economic capacity, supply constraints, payment size, and monetary conditions. A tax-financed transfer differs from newly created deficit spending. Constrained sectors such as housing still require supply and competition policy."],
  ["How could the country pay for it?", "Options include progressive taxation, consumption taxes paired with rebates, carbon or resource dividends, financial and wealth taxes, social dividends, and combinations. Financing determines who gains, who pays, and the macroeconomic effect."],
  ["Would it replace existing benefits?", "That is a design choice, not a defining feature. People with high disability, medical, housing, or care needs may require support above a universal floor. Serious proposals should publish distributional effects and transition rules."],
  ["Why give it to people who do not need it?", "Universality creates a common floor and avoids making eligibility depend on proving poverty. Higher-income recipients can repay some or all of the benefit through the tax system. The gross payment and net distribution are different questions."],
];

export default function BasicIncomePage() {
  return <PageShell>
    <PageHero eyebrow="The policy, in plain language" title="A floor beneath every person." body="Universal basic income is recurring cash paid individually to everyone in the eligible population, without a work requirement. Basically Income PAC advocates a federal income floor for every U.S. citizen." actions={<><ButtonLink href="#features" variant="orange">See the Four Features</ButtonLink><ButtonLink href="/evidence" variant="navy">Explore the Evidence</ButtonLink></>} visual={{src: "/family-future.webp", alt: "A joyful multigenerational family welcoming a newborn", caption: "An income floor expands the material possibility of choosing family, care, and a future."}} aside={<><span className="status-pill status-gold">Canonical definition</span><h3>Money people can count on.</h3><p>People may work, earn, build, save, care, and prosper above the floor.</p></>} />

    <section className="content-section" id="features"><div className="wide-shell">
      <h2>Four features define the policy.</h2><p className="lede">Change one of these features and the program may still be valuable, but it may no longer be universal basic income.</p>
      <div className="feature-grid">
        <article className="info-card accent"><span className="card-number">01</span><h3>Universal</h3><p>Everyone in the defined eligible population receives it. The eligible population must be stated clearly.</p></article>
        <article className="info-card accent"><span className="card-number">02</span><h3>Individual</h3><p>The payment belongs to each person rather than being calculated only at the household level.</p></article>
        <article className="info-card accent"><span className="card-number">03</span><h3>Recurring</h3><p>It arrives on a predictable schedule. A one-time rebate or stimulus check is not UBI.</p></article>
        <article className="info-card accent"><span className="card-number">04</span><h3>Unconditional</h3><p>There is no work requirement or means test. Ordinary identity and eligibility verification may still exist.</p></article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid">
      <h2>A floor, not a ceiling.</h2>
      <div className="prose"><p>A basic income belongs to the individual and does not vanish when earnings rise. That gives people a dependable minimum while leaving room to work, train, create, care, save, or build an enterprise.</p><div className="quote-panel">Economic security should widen human choice, not prescribe how people use it.</div><h3>What UBI cannot do alone</h3><p>Basic income does not settle health care, housing supply, disability support, education, labor law, or public services. Cash gives people flexible economic agency. Other institutions remain necessary.</p><h3>Adjacent evidence is useful, not identical</h3><p>Guaranteed-income pilots and targeted cash programs can illuminate how recipients use money and how outcomes change. Their amount, duration, eligibility, and context may differ materially from a permanent national UBI.</p></div>
    </div></section>

    <section className="content-section"><div className="content-shell">
      <h2>Hard questions deserve direct answers.</h2><p className="lede">Contested design questions are part of making the policy serious.</p>
      <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div></section>

    <CtaBand eyebrow="From policy to politics" title="A credible idea still needs candidates prepared to enact it." body="See how Basically Income PAC turns support for basic income into pressure, commitments, endorsements, and political attention." primary={<ButtonLink href="/strategy" variant="cream">See Our Strategy</ButtonLink>} secondary={<ButtonLink href="/campaigns" variant="outline">View Campaigns</ButtonLink>} />
  </PageShell>;
}
