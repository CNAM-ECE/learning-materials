---
sidebar_position: 1
title: About these notes
description: Scope, intended audience and reading guide for the Research understanding section.
---

# About these notes

These notes are personal preparation material for the doctoral project *Certified Dynamic Reconfiguration of Time-Sensitive Networks: Online Admission Control under Worst-Case Determinism Guarantees* (LyRIDS, ECE × CEDRIC, Cnam). They collect, in a single place, the background in deterministic network calculus needed to read the TSN analysis literature and to follow the companion repository [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus).

## Organisation

The site has three parts, the first in two halves.

- **[Research understanding](/blog)** — thirty-eight posts grouped into six topics, meant to be read in this order: deterministic networks, network calculus, IEEE 802.1, IETF, TSN (including the TSN profiles) and SDN. The IEEE 802.1 topic covers how standards are amended and revised, the bridge and its control protocols (RSTP, MSTP, SPB, path control, MRP/MVRP, SRP); the TSN topic has one post per standard (802.1AS, CBS, TAS, 802.3br, 802.1Qbu, CQF, ATS, PSFP, FRER, stream reservation), and a profiles sub-section one post per profile (802.1BA, 802.1CM, IEC/IEEE 60802, 802.1DG).
  - **[Article notes](/article-notes)** — reading notes on the five articles kept in the repository's `ressource/` folder, split by TSN standard (802.1Q bridge, 802.1AS, 802.1Qav, 802.1Qbv, 802.3br/802.1Qbu, 802.1Qch/Qcr, 802.1Qci, 802.1CB, 802.1Qcc, network design, profiles, DetNet), with the figures of the articles. Each post on a standard links to its notes page.
- **[Doctoral training](/doctoral-training)** — the 2026–2027 doctoral training courses of the ED SMI school at Cnam, grouped by theme, with the course details and the notes taken in each session.
- **Reference** — material for consultation rather than reading: a [notation and results sheet](./notation.md), a [TSN glossary](./tsn-glossary.md), and an [annotated list of resources](./resources.md).

## Prerequisites

The posts assume familiarity with undergraduate real analysis (infimum, supremum, monotone functions) and with the basics of switched Ethernet. No prior exposure to queueing theory is required.

## Conventions

- Time is continuous, $t \in \mathbb{R}_{\ge 0}$; data is measured in bits.
- $[x]^+ = \max(x, 0)$.
- Rates are in bit/s, latencies in seconds unless stated otherwise; numerical examples use µs and Mbit/s.
- "Bound" always means a *worst-case* bound valid for every trajectory compatible with the stated arrival and service curves.

## Status

These are study notes, not a peer-reviewed text. Results are stated as found in the cited references; derivations are sketches. Corrections are welcome through the repository's issue tracker.
