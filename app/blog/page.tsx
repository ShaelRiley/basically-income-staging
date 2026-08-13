import type { Metadata } from "next";
import { PageShell } from "../site";

export const metadata: Metadata = { title: "Blog", description: "The latest essays and analysis from Basically Income PAC on universal basic income, work, AI, families, democracy, and political power." };

const posts = [
  ["6/29/2026", "Feudalism 2.0 or How Basic Income Returns the Leverage They Sold Out From Under You", "For decades, families could reliably secure a home and build generational stability. Today, the game has fundamentally changed.", "https://basicallyincome.org/blog/Feudalism20"],
  ["5/25/2026", "Why You, Larry Ellison, Will Support Basic Income", "The automated economy Oracle is helping build still needs customers—and a broad, stable base of purchasing power.", "https://basicallyincome.org/blog/WhyLarryEllison"],
  ["5/18/2026", "The Necessary Foundation of the Next Economy", "Precarity is not merely an outcome of the current system. It is one of its tools.", "https://basicallyincome.org/blog/TheNecessaryFoundation"],
  ["5/16/2026", "The Floor We Refuse to Build", "America is choosing between spending on a floor and spending on the consequences of not having one.", "https://basicallyincome.org/blog/TheFloorWeRefuseToBuild"],
  ["4/29/2026", "Why You, Jeff Bezos, Will Support Universal Basic Income", "The Amazon flywheel requires a broad consumer base with predictable purchasing power.", "https://basicallyincome.org/blog/WhyJeffWill"],
  ["4/20/2026", "Why You, Elon Musk, Will Support Universal Basic Income", "The question is whether automation’s productivity dividend becomes political and broadly shared.", "https://basicallyincome.org/blog/WhyElonWill"],
  ["4/19/2026", "Universal Basic Income Is the Solution to Exploding Tensions Between Employers and Employees", "A reliable floor changes the terms on which people enter and leave work.", "https://basicallyincome.org/blog/TheSolutionToExplodingTensions"],
  ["4/1/2026", "Respect for Caregivers: A Mother’s Day Sermon", "A case for recognizing the economic and human value created by caregivers and parents.", "https://basicallyincome.org/blog/AMothersDaySermon"],
  ["3/27/2026", "The Civic Miracle Realized", "How a generous UBI could broaden ownership and turn more Americans into economic participants and investors.", "https://basicallyincome.org/blog/TheCivicMiracleRealized"],
  ["3/24/2026", "The Fading Unipolar Moment", "Why an income floor can be part of American resilience as the global order changes.", "https://basicallyincome.org/blog/TheFadingUnipolarMoment"],
  ["3/20/2026", "The Discoverability Crisis", "Why being seen increasingly means paying—and what that does to culture, work, and public life.", "https://basicallyincome.org/blog/TheDiscoverabilityCrisis"],
  ["3/16/2026", "Why Business Owners Should Back Higher Taxes to Fund a Basic Income", "Basic income can stabilize consumer demand and reduce costly precarity throughout the economy.", "https://basicallyincome.org/blog/WhyBusinessOwnersShould"],
];

export default function BlogPage() {
  return <PageShell>
    <section className="blog-index-hero"><div className="content-shell"><p className="eyebrow">Basically Income PAC</p><h1>Our Blog</h1></div></section>
    <section className="content-section"><div className="content-shell">
      <div className="post-list">{posts.map(([date, title, excerpt, href]) => <article className="post-row" key={title}><div className="post-meta"><span>Blog post</span><time>{date}</time></div><div><h2>{title}</h2><p>{excerpt}</p><a href={href} rel="noreferrer">Read full post →</a></div></article>)}</div>
      <div className="archive-link"><a className="button button-navy" href="https://basicallyincome.org/blog" rel="noreferrer">View the Full Blog Archive</a></div>
    </div></section>
  </PageShell>;
}
