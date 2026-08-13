import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell } from "../site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Basically Income PAC about campaigns, candidates, research, media, events, strategic backing, or general questions.",
};

const contactPaths = [
  ["Campaigns and candidates", "Share a candidate statement, congressional bill, race, endorsement question, or political opportunity.", "Campaign%20or%20candidate%20inquiry", "Send Political Information"],
  ["Media and interviews", "Request comment, an interview, a guest, background information, or help locating a source.", "Media%20or%20interview%20request", "Contact the Media Desk"],
  ["Events and community", "Ask about the Basic Income Roundtable, the public calendar, Clubhouse, Discord, or a collaborative event.", "Event%20or%20community%20inquiry", "Discuss an Event"],
  ["Funding and briefings", "Request a substantive conversation about the political opportunity, operating model, and what added capacity enables.", "Strategic%20briefing%20request", "Request a Briefing"],
] as const;

export default function ContactPage() {
  return <PageShell>
    <PageHero
      eyebrow="Contact Basically Income PAC"
      title="Talk to a person building UBI politics."
      body="Send us the question, source, invitation, opportunity, or criticism. Clear messages reach the right part of our small team faster."
      actions={<><a className="button button-orange" href="mailto:contact@basicallyincome.org">Email contact@basicallyincome.org</a><ButtonLink href="/calendar" variant="navy">See the Calendar</ButtonLink></>}
      aside={<><h3>One public inbox</h3><p><a href="mailto:contact@basicallyincome.org"><b>contact@basicallyincome.org</b></a></p><p>Include a source link, deadline, organization, or congressional district when relevant.</p></>}
    />

    <section className="content-section"><div className="wide-shell">
      <h2>What would you like to discuss?</h2>
      <p className="lede">Choose a subject line below, or write directly. Every path reaches the same PAC inbox.</p>
      <div className="feature-grid">
        {contactPaths.map(([title, body, subject, label]) => <article className="info-card accent" key={title}><h3>{title}</h3><p>{body}</p><p><a href={`mailto:contact@basicallyincome.org?subject=${subject}`}><b>{label} →</b></a></p></article>)}
      </div>
    </div></section>

    <section className="content-section alt"><div className="content-shell prose-grid">
      <h2>Meet the community.</h2>
      <div className="prose"><p>Conversation also happens in public. Join the recurring Basic Income Roundtable, follow Basically Income PAC on Bluesky, or enter the Discord community.</p><p><a href="https://discord.com/invite/wEpZZYwufm" rel="noreferrer"><b>Discord →</b></a>&nbsp;&nbsp;&nbsp; <a href="https://bsky.app/profile/basicallyincome.org" rel="noreferrer"><b>Bluesky →</b></a>&nbsp;&nbsp;&nbsp; <a href="https://www.clubhouse.com/house/basically-income-pac-6pbvj5ds0kgs" rel="noreferrer"><b>Clubhouse →</b></a></p></div>
    </div></section>

    <CtaBand eyebrow="Prefer a direct route?" title="Write to contact@basicallyincome.org." body="A concise note with the relevant link, location, and deadline is enough to begin." primary={<a className="button button-cream" href="mailto:contact@basicallyincome.org">Start an Email</a>} secondary={<ButtonLink href="/about" variant="outline">About the PAC</ButtonLink>} />
  </PageShell>;
}
