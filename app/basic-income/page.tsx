import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell } from "../site";

export const metadata: Metadata = { title: "What Is Universal Basic Income?", description: "A plain-language explanation of universal basic income: universal, individual, recurring cash without a work requirement." };

const faqs = [
  ["Would people stop working?", <><b>No. Unconditional cash does not make people simply abandon work.</b> Alaska’s universal permanent dividend did not reduce aggregate employment. Finland’s randomized basic-income experiment produced small employment effects while recipients reported better economic security and mental wellbeing. The strongest recent U.S. randomized study does find a moderate labor-supply response: in its January 2026 revision, recipients worked about 1–2 fewer hours per week and labor-force participation fell 4.1 percentage points relative to controls. That is a real effect, but it is not mass withdrawal from work. A true UBI also stays in place when earnings rise, avoiding the abrupt benefit cliffs that can punish additional work. <a href="/evidence#work-alaska"><b>Read the work evidence →</b></a></>],
  ["Would UBI cause inflation?", <><b>Not automatically.</b> Inflation depends on the size of the payment, how it is financed, the state of the economy, and whether supply can expand when demand rises. A tax-funded transfer reallocates purchasing power; it is not equivalent to creating the full program cost as new money. Housing, health care, energy, and other supply-constrained markets still require complementary policy. <a href="/evidence#design-questions"><b>See the design questions →</b></a></>],
  ["How could the country pay for it?", <><b>The United States has multiple viable financing tools; the political task is choosing the mix.</b> Options include progressive income taxation, consumption taxes paired with rebates, carbon or resource dividends, taxes on concentrated wealth and financial activity, and social dividends from publicly owned assets. The serious argument is over distribution, durability, incentives, and administrative design—not whether financing mechanisms exist. <a href="/evidence#design-questions"><b>See financing as a design question →</b></a></>],
  ["Would it replace existing benefits?", <><b>A universal floor should not become an excuse to abandon people with higher needs.</b> Disability, medical, housing, and care supports may remain necessary above a basic income. Any federal proposal should publish its transition rules and distributional effects before asking for support. <a href="/evidence#design-questions"><b>See program-interaction questions →</b></a></>],
  ["Why give it to people who do not need it?", <><b>Because universality is what makes the floor simple, durable, and available before a crisis.</b> It removes the need to prove poverty, reduces stigma and administrative exclusion, and avoids abrupt eligibility cliffs. Higher-income households can repay part or all of the gross payment through the tax system; equal gross payments do not imply equal net benefits. <a href="/evidence#synthesis-2024"><b>Read the broader evidence →</b></a></>],
];

export default function BasicIncomePage() {
  return <PageShell>
    <PageHero eyebrow="The policy, in plain language" title="A floor beneath every person." body="Universal basic income is recurring cash paid individually to everyone in the eligible population, without a work requirement. Basically Income PAC advocates a federal income floor for every U.S. citizen." actions={<><ButtonLink href="#features" variant="orange">See the Four Features</ButtonLink><ButtonLink href="/evidence" variant="navy">Explore the Evidence</ButtonLink></>} aside={<><span className="status-pill status-gold">Canonical definition</span><h3>Money people can count on.</h3><p>People may work, earn, build, save, care, and prosper above the floor.</p></>} />

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
      <h2>Hard questions deserve direct answers.</h2><p className="lede">Answer first. Evidence second. Nuance third. Deeper reading always available.</p>
      <div className="faq-list">{faqs.map(([q,a]) => <details key={String(q)}><summary>{q}</summary><div className="faq-answer">{a}</div></details>)}</div>
    </div></section>

    <CtaBand eyebrow="From policy to politics" title="A credible idea still needs candidates prepared to enact it." body="See the candidates, pressure campaigns, selection criteria, endorsements, and public record in one place." primary={<ButtonLink href="/candidates" variant="cream">See Candidates & Campaigns</ButtonLink>} secondary={<ButtonLink href="/evidence" variant="outline">Read the Evidence</ButtonLink>} />
  </PageShell>;
}
