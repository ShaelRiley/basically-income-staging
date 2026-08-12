import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = { title: "Blog", description: "Evidence reviews, policy explainers, political analysis, campaign updates, interviews, and institutional notes from Basically Income PAC." };

const types = [
  ["Evidence Review", "What a study or cash program can and cannot tell us about universal basic income."],
  ["Policy Explainer", "Clear definitions, mechanisms, financing choices, and implementation questions."],
  ["Political Analysis", "Candidates, races, coalitions, incentives, and the electoral development of UBI."],
  ["Campaign Update", "A dated operational report linked to a durable campaign record."],
  ["Interview & Roundtable", "Conversations with researchers, organizers, candidates, builders, and advocates."],
  ["Institutional Note", "Methods, roadmap, corrections, decisions, and lessons from building the PAC."],
];

export default function BlogPage() {
  return <PageShell>
    <PageHero eyebrow="Basically Income Blog" title="Ideas with a route into politics." body="The blog connects policy evidence, human stakes, candidate behavior, campaign strategy, and the institutional work required to make universal basic income consequential." actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Blog%20updates">Get New Posts</a><ButtonLink href="/evidence" variant="navy">Explore the Evidence</ButtonLink></>} aside={<><StatusPill tone="navy">Archive migration</StatusPill><h3>Keep the substance. Change the structure.</h3><p>Existing essays will be sourced, dated, classified, cross-linked, and given a clear next step.</p></>} />

    <section className="content-section"><div className="wide-shell">
      <h2>Six editorial forms. One institutional argument.</h2><p className="lede">Each form tells visitors what kind of claim they are reading and what standard it must meet.</p>
      <div className="feature-grid three">{types.map(([title,body]) => <article className="info-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="content-section alt"><div className="content-shell">
      <p className="eyebrow">Featured institutional note</p>
      <div className="campaign-placard"><StatusPill tone="gold">Strategy</StatusPill><h2 style={{marginTop: 22}}>Why basic income needs electoral infrastructure.</h2><p>Research can make UBI credible. Candidates still need constituencies, pressure, recognition, money, and attention when they act on it. Basically Income PAC exists to build that missing political layer.</p><div className="hero-actions"><ButtonLink href="/strategy" variant="navy">Read the Political Method</ButtonLink><ButtonLink href="/results" variant="orange">Inspect the Work</ButtonLink></div></div>
    </div></section>

    <section className="content-section"><div className="content-shell prose-grid"><h2>Editorial contract.</h2><div className="prose"><h3>Open with the claim</h3><p>Every post begins with a one-sentence thesis, three concise takeaways, author, publication and update dates, and a source or method note where relevant.</p><h3>Distinguish the evidence</h3><p>Readers should know whether a sentence is a definition, an organizational judgment, an empirical claim, or an institutional fact.</p><h3>End with the right next step</h3><p>An evidence review should lead to sources. A campaign update should lead to action. A candidate analysis should lead to the public record. A strategic note may lead to funding.</p><div className="quote-panel">The blog should deepen the institution, not become a chronological attic.</div></div></div></section>

    <section className="content-section alt"><div className="content-shell"><h2>Archive migration state</h2><p className="lede">The existing article archive is not yet accessible from this development environment. Posts will appear here after title, authorship, links, publication dates, sources, and current relevance are verified.</p><div className="notice-box"><b>No filler posts:</b> the new index will not fabricate a publication history or silently republish outdated claims. The live archive remains available on the current BasicallyIncome.org site during migration.</div></div></section>

    <CtaBand eyebrow="Publish into the political cycle" title="Create once. Distribute everywhere." body="Every strong post should produce a canonical web record, email, social assets, event material, and a relevant pathway into evidence, action, candidate accountability, or funding." primary={<ButtonLink href="/take-action" variant="cream">Take Action</ButtonLink>} secondary={<ButtonLink href="/fund" variant="outline">Fund the Editorial Capacity</ButtonLink>} />
  </PageShell>;
}
