---
id: index
slug: /
title: Article notes
sidebar_label: Overview
description: Reading notes on the four articles of the ressource folder, split by TSN standard, with the figures of each article and links to the matching posts.
---

# Article notes

Reading notes on the four articles kept in the repository's [`ressource/`](https://github.com/CNAM-ECE/learning-materials/tree/main/ressource) folder. Each article covers several standards, so the notes are **split by standard** rather than by article: every page collects what the articles say about one standard, with their figures, and links to the [Research understanding](/blog) post on the same standard. The pages follow the four pillars of the TSN toolbox (timing, bounded latency, reliability, resource management), then the profiles and DetNet.

## The articles

| Key | Article | Kind | What it is used for here |
| --- | --- | --- | --- |
| **[LS19]** | L. Lo Bello, W. Steiner, "A Perspective on IEEE Time-Sensitive Networking for Industrial Communication and Automation Systems," *Proceedings of the IEEE*, vol. 107, no. 6, pp. 1094–1120, 2019. [DOI](https://doi.org/10.1109/JPROC.2019.2905334) · file `tsn for automation.pdf` | Survey | The main source: one section per core standard (AS, Qbv, Qbu/3br, Qci, CB, Qcc), each with an open-issues part, and the industrial and automotive use cases |
| **[YSH19]** | X. Yang, D. Scholz, M. Helm, "Deterministic Networking (DetNet) vs Time Sensitive Networking (TSN)," Seminar IITM SS 19, TU Munich, 2019. [DOI](https://doi.org/10.2313/NET-2019-10-1_15) · file `desnet vs tsn.pdf` | Seminar paper | A short comparison of TSN and DetNet, with the TSN timing model, a CBS flowchart and FRER figures |
| **[XZZ23]** | C. Xue, T. Zhang, Y. Zhou, M. Nixon, A. Loveless, S. Han, "Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A Systematic Review and Experimental Study," arXiv:2305.16772, 2023. [arXiv](https://arxiv.org/abs/2305.16772) · file `tsn survey.pdf` | Review and experiments | Network, traffic and scheduling models for TAS, 17 methods compared, and testbed measurements |
| **[RFC8655]** | N. Finn, P. Thubert, B. Varga, J. Farkas, *Deterministic Networking Architecture*, RFC 8655, IETF, 2019. [RFC Editor](https://www.rfc-editor.org/rfc/rfc8655) · file `deterministic networking architecture.pdf` | Standard (RFC) | DetNet terminology, sub-layers and the relation to TSN sub-networks |

## Standards and where they are covered

| Pillar | Standard | Notes page | Sources | Post |
| --- | --- | --- | --- | --- |
| Foundations | IEEE 802.1Q bridge, frame format, TSN toolbox | [802.1Q bridge](./ieee-802-1q-bridge.mdx) | LS19 §II–III, YSH19 §4 | [Bridge](/blog/ieee-802-1q-bridge), [Toolbox](/blog/tsn-toolbox) |
| Timing | IEEE 802.1AS (gPTP) | [802.1AS](./ieee-802-1as.mdx) | LS19 §IV-A, YSH19 §4.2, XZZ23 §II-A | [802.1AS](/blog/ieee-802-1as-time-synchronization) |
| Bounded latency | IEEE 802.1Qav (CBS) | [802.1Qav](./ieee-802-1qav.mdx) | YSH19 §4.1, LS19 §IV-C | [CBS](/blog/credit-based-shaper) |
| Bounded latency | IEEE 802.1Qbv (TAS) | [802.1Qbv](./ieee-802-1qbv.mdx) | LS19 §IV-B, XZZ23 §II–VII | [TAS](/blog/time-aware-shaper) |
| Bounded latency | IEEE 802.3br and 802.1Qbu (preemption) | [Preemption](./ieee-802-1qbu-802-3br.mdx) | LS19 §IV-C, YSH19 §4.1 | [802.3br](/blog/ieee-802-3br-interspersing-express-traffic), [802.1Qbu](/blog/ieee-802-1qbu-frame-preemption) |
| Bounded latency | IEEE 802.1Qch (CQF) and 802.1Qcr (ATS) | [Qch and Qcr](./ieee-802-1qch-qcr.mdx) | LS19 §IV-D, §IV-G | [CQF](/blog/cyclic-queuing-and-forwarding), [ATS](/blog/asynchronous-traffic-shaping) |
| Reliability | IEEE 802.1Qci (PSFP) | [802.1Qci](./ieee-802-1qci.mdx) | LS19 §IV-D | [PSFP](/blog/per-stream-filtering-and-policing) |
| Reliability | IEEE 802.1CB (FRER), with 802.1Qca | [802.1CB](./ieee-802-1cb.mdx) | LS19 §IV-E, §IV-G, YSH19 §4.1 | [FRER](/blog/frame-replication-and-elimination), [Path control](/blog/ieee-802-1qca-path-control) |
| Resource management | IEEE 802.1Qcc, with 802.1Qat, 802.1CS and RAP | [802.1Qcc](./ieee-802-1qcc.mdx) | LS19 §III-D, §IV-F, §IV-G | [Stream reservation](/blog/stream-reservation), [SDN](/blog/sdn-and-tsn-configuration) |
| Profiles | IEEE 802.1CM, IEC/IEEE 60802, automotive | [Profiles](./tsn-profiles.mdx) | LS19 §V, YSH19 §6.1 | [802.1CM](/blog/ieee-802-1cm-fronthaul-profile), [60802](/blog/iec-ieee-60802-industrial-profile), [802.1DG](/blog/ieee-802-1dg-automotive-profile) |
| Layer 3 | IETF DetNet (RFC 8655) | [DetNet](./ietf-detnet.mdx) | RFC 8655 §2–4, YSH19 §5, §8, LS19 §IV-G | [DetNet](/blog/ietf-detnet) |

## What the highlights were on

The PDFs carry colour highlights from a first reading. They mark the same few ideas in every article:

- **Why TSN exists.** Plain Ethernet is cheap and flexible but gives no end-to-end latency guarantee; industrial and automotive networks need one, and earlier real-time Ethernet variants do not interoperate (YSH19 §1, LS19 abstract).
- **What TSN promises.** Worst-case end-to-end latency, reliability, bandwidth isolation and zero congestion loss, by extending AVB (LS19 §I).
- **How TAS works.** Time-gated queues opened and closed by a gate control list with a cycle time, configured by a CNC, with the priority code point choosing the queue (XZZ23 §I).
- **DetNet terms.** Convergence of DetNet and non-DetNet flows, resource reservation, time synchronisation and compound/member flows (RFC 8655 §2). A margin note on RFC 8655 §2.1 reads: *DetNet interconnects with non-DetNet topologies (sub-network technologies)*.

## Reading the 2019 articles today

LS19 and YSH19 were written in 2019. Several projects they call "in progress" have since been published: 802.1AS-Rev became [802.1AS-2020](https://1.ieee802.org/tsn/802-1as-2020/) (revised again as 802.1AS-2025), P802.1Qcr became [802.1Qcr-2020](https://1.ieee802.org/tsn/802-1qcr/), [802.1CS-2020](https://1.ieee802.org/tsn/802-1cs/) was published, the DetNet drafts became RFCs, and the Resource Allocation Protocol moved from P802.1Qdd to [P802.1DD](https://1.ieee802.org/tsn/802-1dd/). Each page says where this changes the reading.
