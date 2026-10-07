# Network Calculus Notes

Learning materials for the PhD *"Certified Dynamic Reconfiguration of Time-Sensitive Networks: Online Admission Control under Worst-Case Determinism Guarantees"* (LyRIDS, ECE × CEDRIC, Cnam), published as a [Docusaurus](https://github.com/facebook/docusaurus) site. Companion to [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus).

## Overview

Time-Sensitive Networking (TSN) guarantees worst-case latency only for a configuration that is fixed and verified offline. Reconfiguring such a network online, to admit new flows, migrate existing ones or recover from a link fault, requires a fast and sound argument that every admitted flow still meets its deadline. Deterministic network calculus provides that argument: from an upper envelope on what each flow may send (*arrival curve*) and a lower envelope on what each element guarantees (*service curve*), it derives delay and backlog bounds that hold for every admissible trajectory. These notes build the theory from the min-plus algebra up to its use as a certificate for TSN reconfiguration, in nine posts meant to be read in order.

## Repository structure

```
├── blog/                  # Learning path: nine posts (MDX, KaTeX), authors.yml, tags.yml
├── docs/                  # Reference: about, notation and results, TSN glossary, annotated resources
├── src/
│   ├── components/        # BoundsFigure (delay/backlog figure), HomepageFeatures
│   ├── css/               # Theme and KaTeX styles
│   └── pages/             # Home page
├── static/img/            # Logo, favicon, social card
├── docusaurus.config.ts   # Site configuration, remark-math and rehype-katex plugins
└── sidebars.ts            # Reference sidebar
```

## Content

| Part | Post | Topic |
|:---:|:---|:---|
| I | 1. Why deterministic guarantees? | Average versus worst case; why measurement cannot certify TSN |
| I | 2. Min-plus algebra | Cumulative functions, convolution, deconvolution, sub-additive closure |
| I | 3. Arrival curves | Token bucket, staircase, good arrival curves, greedy shapers |
| I | 4. Service curves | Min-plus and strict service curves, rate-latency, TAS window |
| II | 5. The three fundamental bounds | Delay, backlog, output arrival curve; worked example |
| II | 6. Concatenation | End-to-end service curve; pay bursts only once |
| II | 7. Aggregate multiplexing | Blind, FIFO, static-priority residual service; TFA vs. path-based analyses |
| III | 8. Network calculus for TSN | TAS, CBS, ATS, PSFP, FRER; analysis tools |
| III | 9. Dynamic reconfiguration | SDN path migration [3], resilient TAS schedules [4], certified admission gate |

The **Reference** section collects the notation sheet, a TSN glossary and an annotated list of the lectures and articles from which the posts were prepared [3–7].

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

1. J.-Y. Le Boudec, P. Thiran, *Network Calculus: A Theory of Deterministic Queuing Systems for the Internet*, LNCS 2050, Springer, 2001.
2. A. Bouillard, M. Boyer, E. Le Corronc, *Deterministic Network Calculus: From Theory to Practical Implementation*, Wiley-ISTE, 2018.
3. N. Sertbaş Bülbül, D. Ergenç, M. Fischer, "Towards SDN-based Dynamic Path Reconfiguration for Time Sensitive Networking," IEEE/IFIP NOMS 2022. [IEEE Xplore](https://ieeexplore.ieee.org/document/9789890)
4. M. Boyer, R. Henia, "Designing a Resilient Time-Aware Shaper Configuration for TSN," Ethernet & IP @ Automotive Technology Day, 2025. [Slides](https://standards.ieee.org/wp-content/uploads/2025/10/D1_09_Marc-Boyer-TSN-reconfiguration.pdf)
5. TSF Technology, "Migration vers TSN : guide pratique." [Link](https://tsf-technology.com/fr/ressources/guides-techniques/migration-tsn-guide-pratique)
6. Lectures: J.-Y. Le Boudec, *Networks and Calculus*, EPFL IC [YouTube](https://www.youtube.com/watch?v=NpoqqPM4LYA); LCA2 EPFL, *An Introduction to Network Calculus* [YouTube](https://www.youtube.com/watch?v=ABQ327BTc_o); LINCS, *Network Calculus: Guaranteed performance analysis in networks* [YouTube](https://www.youtube.com/watch?v=1funUBUL2II).
7. CNAM-ECE, *Certified Admission Control for TSN*. [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus)
