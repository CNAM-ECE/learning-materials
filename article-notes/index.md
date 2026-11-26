---
id: index
slug: /
title: Article notes
sidebar_label: Overview
description: Reading notes on the five articles of the ressource folder, split by TSN standard, with the figures of each article and links to the matching posts.
---

# Article notes

Article notes are the second half of **Research understanding**: the [posts](/blog) explain each topic in order, and these pages record what the source articles say about each standard. Every post on a standard opens with a card that links here, and lists the articles in its references.

Reading notes on the four articles kept in the repository's [`ressource/`](https://github.com/CNAM-ECE/learning-materials/tree/main/ressource) folder. Each article covers several standards, so the notes are **split by standard** rather than by article: every page collects what the articles say about one standard, with their figures, and links to the [Research understanding](/blog) post on the same standard. The pages follow the four pillars of the TSN toolbox (timing, bounded latency, reliability, resource management), then the profiles and DetNet.

## The articles

| Key | Article | Kind | What it is used for here |
| --- | --- | --- | --- |
| **[LS19]** | L. Lo Bello, W. Steiner, "A Perspective on IEEE Time-Sensitive Networking for Industrial Communication and Automation Systems," *Proceedings of the IEEE*, vol. 107, no. 6, pp. 1094–1120, 2019. [DOI](https://doi.org/10.1109/JPROC.2019.2905334) · file `tsn for automation.pdf` | Survey | The main source: one section per core standard (AS, Qbv, Qbu/3br, Qci, CB, Qcc), each with an open-issues part, and the industrial and automotive use cases |
| **[YSH19]** | X. Yang, D. Scholz, M. Helm, "Deterministic Networking (DetNet) vs Time Sensitive Networking (TSN)," Seminar IITM SS 19, TU Munich, 2019. [DOI](https://doi.org/10.2313/NET-2019-10-1_15) · file `desnet vs tsn.pdf` | Seminar paper | A short comparison of TSN and DetNet, with the TSN timing model, a CBS flowchart and FRER figures |
| **[XZZ23]** | C. Xue, T. Zhang, Y. Zhou, M. Nixon, A. Loveless, S. Han, "Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A Systematic Review and Experimental Study," arXiv:2305.16772, 2023. [arXiv](https://arxiv.org/abs/2305.16772) · file `tsn survey.pdf` | Review and experiments | Network, traffic and scheduling models for TAS, 17 methods compared, and testbed measurements |
| **[GPB22]** | V. Gavriluţ, A. Pruski, M. S. Berger, "Constructive or Optimized: An Overview of Strategies to Design Networks for Time-Critical Applications," *ACM Computing Surveys*, vol. 55, no. 3, article 62, 2022. [DOI](https://doi.org/10.1145/3501294) · file `tsn in distributed sys.pdf` | Survey | The lineage from AFDX and TTEthernet to TSN, the five design problems (topology, routing, priority, scheduling, bandwidth) and the strategies that solve them |
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
| Resource management | Network design: topology, routing, priorities, schedules, bandwidth | [Network design](./tsn-network-design.mdx) | GPB22 | [SDN](/blog/sdn-and-tsn-configuration), [Reconfiguration](/blog/dynamic-reconfiguration-of-tsn) |
| Profiles | IEEE 802.1CM, IEC/IEEE 60802, automotive | [Profiles](./tsn-profiles.mdx) | LS19 §V, YSH19 §6.1 | [802.1CM](/blog/ieee-802-1cm-fronthaul-profile), [60802](/blog/iec-ieee-60802-industrial-profile), [802.1DG](/blog/ieee-802-1dg-automotive-profile) |
| Layer 3 | IETF DetNet (RFC 8655) | [DetNet](./ietf-detnet.mdx) | RFC 8655 §2–4, YSH19 §5, §8, LS19 §IV-G | [DetNet](/blog/ietf-detnet) |

## How the notes were made

The PDFs carry a full reading: about 5,300 colour highlights and 728 typed margin notes, one or more per paragraph, written as terse summaries (for example *zero loss = worst-case buffer calc; latency = output + link + preempt + proc + queuing*). The pages here expand those margin notes into sentences and tables, grouped by standard, and add the figures of the articles.

| Article | Highlights | Margin notes |
| --- | ---: | ---: |
| LS19 | 1,165 | 186 |
| RFC 8655 | 904 | 170 |
| XZZ23 | 1,209 | 155 |
| GPB22 | 1,757 | 164 |
| YSH19 | 269 | 53 |

The notes return to the same ideas across the articles:

- **Why TSN exists.** Plain Ethernet is cheap and flexible but gives no end-to-end latency guarantee; industrial and automotive networks need one, and earlier real-time Ethernet variants do not interoperate (YSH19 §1, LS19 abstract, GPB22 §3).
- **What TSN promises.** Worst-case end-to-end latency, reliability, bandwidth isolation and zero congestion loss, by extending AVB (LS19 §I). TSN and DetNet are add-ons to best-effort Ethernet, unlike fieldbuses such as EtherCAT; other low-latency work targets the PHY (WirelessHP) or LTE (MulteFire) (YSH19 §2).
- **How TAS works and how hard it is to configure.** Time-gated queues, a GCL with a cycle time, a CNC computing the schedule, and no method that wins everywhere (XZZ23, GPB22).
- **DetNet terms.** Convergence with non-DetNet traffic, resource reservation, time synchronisation, compound and member flows (RFC 8655 §2).

## Reading the 2019 articles today

LS19 and YSH19 were written in 2019. Several projects they call "in progress" have since been published: 802.1AS-Rev became [802.1AS-2020](https://1.ieee802.org/tsn/802-1as-2020/) (revised again as 802.1AS-2025), P802.1Qcr became [802.1Qcr-2020](https://1.ieee802.org/tsn/802-1qcr/), [802.1CS-2020](https://1.ieee802.org/tsn/802-1cs/) was published, the DetNet drafts became RFCs, and the Resource Allocation Protocol moved from P802.1Qdd to [P802.1DD](https://1.ieee802.org/tsn/802-1dd/). Each page says where this changes the reading.
