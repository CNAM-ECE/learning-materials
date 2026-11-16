---
sidebar_position: 4
title: Annotated resources
description: The lectures, articles and technical documents from which the learning path was prepared, with a short note on each.
---

# Annotated resources

## Lectures

| Resource | Note | Used in |
| --- | --- | --- |
| *Networks and Calculus*, Prof. Jean-Yves Le Boudec, EPFL School of Computer and Communication Sciences. [YouTube](https://www.youtube.com/watch?v=NpoqqPM4LYA) | Talk by one of the founders of the theory; suggested as an overview before the network calculus posts. | Why deterministic guarantees, TSN shapers, Reconfiguration |
| *An Introduction to Network Calculus*, LCA2, EPFL. [YouTube](https://www.youtube.com/watch?v=ABQ327BTc_o) | Introductory lecture from the EPFL laboratory where the min-plus formulation was developed; suggested alongside the foundations posts. | Min-plus algebra, Arrival curves |
| *Network Calculus: Guaranteed performance analysis in networks*, LINCS seminar. [YouTube](https://www.youtube.com/watch?v=1funUBUL2II) | Seminar from the Paris LINCS laboratory; suggested alongside the bounds posts. | Arrival curves, Fundamental bounds, Multiplexing, TSN shapers |

## Articles and technical documents

| Resource | Note | Used in |
| --- | --- | --- |
| M. Boyer, R. Henia, "Designing a Resilient Time-Aware Shaper Configuration for TSN," Ethernet & IP @ Automotive Technology Day, 2025. [Slides](https://standards.ieee.org/wp-content/uploads/2025/10/D1_09_Marc-Boyer-TSN-reconfiguration.pdf) | Incremental TAS reconfiguration after permanent link faults (WPEx: window precedence exclusion, window enlargement, protective gating). | Why deterministic guarantees, Reconfiguration |
| N. Sertbaş Bülbül, D. Ergenç, M. Fischer, "Towards SDN-based Dynamic Path Reconfiguration for Time Sensitive Networking," IEEE/IFIP NOMS 2022. [IEEE Xplore](https://ieeexplore.ieee.org/document/9789890) | MILP-based path (re)configuration by an SDN controller; compares never, periodic, threshold-triggered and systematic reconfiguration. | Why deterministic guarantees, Reconfiguration |
| TSF Technology, "Migration vers TSN : guide pratique." [Link](https://tsf-technology.com/fr/ressources/guides-techniques/migration-tsn-guide-pratique) | Practitioner's guide (in French): key standards and a five-phase migration method ending with latency validation. | Why deterministic guarantees, Reconfiguration |

| C. Xue, T. Zhang, Y. Zhou, M. Nixon, A. Loveless, S. Han, "Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A Systematic Review and Experimental Study," arXiv:2305.16772, 2023. [arXiv](https://arxiv.org/abs/2305.16772) | System models of TAS scheduling and an experimental comparison of 17 methods in simulation and on an eight-bridge testbed. | 802.1AS, TAS, Preemption, SDN |
| A. Grigorjew, S. Geissler, J. Schmitt, T. Hossfeld, "Decentralized Latency Models and Information Flow for TSN Shapers – A Tutorial," arXiv:2610.11999, 2026. [arXiv](https://arxiv.org/abs/2610.11999) | Shaper-to-shaper delay segments, the information a bridge needs for a local bound, and locally computable bounds for SP, CQF, ATS and CBS. | CBS, TAS, CQF, ATS, PSFP, FRER, Stream reservation, SDN |
| I. Behnke, H. Austad, "Real-Time Performance of Industrial IoT Communication Technologies: A Review," arXiv:2311.08852, 2023 (CC BY 4.0). [arXiv](https://arxiv.org/abs/2311.08852) | IIoT scenarios and requirements; IntServ, DiffServ and TSN shapers; recent SDN and TSN work for industrial networks. | Deterministic networking, 802.1AS, CBS, TAS, ATS, Stream reservation, SDN |

## Standards bodies and standards

| Resource | Note | Used in |
| --- | --- | --- |
| N. Finn, P. Thubert, B. Varga, J. Farkas, *Deterministic Networking Architecture*, RFC 8655, 2019. [RFC Editor](https://www.rfc-editor.org/rfc/rfc8655) | The DetNet architecture: service and forwarding sub-layers, node types, planes, and the relation to TSN sub-networks. Its figures are the model for the architecture diagrams of the standards posts. | Deterministic networking, IETF DetNet |
| IETF, *Deterministic Networking (detnet) working group*. [Datatracker](https://datatracker.ietf.org/wg/detnet/about/) | Charter, scope, work items and milestones of the working group. | Deterministic networking, IETF DetNet |
| IEEE 802.1, *Time-Sensitive Networking (TSN) Task Group*. [Web page](https://1.ieee802.org/tsn/) | Authoritative list of published TSN standards, profiles and ongoing projects. | IEEE 802.1, TSN toolbox |
| J. Farkas, "Introduction to IEEE 802.1: Focus on the TSN Task Group," 2017. [Slides](https://www.ieee802.org/1/files/public/docs2017/tsn-farkas-intro-0517-v01.pdf) | Organisation of IEEE 802.1, history from AVB to TSN, and one slide per mechanism. | IEEE 802.1, TSN toolbox |
| J. Farkas, "TSN Basic Concepts" and "IEEE 802.1 TSN TG Overview," DetNet–TSN workshop, 2018. [Concepts](https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf), [Overview](https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-overview-1118-v01.pdf) | The deterministic service, the bridge architecture, the TSN toolbox, profiles and naming rules, presented to the IETF DetNet audience. | Deterministic networking, IEEE 802.1, TSN toolbox |
| IEEE Standards Association, *TSN Webinar Series*. [Web page](https://engagestandards.ieee.org/TSN-Webinar-Series.html) | Six on-demand webinars: 802.1 introduction, TSN overview, 802.1AS, AVB, 802.1CM and IEC/IEEE 60802. | IEEE 802.1 |
| IETF, RFC 1633 (IntServ), RFC 2212 (Guaranteed Service), RFC 2475 (DiffServ), RFC 2998 (IntServ over DiffServ). [RFC 1633](https://www.rfc-editor.org/rfc/rfc1633), [RFC 2212](https://www.rfc-editor.org/rfc/rfc2212), [RFC 2475](https://www.rfc-editor.org/rfc/rfc2475), [RFC 2998](https://www.rfc-editor.org/rfc/rfc2998) | The two earlier IP quality-of-service models and their combination, which DetNet builds on. | Deterministic networking |
| IETF, RFC 3031 (MPLS architecture) and RFC 8964 (DetNet data plane: MPLS). [RFC 3031](https://www.rfc-editor.org/rfc/rfc3031), [RFC 8964](https://www.rfc-editor.org/rfc/rfc8964) | Label switching, and how DetNet carries flows and sequence numbers over MPLS. | ATM and MPLS |
| A. Charny, J.-Y. Le Boudec, "Delay Bounds in a Network with Aggregate Scheduling," QofIS 2000, LNCS 1922. | The utilisation condition for delay bounds in networks of FIFO aggregates (DiffServ, MPLS cores). | ATM and MPLS |
| Wikipedia, "Asynchronous Transfer Mode," "Multiprotocol Label Switching" and "Generic cell rate algorithm." [ATM](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode), [MPLS](https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching), [GCRA](https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm) | Cells, virtual circuits, traffic contracts and the GCRA; labels, LERs, LSRs and LSPs. | ATM and MPLS |
| Wikipedia, "Time-Sensitive Networking" and "Deterministic Networking." [TSN](https://en.wikipedia.org/wiki/Time-Sensitive_Networking), [DetNet](https://en.wikipedia.org/wiki/Deterministic_Networking) | Broad summaries with the AVB class parameters and the DetNet requirements; to be checked against the standards for anything quantitative. | Deterministic networking, IETF DetNet, TSN toolbox |
| Wikimedia Commons, images from the Wikipedia articles on TSN, AVB, PTP, IEEE 802.1Q and SDN (CC BY-SA 3.0/4.0 and CC0). [Commons](https://commons.wikimedia.org/) | Qbv schedules and guard band, preemption, CBS credit, AVB domains, gPTP hierarchy, SRP advertise, PTP exchange, VLAN tag, ONF SDN architecture, GCRA flowcharts, VBR cell timing, MPLS cloud, network calculus deviations and server sequence. Each figure credits its author and licence. | 802.1AS, CBS, TAS, Preemption, PSFP, Stream reservation, SDN, ATM and MPLS |

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
