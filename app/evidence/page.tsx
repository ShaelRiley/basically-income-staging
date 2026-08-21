import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Universal Basic Income Evidence", description: "Primary studies, official evaluations, and systematic reviews on cash, work, poverty, wellbeing, and universal basic income." };

const findings = [
  {
    id: "work-alaska",
    label: "WORK · UNIVERSAL",
    title: "Alaska’s universal dividend did not reduce aggregate employment.",
    finding: "A universal, permanent cash dividend changed the mix of work without producing an aggregate employment decline.",
    study: "Jones & Marinescu, The Labor Market Impacts of Universal and Permanent Cash Transfers.",
    population: "Alaska residents compared with a synthetic control built from other U.S. states.",
    intervention: "The Alaska Permanent Fund Dividend, paid annually and universally to eligible residents since 1982.",
    duration: "Long-run state-level evidence after the dividend’s introduction.",
    result: "No significant effect on aggregate employment; part-time work increased by 1.8 percentage points.",
    limits: "The dividend is much smaller than a poverty-level UBI and arrives annually rather than monthly.",
    relevance: "It is the strongest long-running U.S. evidence on cash that is genuinely universal, unconditional, and permanent.",
    source: "NBER · Working Paper 24312",
    href: "https://www.nber.org/papers/w24312",
  },
  {
    id: "work-finland",
    label: "WORK · RANDOMIZED",
    title: "Finland found small employment effects and better perceived wellbeing.",
    finding: "Removing conditions and earnings penalties did not cause recipients to retreat from work, while recipients reported greater economic security and better mental wellbeing.",
    study: "Finland’s national basic-income experiment, evaluated by Kela and the Ministry of Social Affairs and Health.",
    population: "2,000 randomly selected unemployed people ages 25–58, compared with otherwise eligible unemployment-benefit recipients.",
    intervention: "€560 per month, tax-free and unconditional, paid for two years regardless of other income or job-search activity.",
    duration: "January 2017 through December 2018.",
    result: "Employment effects were small. In the prespecified second-year reference period, recipients accumulated about six more employment days; survey respondents reported better life satisfaction, economic wellbeing, and mental wellbeing.",
    limits: "The 2018 activation model complicated causal interpretation of second-year employment effects, and the sample was limited to unemployed benefit recipients rather than the whole population.",
    relevance: "A randomized national experiment shows that unconditionality can improve lived security without a large negative employment response.",
    source: "Finnish Government · Final evaluation summary",
    href: "https://valtioneuvosto.fi/en/-/1271139/perustulokokeilun-tulokset-tyollisyysvaikutukset-vahaisia-toimeentulo-ja-psyykkinen-terveys-koettiin-paremmaksi?languageId=en_US",
  },
  {
    id: "work-us-trial",
    label: "WORK · U.S. RCT",
    title: "A large U.S. trial found a moderate labor-supply response, not work abandonment.",
    finding: "Large temporary cash transfers can modestly reduce labor supply. That is a real effect to understand, not evidence that recipients simply stop working.",
    study: "Vivalt, Rhodes, Bartik, Broockman, Krause & Miller, The Employment Effects of a Guaranteed Income.",
    population: "1,000 lower-income adults received the large transfer; 2,000 control participants received $50 per month in two U.S. states.",
    intervention: "$1,000 per month unconditionally for three years.",
    duration: "Three years, beginning in 2020; NBER paper revised January 2026.",
    result: "The January 2026 revision reports a 4.1 percentage-point reduction in labor-force participation and a 1–2 hour-per-week reduction in work hours relative to controls.",
    limits: "The transfer was temporary, participants were lower-income adults rather than a universal population, and the experiment did not capture economy-wide demand effects that a universal program could create.",
    relevance: "The strongest pro-UBI argument should incorporate this result: cash can change how much people work at the margin without producing mass withdrawal from economic life.",
    source: "NBER · Working Paper 32719, revised January 2026",
    href: "https://www.nber.org/papers/w32719",
  },
  {
    id: "poverty-ctc",
    label: "POVERTY · NATIONAL CASH",
    title: "Direct family cash moved millions of children above the poverty line.",
    finding: "Cash policy can change material deprivation at national scale quickly and measurably.",
    study: "U.S. Census Bureau analysis of the 2021 Child Tax Credit and Supplemental Poverty Measure.",
    population: "U.S. children represented in the Current Population Survey Annual Social and Economic Supplement.",
    intervention: "The Child Tax Credit, including its temporary 2021 expansion and greater refundability.",
    duration: "Tax year 2021.",
    result: "The Child Tax Credit lifted 2.9 million children above the Supplemental Poverty Measure threshold; the 2021 expansion accounted for 2.1 million of them.",
    limits: "The Child Tax Credit was neither individual nor fully universal and should not be described as a UBI experiment.",
    relevance: "It is strong national evidence for the most direct mechanism behind basic income: giving households spendable cash reduces measured poverty.",
    source: "U.S. Census Bureau · SEHSD-WP2022-24",
    href: "https://www.census.gov/library/working-papers/2022/demo/SEHSD-wp2022-24.html",
  },
  {
    id: "synthesis-2024",
    label: "SYNTHESIS · 2024",
    title: "A systematic review finds real gains, alongside a still-maturing evidence base.",
    finding: "Across high-income-country experiments, guaranteed-income evidence is strongest for several material and wellbeing outcomes, but results vary by program design and study quality.",
    study: "Rizvi et al., Campbell Systematic Reviews (2024), systematic review and meta-analysis.",
    population: "27 studies covering 10 guaranteed-basic-income experiments in high-income countries.",
    intervention: "Regular, predictable, unconditional cash programs of several designs, compared with existing social-assistance systems.",
    duration: "Included experiments lasted one to five years.",
    result: "Two studies found reduced food insecurity; pooled evidence from two RCTs found lower self-rated mental distress; several studies found better life satisfaction or subjective financial wellbeing. Overall physical-health evidence was inconclusive.",
    limits: "The reviewers found substantial risk-of-bias concerns, heterogeneous interventions, and no included study reporting their prespecified official poverty-rate outcome.",
    relevance: "The synthesis supports a confident but discriminating case: unconditional cash can improve important outcomes, while no single pilot settles the design of a permanent national UBI.",
    source: "Campbell Systematic Reviews · open access",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11180702/",
  },
];

