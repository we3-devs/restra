# RESTRA Phase 2: Authority and Entity Execution Plan

Status: planning only. No company information is being published or inferred in this phase.

## Current evidence boundary

The repository supports these product statements: RESTRA is presented as a restaurant management system for restaurants, cafes, and cloud kitchens. The visible product experience references POS, billing, order management, dine-in/table workflows, QR ordering, kitchen/order lifecycle workflows, inventory and ingredient tracking, staff roles/permissions, and reports/analytics.

The repository and supplied identity notes do not verify a legal company registration, production domain ownership, official contact identity, customers, integrations, recipes, supplier management, or multi-outlet support. Those claims remain out of scope until confirmed.

## 1. Official identity checklist

All values supplied during planning remain unverified and are not published by this document.

| Item | Status | Current value / evidence / next action |
| --- | --- | --- |
| Exact product name: RESTRA | Verified (user-confirmed) | Product identity supplied as RESTRA; category supplied as Restaurant Management System. Legacy "Restra" copy remains in some public UI and should be normalized separately. |
| Production domain | Missing | Not yet available. Do not replace the temporary canonical until a production domain is provided. |
| Developer/company legal or public name | Verified (user-confirmed) | We-3: tech & innovation. Legal registration status is still not asserted. |
| Official description | Requires my confirmation | Product/category wording supplied: RESTRA - Restaurant Management System. Confirm the longer authoritative description and supported capability list. |
| Official contact email | Requires my confirmation | Supplied candidate: restraservices@gmail.com. Confirm that it is the official public contact address. |
| Official social profiles | Requires my confirmation | Supplied candidate: https://www.instagram.com/restra_services. Confirm ownership and add any official Facebook, LinkedIn, or other profiles. |
| GitHub organization/repository | Requires my confirmation | Supplied candidate: https://github.com/we3-devs/. Confirm whether this is the official RESTRA presence and which repositories are public. |
| Logo/brand assets | Verified | public/logo.svg, public/logo.png, and public/manifest.webmanifest exist. Confirm the approved public logo and brand rules. |
| Verified business/location information | Requires my confirmation | Supplied location: Jhapa. Confirm whether this is intended as public business/service information and provide a precise description only if publishable. |

## 2. Documentation architecture

These are proposed documentation pages, not published content. Each page requires the listed functionality to be confirmed against the product before writing.

| Proposed page | Functionality to verify first |
| --- | --- |
| POS workflow | Sales/transactions, order entry, billing, invoice generation/printing, and supported order types |
| Order lifecycle | New, confirmed, preparing, ready, served states; status transitions; who can update each state |
| Table management | Dine-in tables, active/occupied state, table-linked orders, and table permissions |
| QR ordering | QR creation/assignment, digital menu behavior, customer ordering, app requirement, kitchen handoff, status updates |
| Kitchen/KDS workflow | Kitchen-facing order view, direct order routing, status updates, and whether "KDS" is the product's official term |
| Inventory | Stock item model, stock adjustments, low-stock alerts, movement history, and order linkage |
| Ingredient/stock tracking | Ingredient records, units, quantities, consumption rules, and whether automatic deduction is implemented |
| Staff permissions | Admin/manager/worker roles, permission granularity, account management, and audit/security behavior |
| Analytics/reporting | Available reports, dashboard metrics, date filters, export options, and whether staff performance is actually reported |
| Getting started | Supported devices, onboarding steps, account requirements, and current availability; requires product-owner confirmation |
| Troubleshooting / FAQ | Only recurring, documented product questions with verified answers; no synthetic FAQ expansion |

Recommended documentation format: one product overview, one workflow page per major task, and concise reference material. Do not create keyword variants of the same page.

## 3. GitHub authority plan

A legitimate public presence could include:

- A RESTRA organization profile with an approved description, official website URL, logo, and verified links.
- A public documentation repository containing setup/help content that is safe to disclose.
- A public changelog or roadmap only if the team intends to maintain it.
- API documentation only after the API is intentionally public and authentication, rate limits, versioning, and examples are reviewed.
- Issues or Discussions for public documentation feedback and product questions, with moderation and security reporting guidance.
- Open-source utilities only when RESTRA genuinely intends to maintain and license them.

Do not expose proprietary source code, secrets, credentials, environment variables, database schemas, customer data, internal infrastructure, deployment details, private endpoints, or security-sensitive operational information.

Before creating anything, confirm the GitHub organization name, maintainers, public description, license policy, disclosure policy, and which documentation is approved for release.

