# BasicallyIncome.org integration plan

The canonical Basically Income repository was not readable from the connected GitHub installation during this development pass. This plan therefore avoids assumptions about its framework, CMS, deployment provider, or content store. It defines the architectural boundaries the existing site should implement once repository access is available.

## Implementation principle

Preserve sound deployment, editing, analytics, donation, and content-publishing machinery. Replace the public information architecture and content model deliberately. Do not paste the prototype into the current homepage as one opaque component.

The redesign should enter the existing architecture through four layers:

1. **Design tokens:** color, typography, spacing, radii, borders, shadows, and status semantics.
2. **Shared primitives:** header, footer, buttons, status labels, section headings, page heroes, evidence cards, and calls to action.
3. **Content objects:** campaigns, races, candidates, position records, endorsements, support deployments, results, evidence items, articles, events, and work-log entries.
4. **Routes:** the public pages that query and compose those objects.

## Route map

| Route | Purpose | Priority |
|---|---|---|
| `/` | policy, current work, political mechanism, proof, and invitation | launch-critical |
| `/basic-income` | canonical definition and policy questions | launch-critical |
| `/campaigns` | active and archived interventions | launch-critical |
| `/take-action` | one current action plus governed alternatives | launch-critical |
| `/candidates` | sourced candidate-position tracker | launch-critical |
| `/strategy` | Leverage Loop and selection methods | launch-critical |
| `/results` | activity, outcomes, causal confidence, and work log | launch-critical |
| `/fund` | grassroots and recurring capacity case | launch-critical |
| `/fund/strategic-backing` | high-capacity due-diligence path | launch-critical |
| `/fund/brief` | canonical Strategic Backer Brief | first follow-up |
| `/evidence` | research map and editorial method | launch-critical |
| `/blog` | evidence reviews, explainers, political analysis, campaign updates, and interviews | launch-critical |
| `/about` | mission, people, Roundtable, and access | launch-critical |

Existing indexed URLs should redirect to the most specific equivalent. Evergreen evidence URLs should not contain dates. Campaign, candidate, endorsement, event, and article URLs should persist as historical records.

## Content schema

### Campaign

- id and slug
- title
- target candidate IDs
- race ID
- exact ask
- open and close dates
- public status
- action channels
- selection rationale
- update entries
- observed result
- causal-confidence label
- source references
- owner and review date

### Candidate

- id and slug
- full name
- office and geography
- race IDs
- biography and public links
- current UBI-position label
- position-record IDs
- campaign IDs
- endorsement IDs
- last reviewed

### Position record

- candidate ID
- characterization
- defining UBI features present or absent
- source URL and source type
- statement/publication date
- review date
- confidence
- change note

### Endorsement

- candidate and race IDs
- decision and date
- sourced commitment
- criteria assessment
- strategic rationale
- reservations
- disclosed support
- election update
- decision authority

### Result or work-log entry

- date
- related object IDs
- PAC input
- PAC output
- observed external outcome
- causal-confidence label
- source or verification note
- next decision

Schema fields may live in a CMS, database, Markdown frontmatter, repository data files, or a headless service. Preserve these semantic distinctions regardless of storage technology.

## Migration sequence

1. Record the current stack, deployment path, content store, forms, analytics, processor integrations, redirects, and editorial workflow.
2. Inventory every existing URL and assign keep, rewrite, merge, redirect, archive, or remove status.
3. Introduce design tokens and shared primitives without changing public routes.
4. Add the content schemas and migrate one exemplary campaign, candidate, endorsement, and evidence item.
5. Build the new routes against those objects.
6. Replace the homepage after the proof objects and action states are functional.
7. Connect ActBlue, email, event, press, candidate-response, correction, and briefing flows.
8. Add redirects, metadata, structured data, sitemap, robots rules, analytics events, and accessible error states.
9. Test mobile rendering, keyboard operation, performance, links, source accuracy, forms, donation returns, and stale-state behavior.
10. Launch with named owners and an update calendar.

## Architectural safeguards

- Candidate UBI position and PAC endorsement remain separate fields.
- Campaign status cannot be inferred from publication date alone.
- Closed campaigns automatically lose active action controls.
- No-position is never rendered as opposition.
- Gold is reserved for verified commitment or formal positive milestones.
- Orange indicates active pressure or an open action.
- Public metrics distinguish PAC activity, observed outcome, and causation.
- Contribution source context never creates donor earmarking or control.
- Every live political record carries an owner and review date.
- Evidence summaries carry sources, methods, limitations, authorship, and update dates.

## Prototype-to-production transfer

The current development checkpoint is a reference implementation for visual hierarchy, copy, and responsive behavior. Transfer it selectively:

- copy the token values into the current styling system;
- adapt primitives to the repository’s component conventions;
- reuse the optimized anime artwork in the project’s asset pipeline;
- port page copy into the current CMS or content format;
- rebuild lists and records from structured content rather than hard-coded markup;
- connect real signup, candidate-source, briefing, event, and donation systems;
- replace governed migration states only when verified data is ready.

Do not preserve prototype-specific framework code when the current repository already supplies equivalent routing, rendering, image optimization, or deployment capabilities.

## Definition of done

The integration is complete when a visitor can understand UBI, see current political work, inspect candidate and endorsement evidence, take one valid action, evaluate the PAC’s method, fund visible capacity, and return later to a current public record without encountering stale claims or fabricated momentum.
