import type { Metadata } from "next";
import { ButtonLink, CtaBand, PageHero, PageShell, StatusPill } from "../site";

const roundtableUrl = "https://www.clubhouse.com/house/basically-income-pac-6pbvj5ds0kgs?chs=2d3SrJLnjz%3AV1x9aKIkeHg5NhHmUJvgC1H0IOHSAz8LP_kMd4UbeEE&utm_medium=ch_house_settings";
const womenUrl = "https://www.clubhouse.com/i/women-for-universal-income/P0FPgkk6";
const discordUrl = "https://discord.gg/wEpZZYwufm";
const blueskyUrl = "https://bsky.app/profile/basicallyincome.org";

export const metadata: Metadata = {
  title: "Education and Outreach",
  description: "Join Basically Income PAC's weekly Clubhouse events, mailing list, Discord community, and Bluesky conversation.",
};

export default function OutreachPage() {
  return <PageShell>
    <PageHero
      eyebrow="Education & outreach"
      title="Learn together. Talk together. Build a UBI constituency."
      body="Electoral work depends on a public that understands basic income, can discuss it seriously, and knows where to gather. These recurring channels keep that constituency informed and connected."
      actions={<><ButtonLink href={roundtableUrl} variant="orange" external>Join Us on Clubhouse</ButtonLink><a className="button button-navy" href="mailto:contact@basicallyincome.org?subject=Join%20the%20weekly%20mailing%20list">Join the Mailing List</a></>}
      aside={<><StatusPill tone="orange">Every week</StatusPill><h3>Multiple ways to participate.</h3><p>Join a live conversation, receive the weekly email, or stay connected between events through Discord and Bluesky.</p></>}
    />

    <section className="content-section"><div className="wide-shell">
      <h2>Weekly live conversations on Clubhouse</h2>
      <p className="lede">Two recurring rooms create space for policy education, political analysis, new voices, and community.</p>
      <div className="feature-grid">
        <article className="info-card accent">
          <span className="card-number">WEEKLY · SATURDAY</span>
          <h3>Basic Income Roundtable</h3>
          <p>Our long-running public forum for researchers, advocates, candidates, builders, and curious citizens. Saturdays at 11 a.m. Eastern, 10 Central, 9 Mountain, and 8 Pacific.</p>
          <p><a href={roundtableUrl} rel="noreferrer"><b>Visit the Basically Income PAC Clubhouse →</b></a></p>
        </article>
        <article className="info-card accent">
          <span className="card-number">WEEKLY</span>
          <h3>Women for Universal Income</h3>
          <p>A weekly Clubhouse conversation elevating women’s perspectives, leadership, lived experience, and policy insight within the movement for universal basic income.</p>
          <p><a href={womenUrl} rel="noreferrer"><b>Open Women for Universal Income →</b></a></p>
        </article>
      </div>
    </div></section>

    <section className="content-section alt"><div className="wide-shell">
      <h2>Stay connected between events</h2>
      <p className="lede">Choose the cadence and format that work for you. Each channel serves a different role.</p>
      <div className="feature-grid three">
        <article className="info-card"><span className="card-number">WEEKLY BRIEFING</span><h3>Mailing list</h3><p>Receive one weekly mailing with campaign actions, PAC news, event invitations, candidate developments, and new basic-income material.</p><p><a href="mailto:contact@basicallyincome.org?subject=Join%20the%20weekly%20mailing%20list"><b>Join the weekly mailing list →</b></a></p></article>
        <article className="info-card"><span className="card-number">ONGOING COMMUNITY</span><h3>Discord</h3><p>Continue the conversation, exchange sources, meet other supporters, and stay connected between public events.</p><p><a href={discordUrl} rel="noreferrer"><b>Join the Discord →</b></a></p></article>
        <article className="info-card"><span className="card-number">PUBLIC CONVERSATION</span><h3>Bluesky</h3><p>Follow Basically Income PAC for public commentary, campaign updates, event notices, and shareable basic-income arguments.</p><p><a href={blueskyUrl} rel="noreferrer"><b>Follow us on Bluesky →</b></a></p></article>
      </div>
    </div></section>

    <section className="content-section"><div className="content-shell prose-grid">
      <h2>Why outreach belongs inside the political engine.</h2>
      <div className="prose"><p>Candidate pressure is more persuasive when it comes from an informed, visible, and persistent constituency. Education helps people understand the proposal. Community helps them remain involved. Outreach turns that understanding into repeat participation.</p><div className="quote-panel">The website is the institutional center. These channels are where the institution speaks, listens, teaches, and grows.</div></div>
    </div></section>

    <CtaBand eyebrow="Start with one channel" title="Join the conversation this week." body="Attend a live room, receive the weekly mailing, or enter the ongoing community. Every durable political constituency begins with repeated contact." primary={<ButtonLink href={roundtableUrl} variant="cream" external>Open Clubhouse</ButtonLink>} secondary={<ButtonLink href="/calendar" variant="outline">View the Calendar</ButtonLink>} />
  </PageShell>;
}