const reading = [
  ["Cash does not abolish work. It improves the terms of work.", "Our essay connects employment evidence, worker agency, and automation.", "https://basicallyincome.org/blog/WhyElonWill"],
  ["Who Will Collect the Trash?", "A direct argument about bargaining power, hard jobs, wages, automation, and the desperation trap.", "https://basicallyincome.org/blog/WhoWillCollectTheTrash"],
  ["The Architecture of Belonging", "How an income floor could strengthen public life, third places, and community participation.", "https://basicallyincome.org/blog/ArchitectureOfBelonging"],
  ["Securing America’s Future", "Why universal income belongs in the political response to AI-driven economic change.", "https://basicallyincome.org/blog/SecuringAmericasFuture"],
];

export default function EvidencePage() {
  return <PageShell>
    <PageHero eyebrow="Evidence for an income floor" title="The evidence is strong enough to act—and specific enough to read closely." body="Unconditional cash reliably changes material security. It does not produce mass withdrawal from work. Its effects on hours, wellbeing, health, education, and family life vary by payment, population, duration, and program design. We make the affirmative case without pretending every experiment is the same as a permanent national UBI." actions={<><ButtonLink href="#findings" variant="orange">Read the Findings</ButtonLink><ButtonLink href="/basic-income" variant="navy">Basic Income FAQ</ButtonLink></>} aside={<><StatusPill tone="navy">Evidence standard</StatusPill><h3>Answer first. Source next. Limits visible.</h3><p>Each finding names the population, intervention, duration, result, limitations, and relevance to UBI.</p></>} />

    <section className="content-section" id="findings"><div className="wide-shell">
      <h2>What the evidence lets us say now.</h2><p className="lede">Start with the finding. Open the study notes when you want the design, limits, and original source.</p>
      <div className="evidence-grid">{findings.map((item) => <article className="evidence-card" id={item.id} key={item.id}><span className="card-number">{item.label}</span><h3>{item.title}</h3><p>{item.finding}</p><details style={{ marginTop: 18 }}><summary style={{ cursor: "pointer", fontWeight: 850 }}>Read the evidence →</summary><div style={{ marginTop: 14 }}><p><b>Study:</b> {item.study}</p><p><b>Population:</b> {item.population}</p><p><b>Intervention:</b> {item.intervention}</p><p><b>Duration:</b> {item.duration}</p><p><b>Result:</b> {item.result}</p><p className="evidence-limit"><b>Limitations:</b> {item.limits}</p><p><b>Why it matters for UBI:</b> {item.relevance}</p></div></details><p><a href={item.href} rel="noreferrer"><b>Open {item.source} →</b></a></p></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid">
      <h2>Would people stop working?</h2>
      <div className="prose"><p className="prose-lead"><b>No. Unconditional cash does not make people simply abandon work.</b></p><p>Alaska’s universal permanent dividend did not reduce aggregate employment. Finland’s randomized experiment found small employment effects while recipients reported greater economic and mental wellbeing. The strongest recent U.S. randomized evidence does find a moderate labor-supply response: a 1–2 hour weekly reduction in work and a 4.1 percentage-point reduction in labor-force participation in the paper’s January 2026 revision.</p><p>That is the evidence-grounded pro-UBI conclusion: people continue to work, while some use greater income security to change how much they work. A true UBI also remains in place as earnings rise, avoiding the abrupt benefit cliffs that can punish additional work under means-tested programs.</p><div className="quote-panel">The relevant question is not whether cash changes choices. It is whether people should have more economic room to make those choices.</div><p><a href="#work-alaska"><b>Alaska →</b></a> · <a href="#work-finland"><b>Finland →</b></a> · <a href="#work-us-trial"><b>Large U.S. trial →</b></a></p></div>
    </div></section>

    <section className="content-section"><div className="wide-shell">
      <h2>Deeper reading from Basically Income.</h2><p className="lede">Research tells us what happened in particular designs. These essays connect that evidence to work, technology, community, and political choice.</p>
      <div className="feature-grid">{reading.map(([title, body, href]) => <article className="info-card" key={title}><h3>{title}</h3><p>{body}</p><p><a href={href} rel="noreferrer"><b>Read the essay →</b></a></p></article>)}</div>
    </div></section>

    <section className="content-section alt" id="design-questions"><div className="content-shell">
      <h2>What remains a design question.</h2><p className="lede">Supporting basic income does not require pretending every national-policy choice is already settled.</p>
      <div className="feature-grid"><article className="info-card"><h3>Amount and cadence</h3><p>How large should the floor be, how often should it arrive, and how should it adjust over time?</p></article><article className="info-card"><h3>Financing</h3><p>Which mix of taxes, dividends, and public assets produces a fair, durable net distribution?</p></article><article className="info-card"><h3>Program interaction</h3><p>Which supports must remain above the floor for disability, health, housing, and care needs?</p></article><article className="info-card"><h3>Supply constraints</h3><p>How should housing, health care, energy, and competition policy ensure greater income becomes greater real freedom?</p></article></div>
    </div></section>

    <CtaBand eyebrow="Evidence into politics" title="A policy can be well supported and still lack electoral power." body="See how we track candidate commitments, choose political openings, run pressure campaigns, and reward serious support." primary={<ButtonLink href="/candidates" variant="cream">See Candidates & Campaigns</ButtonLink>} secondary={<ButtonLink href="/blog" variant="outline">Read the Blog</ButtonLink>} />
  </PageShell>;
}
