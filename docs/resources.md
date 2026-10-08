---
sidebar_position: 4
title: Annotated resources
description: The lectures, articles and technical documents from which the learning path was prepared, with a short note on each.
---

# Annotated resources

## Lectures

| Resource | Note | Used in |
| --- | --- | --- |
| *Networks and Calculus*, Prof. Jean-Yves Le Boudec, EPFL School of Computer and Communication Sciences. [YouTube](https://www.youtube.com/watch?v=NpoqqPM4LYA) | Talk by one of the founders of the theory; suggested as an overview before Part I. | Posts 1, 8, 9 |
| *An Introduction to Network Calculus*, LCA2, EPFL. [YouTube](https://www.youtube.com/watch?v=ABQ327BTc_o) | Introductory lecture from the EPFL laboratory where the min-plus formulation was developed; suggested alongside the foundations posts. | Posts 2, 3 |
| *Network Calculus: Guaranteed performance analysis in networks*, LINCS seminar. [YouTube](https://www.youtube.com/watch?v=1funUBUL2II) | Seminar from the Paris LINCS laboratory; suggested alongside the bounds posts. | Posts 3, 5, 7, 8 |

## Articles and technical documents

| Resource | Note | Used in |
| --- | --- | --- |
| M. Boyer, R. Henia, "Designing a Resilient Time-Aware Shaper Configuration for TSN," Ethernet & IP @ Automotive Technology Day, 2025. [Slides](https://standards.ieee.org/wp-content/uploads/2025/10/D1_09_Marc-Boyer-TSN-reconfiguration.pdf) | Incremental TAS reconfiguration after permanent link faults (WPEx: window precedence exclusion, window enlargement, protective gating). | Posts 1, 9 |
| N. Sertbaş Bülbül, D. Ergenç, M. Fischer, "Towards SDN-based Dynamic Path Reconfiguration for Time Sensitive Networking," IEEE/IFIP NOMS 2022. [IEEE Xplore](https://ieeexplore.ieee.org/document/9789890) | MILP-based path (re)configuration by an SDN controller; compares never, periodic, threshold-triggered and systematic reconfiguration. | Posts 1, 9 |
| TSF Technology, "Migration vers TSN : guide pratique." [Link](https://tsf-technology.com/fr/ressources/guides-techniques/migration-tsn-guide-pratique) | Practitioner's guide (in French): key standards and a five-phase migration method ending with latency validation. | Posts 1, 9 |

## Textbooks

| Resource | Note |
| --- | --- |
| J.-Y. Le Boudec, P. Thiran, *Network Calculus: A Theory of Deterministic Queuing Systems for the Internet*, LNCS 2050, Springer, 2001. [Online edition](https://leboudec.github.io/netcal/) | The standard reference for the min-plus formulation; Chapter 1 contains the fundamental bounds. |
| A. Bouillard, M. Boyer, E. Le Corronc, *Deterministic Network Calculus: From Theory to Practical Implementation*, Wiley-ISTE, 2018. | Modern treatment with algorithms, FIFO and linear-programming analyses. |
| C.-S. Chang, *Performance Guarantees in Communication Networks*, Springer, 2000. | Includes the stochastic extension of the theory. |

## Software

| Tool | Note |
| --- | --- |
| [DiscoDNC](https://github.com/NetCal/DNC) | Java; feed-forward network analyses (TFA, SFA, PMOO). |
| [panco](https://github.com/anne-bou/panco) | Python; FIFO networks, including linear-programming analyses. |
| [Nancy](https://github.com/rzippo/nancy) | C#; min-plus operators on piecewise-affine curves. |
| [tsnkit](https://github.com/ChuanyuXue/tsnkit) | Python; 802.1Qbv scheduling algorithms and benchmarks. |
| [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus) | Companion repository: certified admission gate with incremental TFA. |
