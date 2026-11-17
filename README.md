# Network Calculus Notes

Learning materials for the PhD *"Certified Dynamic Reconfiguration of Time-Sensitive Networks: Online Admission Control under Worst-Case Determinism Guarantees"* (LyRIDS, ECE × CEDRIC, Cnam), published as a [Docusaurus](https://github.com/facebook/docusaurus) site. Companion to [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus).

## Overview

Time-Sensitive Networking (TSN) guarantees worst-case latency only for a configuration that is fixed and verified offline. Reconfiguring such a network online, to admit new flows, migrate existing ones or recover from a link fault, requires a fast and sound argument that every admitted flow still meets its deadline. Deterministic network calculus provides that argument: from an upper envelope on what each flow may send (*arrival curve*) and a lower envelope on what each element guarantees (*service curve*), it derives delay and backlog bounds that hold for every admissible trajectory. These notes build the theory from the min-plus algebra up to its use as a certificate for TSN reconfiguration grouped into six topics: deterministic networks, network calculus, IEEE 802.1, IETF, TSN and SDN.

## Repository structure

```
├── article/               # Survey article (LaTeX, IEEEtran journal), see below
├── blog/                  # Learning path: twenty-five posts (MDX, KaTeX), authors.yml, tags.yml
├── docs/                  # Reference: about, notation and results, TSN glossary, annotated resources
├── src/
│   ├── components/        # BoundsFigure, Diagram (SVG kit), figures/ (architecture diagrams), HomepageFeatures
│   ├── data/              # learningPath.ts: topics and post order of the blog sidebar
│   ├── theme/             # BlogSidebar/Content: sidebar grouped by topic instead of by year
│   ├── css/               # Theme and KaTeX styles
│   └── pages/             # Home page
├── static/img/            # Logo, favicon, social card
├── docusaurus.config.ts   # Site configuration, remark-math and rehype-katex plugins
└── sidebars.ts            # Reference sidebar
```

## Content

| Topic | Post | Content |
|:---|:---|:---|
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
| IEEE 802.1 | The IEEE 802.1Q bridge | Control and data planes, data-plane actions, forwarding process (802.1Q clause 8.6), topology layers |
| IETF | IETF DetNet | Charter, RFC 8655 sub-layers, node types, planes, DetNet over TSN |
| TSN | The TSN toolbox | Each TSN mechanism and the stage of the 802.1Q bridge it extends |
| TSN | IEEE 802.1AS | gPTP, grandmaster election, peer delay, synchronisation error in schedules |
| TSN | Credit-Based Shaper | Credit rules, AVB classes, limits of the 802.1BA formula |
| TSN | Time-Aware Shaper | Gates, GCL, guard band, scheduling models and lessons from 17 methods |
| TSN | Frame preemption | eMAC, pMAC and MAC Merge; guard band; what preemption does not change |
| TSN | Cyclic Queuing and Forwarding | PSFP and TAS jointly configured; cycle-time condition |
| TSN | Asynchronous Traffic Shaping | Per-stream token buckets, queue allocation rules, shaper-to-shaper segments |
| TSN | Per-Stream Filtering and Policing | Stream identification, filter, gate, MEF 10.3 meter |
| TSN | Frame Replication and Elimination | FRER functions, recovery algorithms, burst after merging |
| TSN | Stream reservation | SRP, RAP, information for local bounds, the per-class bound |
| TSN | Network calculus for TSN shapers | TAS, CBS, ATS, PSFP, FRER; analysis tools |
| SDN | SDN and TSN configuration | SDN planes, 802.1Qcc models, what the CNC computes, central versus decentralised |
| SDN | Dynamic reconfiguration | SDN path migration [3], resilient TAS schedules [4], certified admission gate |

The sidebar of the learning path is grouped by these topics; the grouping and the order of posts are defined in `src/data/learningPath.ts`. The posts on standards open with an architecture diagram, and every figure names its source. Images reproduced from Wikimedia Commons are stored in `static/img/commons` and credited with author and licence through the `CommonsFigure` component.

The **Reference** section collects the notation sheet, a TSN glossary and an annotated list of the lectures and articles from which the posts were prepared [3–7].

## Article

The survey traces TSN from Audio Video Bridging to the current IEEE 802.1 standards, introduces deterministic network calculus, and reviews its use to bound delay and backlog under the main TSN mechanisms (CBS, TAS, ATS, frame preemption, CQF), including the integration with DetNet and wireless/5G. The draft of a survey is written in the IEEEtran journal format for *IEEE Communications Surveys & Tutorials*:

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

The build fails on broken internal links (`onBrokenLinks: 'throw'`), so a successful build also checks cross-references between posts. A GitHub Actions workflow (`.github/workflows/deploy.yml`) publishes `build/` to GitHub Pages on every push to `main`; it requires *Settings → Pages → Source: GitHub Actions*.

## References

1. J.-Y. Le Boudec, P. Thiran, *Network Calculus: A Theory of Deterministic Queuing Systems for the Internet*, LNCS 2050, Springer, 2001. [Online edition](https://leboudec.github.io/netcal/)
2. A. Bouillard, M. Boyer, E. Le Corronc, *Deterministic Network Calculus: From Theory to Practical Implementation*, Wiley-ISTE, 2018.
3. N. Sertbaş Bülbül, D. Ergenç, M. Fischer, "Towards SDN-based Dynamic Path Reconfiguration for Time Sensitive Networking," IEEE/IFIP NOMS 2022. [IEEE Xplore](https://ieeexplore.ieee.org/document/9789890)
4. M. Boyer, R. Henia, "Designing a Resilient Time-Aware Shaper Configuration for TSN," Ethernet & IP @ Automotive Technology Day, 2025. [Slides](https://standards.ieee.org/wp-content/uploads/2025/10/D1_09_Marc-Boyer-TSN-reconfiguration.pdf)
5. TSF Technology, "Migration vers TSN : guide pratique." [Link](https://tsf-technology.com/fr/ressources/guides-techniques/migration-tsn-guide-pratique)
6. Lectures: J.-Y. Le Boudec, *Networks and Calculus*, EPFL IC [YouTube](https://www.youtube.com/watch?v=NpoqqPM4LYA); LCA2 EPFL, *An Introduction to Network Calculus* [YouTube](https://www.youtube.com/watch?v=ABQ327BTc_o); LINCS, *Network Calculus: Guaranteed performance analysis in networks* [YouTube](https://www.youtube.com/watch?v=1funUBUL2II).
7. CNAM-ECE, *Certified Admission Control for TSN*. [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus)
