import { ButtonLink, PageShell } from "./site";

export default function NotFound() {
  return <PageShell><section className="content-section"><div className="content-shell action-panel"><p className="eyebrow eyebrow-light">404 · Page not found</p><h2>This route is not part of the public record.</h2><p>The page may have moved during the redesign. Return to the institutional center or find the current political action.</p><div className="hero-actions"><ButtonLink href="/" variant="cream">Return Home</ButtonLink><ButtonLink href="/take-action" variant="outline">Take Action</ButtonLink></div></div></section></PageShell>;
}
