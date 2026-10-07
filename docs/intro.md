---
sidebar_position: 1
title: About these notes
description: Scope, intended audience and reading guide for the network calculus learning path.
---

# About these notes

These notes are personal preparation material for the doctoral project *Certified Dynamic Reconfiguration of Time-Sensitive Networks: Online Admission Control under Worst-Case Determinism Guarantees* (LyRIDS, ECE × CEDRIC, Cnam). They collect, in a single place, the background in deterministic network calculus needed to read the TSN analysis literature and to follow the companion repository [CNAM-ECE/network-calculus](https://github.com/CNAM-ECE/network-calculus).

## Organisation

The site has two parts.

- **[Learning path](/blog)** — nine posts meant to be read in order. Each post states definitions, derives the main result, gives a numerical example and ends with references and recommended viewing.
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
