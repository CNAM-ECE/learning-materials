---
sidebar_position: 3
title: TSN glossary
description: Short definitions of the IEEE 802.1 TSN amendments and terms used in the learning path.
---

# TSN glossary

| Term | Meaning |
| --- | --- |
| **TSN** | Time-Sensitive Networking: the set of IEEE 802.1 amendments that provide bounded latency, time synchronisation and high availability over Ethernet. |
| **Stream** | A flow of frames from a *talker* to one or more *listeners* with declared traffic requirements. |
| **802.1AS (gPTP)** | Generalised Precision Time Protocol; distributes a common time base to all bridges and end stations. |
| **802.1Qav (CBS)** | Credit-Based Shaper, introduced for Audio Video Bridging; limits each shaped class to its *idle slope*. |
| **802.1Qbv (TAS)** | Time-Aware Shaper; each egress queue has a gate opened and closed according to a *gate control list* (GCL) repeated every cycle. |
| **GCL** | Gate Control List; the per-port schedule of gate states used by TAS. |
| **Guard band** | Interval before a protected window during which no new frame may start, so that a non-preemptable frame cannot overrun the window. |
| **802.1Qbu / 802.3br** | Frame preemption; an express frame may interrupt a preemptable frame. |
| **802.1Qci (PSFP)** | Per-Stream Filtering and Policing; enforces per-stream traffic contracts at ingress. |
| **802.1Qcr (ATS)** | Asynchronous Traffic Shaper; per-hop interleaved regulators that restore each flow's arrival curve without a global time base. |
| **802.1CB (FRER)** | Frame Replication and Elimination for Reliability; sends copies over disjoint paths and discards duplicates. |
| **802.1Qcc** | Stream Reservation Protocol enhancements and configuration models, including the fully centralised model with a CUC and a CNC. |
| **CUC / CNC** | Centralised User Configuration / Centralised Network Configuration entities of 802.1Qcc. An SDN controller plays the role of the CNC. |
| **Hyper-period** | Least common multiple of the periods of all scheduled streams; the period after which a TAS schedule repeats. |
| **Admission control** | Decision to accept or reject a new stream so that all admitted streams keep their guarantees. |
