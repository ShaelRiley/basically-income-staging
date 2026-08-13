import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

export const metadata: Metadata = {
  title: "Basic Income Bill Tracker",
  description: "Track federal basic-income legislation, sponsors, congressional actions, and bill status with Basically Income PAC.",
};

const plannedFields = [
  ["Bill", "Number, chamber, Congress, title, and authoritative congressional source."],
  ["Policy", "Who receives cash, how much, how often, and under what eligibility rules."],
  ["Movement", "Latest action, committee assignment, status, and material changes over time."],
  ["Support", "Sponsors and cosponsors, with party, state, and the date each member joined."],
  ["Assessment", "How closely the proposal resembles universal basic income, with transparent criteria."],
  ["Action", "Relevant opportunities for supporters to contact lawmakers or follow a hearing or vote."],
];

export default function BillTrackerPage() {
  return <PageShell>
    <PageHero
      eyebrow="Congressional accountability"
      title="The Basic Income Bill Tracker is coming online."
      body="This will be the public record of basic-income legislation in Congress: what each bill proposes, who supports it, where it stands, and what changes next."
      actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org?subject=Bill%20Tracker%20source">Submit a Bill or Source</a><ButtonLink href="/candidates" variant="navy">Track Candidate Positions</ButtonLink></>}
      aside={<><StatusPill tone="gold">Placeholder · Data build underway</StatusPill><h3>Accuracy before volume.</h3><p>We are establishing the source, classification, and update rules before publishing a live congressional dataset.</p></>}
    />

    <section className="content-section"><div className="wide-shell">
      <h2>Every tracked bill will answer six questions.</h2>
      <p className="lede">The tracker will distinguish verified legislative facts from the PAC’s policy assessment.</p>
      <div className="feature-grid three">
        {plannedFields.map(([title, body], index) => <article className="info-card accent" key={title}><span className="card-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
      <div className="notice-box"><b>Current status:</b> this page reserves the Bill Tracker’s permanent place in the site architecture. No bill entries or congressional metrics will appear until their source and update history can be shown.</div>
    </div></section>

    <CtaBand eyebrow="Help build the public record" title="Know of a federal basic-income bill we should track?" body="Send the official bill page, legislative text, or another authoritative source. Our team will verify and classify it before publication." primary={<a className="button button-cream" href="mailto:contact@basicallyincome.org?subject=Bill%20Tracker%20source">Submit a Source</a>} secondary={<ButtonLink href="/evidence" variant="outline">Explore the Evidence</ButtonLink>} />
  </PageShell>;
}
