import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Universal Basic Income Evidence", description: "Primary studies and public data on cash, work, poverty, health, family stability, and universal basic income." };

const findings = [
  {
    label: "WORK",
    title: "Universal cash did not reduce aggregate employment in Alaska.",
    body: "Researchers studying Alaska’s universal, permanent dividend found no significant effect on employment and a 1.8 percentage-point increase in part-time work. Their analysis also points to increased local demand as part of the labor-market effect.",
    note: "Annual dividend; not a full monthly UBI.",
    source: "NBER · Jones & Marinescu",
    href: "https://www.nber.org/papers/w24312",
  },
  {
    label: "FULL-TIME WORK",
    title: "Stockton recipients moved into full-time work faster.",
    body: "Full-time employment among $500-per-month recipients rose from 28% to 40% in one year. The control group rose from 32% to 37%. Interviews describe cash removing barriers to job search and risk-taking.",
    note: "Small guaranteed-income pilot; not universal.",
    source: "Stockton SEED · Employment findings",
    href: "https://www.stocktondemonstration.org/employment",
  },
  {
    label: "WORKER CHOICE",
    title: "A large U.S. study found a modest change—not work abandonment.",
    body: "Recipients of $1,000 per month worked 1.3 fewer hours per week and were 2 percentage points less likely to be employed on average. The same research found greater active job search and substantial variation across people.",
    note: "Three-year trial among lower-income adults; not permanent or universal.",
    source: "OpenResearch · Unconditional Cash Study",
    href: "https://www.openresearchlab.org/projects/unconditional-cash-study",
  },
  {
    label: "CHILD POVERTY",
    title: "Direct family support helped produce a record decline in child poverty.",
    body: "The Census Bureau reported that Supplemental Poverty Measure child poverty fell 46% in 2021, from 9.7% to 5.2%. The Child Tax Credit lifted 2.9 million children above poverty; its temporary expansion accounted for 2.1 million.",
    note: "A national, temporary tax credit—not UBI—but strong evidence that direct cash changes material outcomes.",
    source: "U.S. Census Bureau",
    href: "https://www.census.gov/library/stories/2022/09/record-drop-in-child-poverty.html",
  },
  {
    label: "HEALTH",
    title: "Canada’s Mincome experiment was associated with fewer hospitalizations.",
    body: "The original study reported an 8.5% reduction in hospitalization relative to comparison groups, especially for accidents, injuries, and mental health, along with more adolescents continuing through grade 12.",
    note: "A guaranteed annual income experiment. A later reanalysis disputes the hospital-cost conclusion, so this finding should not stand alone.",
    source: "Canadian Public Policy · Forget (2011)",
    href: "https://doi.org/10.3138/cpp.37.3.283",
  },
  {
    label: "POLICY SCALE",
    title: "When the expanded credit expired, child poverty rose again.",
    body: "Census reported child poverty rising from 5.2% in 2021 to 12.4% in 2022 after pandemic-era refundable tax-credit expansions and stimulus payments ended. Policy design and continuity matter.",
    note: "This comparison combines several policy changes and should not be attributed to one program alone.",
    source: "U.S. Census Bureau · 2022 SPM",
    href: "https://www.census.gov/library/stories/2023/09/supplemental-poverty-measure.html",
  },
];

const reading = [
  ["Cash does not abolish work. It improves the terms of work.", "Our essay connects the OpenResearch results, job search, worker agency, and automation.", "https://basicallyincome.org/blog/WhyElonWill"],
  ["Who Will Collect the Trash?", "A direct argument about bargaining power, hard jobs, wages, automation, and the desperation trap.", "https://basicallyincome.org/blog/WhoWillCollectTheTrash"],
  ["The Architecture of Belonging", "How an income floor could strengthen public life, third places, and community participation.", "https://basicallyincome.org/blog/ArchitectureOfBelonging"],
  ["Securing America’s Future", "Why universal income belongs in the political response to AI-driven economic change.", "https://basicallyincome.org/blog/SecuringAmericasFuture"],
];

export default function EvidencePage() {
  return <PageShell>
    <PageHero eyebrow="Evidence for an income floor" title="Cash works—and the details matter." body="The strongest honest case for basic income is not that every experiment proves every claim. It is that a large body of evidence shows cash improves material security, does not cause mass withdrawal from work, and gives people more power to navigate jobs, family, health, and risk." actions={<><ButtonLink href="#findings" variant="orange">Read the Findings</ButtonLink><ButtonLink href="/basic-income" variant="navy">Basic Income FAQ</ButtonLink></>} aside={<><StatusPill tone="navy">Evidence standard</StatusPill><h3>Supportive, sourced, and specific.</h3><p>We name the payment, population, duration, outcome, and limits—then link to the original source.</p></>} />

    <section className="content-section" id="findings"><div className="wide-shell">
      <h2>What the evidence already lets us say.</h2><p className="lede">These are primary studies and official public data, not slogans detached from their research designs.</p>
      <div className="evidence-grid">{findings.map((item) => <article className="evidence-card" key={item.title}><span className="card-number">{item.label}</span><h3>{item.title}</h3><p>{item.body}</p><p className="evidence-limit"><b>Scope:</b> {item.note}</p><a href={item.href} rel="noreferrer">Read {item.source} →</a></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid">
      <h2>Would people stop working?</h2>
      <div className="prose"><p className="prose-lead"><b>No. The evidence does not show mass work withdrawal.</b></p><p>Alaska found no significant employment decline. Stockton found a stronger move into full-time work among recipients. OpenResearch found a modest average reduction—1.3 hours a week—alongside more job search and wide variation.</p><p>That is a pro-UBI conclusion worth stating clearly: an income floor does not erase the desire or need to work. It gives people more room to search, care, train, recover, negotiate, and refuse the worst terms.</p><div className="quote-panel">The case is not “cash changes nothing.” The case is “cash changes who has choices.”</div><p>Unlike means-tested aid that phases out as earnings rise, a true UBI remains in place when a person takes a job or earns more. That design avoids one familiar work penalty.</p></div>
    </div></section>

    <section className="content-section"><div className="wide-shell">
      <h2>Deeper reading from Basically Income.</h2><p className="lede">Research answers one kind of question. These essays connect evidence to work, technology, community, and political choice.</p>
      <div className="feature-grid">{reading.map(([title, body, href]) => <article className="info-card" key={title}><h3>{title}</h3><p>{body}</p><p><a href={href} rel="noreferrer"><b>Read the essay →</b></a></p></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell">
      <h2>What remains a design question.</h2><p className="lede">Evidence supports basic income without settling every national-policy choice.</p>
      <div className="feature-grid"><article className="info-card"><h3>Amount and cadence</h3><p>How large should the floor be, how often should it arrive, and how should it adjust over time?</p></article><article className="info-card"><h3>Financing</h3><p>Which mix of taxes, dividends, and public assets produces a fair, durable net distribution?</p></article><article className="info-card"><h3>Program interaction</h3><p>Which supports must remain above the floor for disability, health, housing, and care needs?</p></article><article className="info-card"><h3>Supply constraints</h3><p>How should housing, health care, energy, and competition policy ensure greater income becomes greater real freedom?</p></article></div>
    </div></section>

    <CtaBand eyebrow="Evidence into politics" title="A policy can be well supported and still lack electoral power." body="See how we track candidate commitments, choose political openings, run pressure campaigns, and reward serious support." primary={<ButtonLink href="/candidates" variant="cream">See Candidates & Campaigns</ButtonLink>} secondary={<ButtonLink href="/blog" variant="outline">Read the Blog</ButtonLink>} />
  </PageShell>;
}
