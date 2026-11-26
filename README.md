# Network Calculus Notes

Learning materials for the PhD *"Certified Dynamic Reconfiguration of Time-Sensitive Networks: Online Admission Control under Worst-Case Determinism Guarantees"* (LyRIDS, ECE × CEDRIC, Cnam), published as a [Docusaurus](https://github.com/facebook/docusaurus) site. Companion to [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus).

## Overview

Time-Sensitive Networking (TSN) guarantees worst-case latency only for a configuration that is fixed and verified offline. Reconfiguring such a network online, to admit new flows, migrate existing ones or recover from a link fault, requires a fast and sound argument that every admitted flow still meets its deadline. Deterministic network calculus provides that argument: from an upper envelope on what each flow may send (*arrival curve*) and a lower envelope on what each element guarantees (*service curve*), it derives delay and backlog bounds that hold for every admissible trajectory. These notes build the theory from the min-plus algebra up to its use as a certificate for TSN reconfiguration grouped into six topics: deterministic networks, network calculus, IEEE 802.1, IETF, TSN and SDN.

## Repository structure

```
├── article/               # Survey article (LaTeX, IEEEtran journal), see below
├── article-notes/         # Article notes: reading notes on ressource/, one page per TSN standard
├── blog/                  # Research understanding: thirty-eight posts (MDX, KaTeX), authors.yml, tags.yml
├── doctoral-training/     # Doctoral training: catalogue, one page per course, session notes
├── docs/                  # Reference: about, notation and results, TSN glossary, annotated resources
├── ressource/             # The articles read for the article notes (PDF, with highlights)
├── src/
│   ├── components/        # BoundsFigure, Diagram (SVG kit), figures/ (architecture diagrams), HomepageFeatures
│   ├── data/              # researchUnderstanding.ts: topics and post order of the blog sidebar
│   ├── theme/             # BlogSidebar/Content: sidebar grouped by topic instead of by year
│   ├── css/               # Theme and KaTeX styles
│   └── pages/             # Home page
├── static/img/            # Logo, favicon, social card, sources/ (cropped figures), doctoral-training/ (note scans)
├── docusaurus.config.ts   # Site configuration: blog, three docs instances, remark-math and rehype-katex
├── sidebars.ts            # Reference sidebar
├── sidebarsArticleNotes.ts      # Article notes sidebar, grouped by TSN pillar
└── sidebarsDoctoralTraining.ts  # Doctoral training sidebar, grouped by theme
```

## Sections

| Section | Route | Content |
|:---|:---|:---|
| Research understanding | `/blog` | Thirty-eight posts in six topics, listed below |
| Article notes | `/article-notes` | Notes on the four articles in `ressource/`, split by standard: 802.1Q bridge and toolbox, 802.1AS, 802.1Qav, 802.1Qbv, 802.3br/802.1Qbu, 802.1Qch/Qcr, 802.1Qci, 802.1CB, 802.1Qcc, profiles, DetNet |
| Doctoral training | `/doctoral-training` | The thirteen 2026–2027 ED SMI courses grouped by theme, hours, and session notes (research ethics so far) |
| Reference | `/reference` | Notation, abbreviations, TSN glossary, annotated resources |

## Research understanding

| Topic | Post | Content |
|:---|:---|:---|
| Deterministic networks | Determinism: from OSI and TCP/IP to TSN | Determinism, the seven OSI and four TCP/IP layers, why Ethernet is best effort, IT/OT convergence, what TSN adds |
| Deterministic networks | Why deterministic guarantees? | Average versus worst case; why measurement cannot certify TSN |
| Deterministic networks | Deterministic networking | Deterministic service, requirements, the three techniques, what each layer provides, IntServ and DiffServ, SDN |
| Network calculus | Min-plus algebra | Cumulative functions, convolution, deconvolution, sub-additive closure |
| Network calculus | Arrival curves | Token bucket, staircase, good arrival curves, greedy shapers |
| Network calculus | Service curves | Min-plus and strict service curves, rate-latency, TAS window |
| Network calculus | The three fundamental bounds | Delay, backlog, output arrival curve; worked example |
| Network calculus | Concatenation | End-to-end service curve; pay bursts only once |
| Network calculus | Aggregate multiplexing | Blind, FIFO, static-priority residual service; TFA vs. path-based analyses |
| Network calculus | ATM and MPLS | GCRA as an arrival curve, VBR worked example, LSPs and aggregates, then and now |
| IEEE 802.1 | IEEE 802.1 and the TSN task group | Organisation, AVB to TSN, naming rules, tiers of standards, process |
| IEEE 802.1 | Base standards, amendments and revisions | Kinds of projects, development process, 802.1Q editions and roll-ups, maintenance, grouping |
| IEEE 802.1 | The IEEE 802.1Q bridge | Control and data planes, data-plane actions, forwarding process (802.1Q clause 8.6), topology layers |
| IEEE 802.1 | RSTP | Spanning tree, port roles and states, proposal/agreement, what reconvergence means for bounds |
| IEEE 802.1 | MSTP | MST regions and instances, one BPDU with an MD5 digest, a region seen as one bridge |
| IEEE 802.1 | SPB (802.1aq) | IS-IS link state, SPBV and SPBM, equal-cost trees, failure recovery |
| IEEE 802.1 | Path control (802.1Qca) | Explicit trees, PCE and PCA, five control modes, disjoint paths for FRER |
| IEEE 802.1 | MRP and MVRP | Declarations and registrations, VLAN registration, MMRP and MSRP |
| IEEE 802.1 | SRP (802.1Qat) | Talker advertise and listener ready, advertise fields, AVB domains |
| IETF | IETF DetNet | Charter, RFC 8655 sub-layers, node types, planes, DetNet over TSN |
| TSN | The TSN toolbox | Each TSN mechanism and the stage of the 802.1Q bridge it extends |
| TSN | IEEE 802.1AS | gPTP, grandmaster election, peer delay, synchronisation error in schedules |
| TSN | Credit-Based Shaper | Credit rules, AVB classes, limits of the 802.1BA formula |
| TSN | Time-Aware Shaper | Gates, GCL, guard band, scheduling models and lessons from 17 methods |
| TSN | IEEE 802.3br | MAC Merge sublayer, verification, mPacket formats, hold and release |
| TSN | IEEE 802.1Qbu | Express and preemptable status per class, preemption with scheduled traffic, worst-case blocking |
| TSN | Cyclic Queuing and Forwarding | PSFP and TAS jointly configured; cycle-time condition |
| TSN | Asynchronous Traffic Shaping | Per-stream token buckets, queue allocation rules, shaper-to-shaper segments |
| TSN | Per-Stream Filtering and Policing | Stream identification, filter, gate, MEF 10.3 meter |
| TSN | Frame Replication and Elimination | FRER functions, recovery algorithms, burst after merging |
| TSN | Stream reservation | SRP, RAP, information for local bounds, the per-class bound |
| TSN | Network calculus for TSN shapers | TAS, CBS, ATS, PSFP, FRER; analysis tools |
| TSN (profiles) | IEEE 802.1BA | What a profile is; AVB goals, base standards and plug-and-play operation |
| TSN (profiles) | IEEE 802.1CM | Fronthaul, functional splits, Profiles A and B |
| TSN profiles | IEC/IEEE 60802 | Industrial requirements, IA-station, conformance classes, common resource management |
| TSN (profiles) | IEEE 802.1DG | Automotive PHYs, what TSN brings to vehicles, how the profile was written |
| SDN | SDN and TSN configuration | SDN planes, 802.1Qcc models, what the CNC computes, central versus decentralised |
| SDN | Dynamic reconfiguration | SDN path migration [3], resilient TAS schedules [4], certified admission gate |

The **Reference** section collects the notation sheet, a TSN glossary and an annotated list of the lectures and articles from which the posts were prepared [3–7].

## Article

The survey traces TSN from Audio Video Bridging to the current IEEE 802.1 standards, introduces deterministic network calculus, and reviews its use to bound delay and backlog under the main TSN mechanisms (CBS, TAS, ATS, frame preemption, CQF), including the integration with wirelined DetNet. The draft of a survey is formulated with research questions and paper understandings in [Excel literature review](https://docs.google.com/spreadsheets/d/1jbG-N9UpTw_vmJzJUMY6U7wN4mEwk8g2QfGTYSZxOZc/edit?gid=442894160#gid=442894160). The ressources are then written in the details of the IEEEtran journal format for *IEEE Communications Surveys & Tutorials*:

```
article/
├── tsn-network-calculus-survey.tex   # Manuscript
├── Reference.bib                     # BibTeX database (IEEEtran style)
├── IEEEtran.cls                      # IEEE document class
└── figures/
    ├── architecture/                 # Architecture diagrams
    ├── authors/                      # Biography photos (1 in × 1.25 in)
    └── logo/                         # ORCID icon
```

Build the PDF with a TeX Live or TinyTeX installation (`latexmk` runs `pdflatex` and `bibtex` as needed):

```bash
cd article
latexmk -pdf tsn-network-calculus-survey.tex
latexmk -c           # remove auxiliary files, keep the PDF
```

## Reproduction

Requires Node.js ≥ 22 and [pnpm](https://pnpm.io). The pnpm version is pinned by the `packageManager` field of `package.json`; with Corepack enabled (`corepack enable`), that exact version is used automatically. Installing with npm or Yarn is rejected by a `preinstall` check.

```bash
pnpm install
pnpm start           # development server at http://localhost:3000/learning-materials/
pnpm build           # static site in build/
pnpm serve           # serve the production build
pnpm typecheck       # TypeScript check of config and components
```

## References

1. J.-Y. Le Boudec, P. Thiran, *Network Calculus: A Theory of Deterministic Queuing Systems for the Internet*, LNCS 2050, Springer, 2001. [Online edition](https://leboudec.github.io/netcal/)
2. A. Bouillard, M. Boyer, E. Le Corronc, *Deterministic Network Calculus: From Theory to Practical Implementation*, Wiley-ISTE, 2018.
3. N. Sertbaş Bülbül, D. Ergenç, M. Fischer, "Towards SDN-based Dynamic Path Reconfiguration for Time Sensitive Networking," IEEE/IFIP NOMS 2022. [IEEE Xplore](https://ieeexplore.ieee.org/document/9789890)
4. M. Boyer, R. Henia, "Designing a Resilient Time-Aware Shaper Configuration for TSN," Ethernet & IP @ Automotive Technology Day, 2025. [Slides](https://standards.ieee.org/wp-content/uploads/2025/10/D1_09_Marc-Boyer-TSN-reconfiguration.pdf)
5. TSF Technology, "Migration vers TSN : guide pratique." [Link](https://tsf-technology.com/fr/ressources/guides-techniques/migration-tsn-guide-pratique)
6. Lectures: J.-Y. Le Boudec, *Networks and Calculus*, EPFL IC [YouTube](https://www.youtube.com/watch?v=NpoqqPM4LYA); LCA2 EPFL, *An Introduction to Network Calculus* [YouTube](https://www.youtube.com/watch?v=ABQ327BTc_o); LINCS, *Network Calculus: Guaranteed performance analysis in networks* [YouTube](https://www.youtube.com/watch?v=1funUBUL2II).
7. CNAM-ECE, *Certified Admission Control for TSN*. [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus)