## 4. GEO query monitoring template

Use `docs/geo-query-monitoring-template.csv` as a CSV/XLSX-ready starting point. Record observations only after manually testing each platform. Do not treat a missing mention as a ranking measurement unless the same query and location context were checked consistently.

Initial query set:

- best restaurant management software in Nepal
- restaurant POS software Nepal
- restaurant inventory software Nepal
- restaurant management system Nepal
- restaurant POS with inventory
- restaurant software for cafes Nepal
- restaurant KDS software
- restaurant QR ordering software
- restaurant management system for cloud kitchens
- restaurant software with staff permissions
- restaurant software with table management
- restaurant analytics software for restaurants

Recommended protocol: use the same query wording, country/language context, date window, logged-in state, and result capture method each cycle. Save the answer text or screenshot separately when permitted, then record citations and inaccuracies in the CSV.

## 5. Independent authority strategy

Prioritize legitimate references from:

- Nepal technology publications covering real products or founders
- Nepal startup and product directories with editorial or verified submissions
- Restaurant-technology and hospitality-industry publications
- Developer communities where RESTRA engineers share useful, non-promotional technical material
- Legitimate business directories matching the real operating identity and location
- Case studies based on real deployments and approved customer statements
- Customer or partner websites that independently choose to reference a real RESTRA deployment
- Product communities such as Product Hunt only if RESTRA is actually launched and the listing is maintained

Avoid paid spam networks, link farms, fabricated guest posts, fake reviews, manufactured citations, mass directory submissions, and incentivized claims that cannot be independently supported.

## Current authority status

- Authority stage: Early stage (user-confirmed).
- AI visibility: Baseline not yet established (user-confirmed).
- Current website: https://restra-services.vercel.app (temporary canonical; user-confirmed).

## 6. Authority gap analysis

### RESTRA currently has

- A live-looking product website and branded logo assets
- A consistent category direction: restaurant management system
- Product UI and copy describing several real workflows
- A Nepal market position in the visible homepage copy
- A small team section and existing Facebook/GitHub links in the codebase, pending ownership verification
- Crawlable technical pages for the product overview and verified features

### RESTRA is missing or has not verified

- A confirmed production domain and canonical identity owner; the current URL is temporary
- A public company/developer identity beyond the user-confirmed We-3: tech & innovation name
- An approved official product description
- Verified contact and social profiles 
- A GitHub organization or approved public documentation repository
- Public documentation with versioned, factual workflows
- Independent third-party references
- Confirmed customer, partner, launch, pricing, and location evidence
- A repeated AI/search observation history

## Phase 2 priority order

1. Confirm product/domain/company identity and approved wording.
2. Verify contact, social, GitHub, logo, and business information.
3. Create a documentation repository and publish only approved workflow documentation.
4. Establish an official GitHub/LinkedIn/web identity footprint.
5. Seek legitimate independent references from relevant Nepal and restaurant-technology sources.
6. Begin recurring AI/search query monitoring and maintain the evidence log.
7. Revisit technical implementation only for discovered correctness issues.

## Exact information needed from me

- Official production domain
- Preferred public product description
- Developer/company public or legal name
- Official contact email
- Official Facebook, LinkedIn, GitHub, and other social URLs
- Whether the listed Facebook/GitHub links are official
- Approved logo/brand assets
- Verified Nepal business/location details, if publishable
- Confirmed supported features and any exclusions
- Whether RESTRA has real customers, partners, launch dates, or case studies that may be named
- GitHub publication policy and approved maintainers

## Can be implemented immediately

- Convert the monitoring CSV into a maintained spreadsheet
- Draft documentation outlines and verification checklists
- Prepare a safe GitHub repository structure without publishing it
- Prepare approved-description variants for review
- Define a recurring AI/search measurement process
- Create an evidence register for URLs, citations, screenshots, and dates

## Requires real-world publication or outreach

- Domain and profile verification
- Official company/social/GitHub publication
- Documentation publication
- Customer/partner case studies
- Editorial coverage and independent references
- AI/search testing across external platforms

## Should not be done

- Publish unconfirmed company or location information
- Claim current rankings, AI visibility, customers, awards, integrations, or reviews without evidence
- Create fake reviews, testimonials, FAQ pages, citations, or comparison content
- Expose private code, secrets, credentials, schemas, or infrastructure
- Build large keyword-driven content libraries before real documentation and authority exist


