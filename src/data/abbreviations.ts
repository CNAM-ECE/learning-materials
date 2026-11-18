/**
 * Abbreviations used in the learning path: what each one stands for and a
 * one-sentence definition. Used by the Abbreviations component (a box in each
 * standards post) and by the Reference page that lists them all.
 *
 * Expansions follow the standard that defines the term; where the standard
 * does not expand a name (eCPRI), the definition says so.
 */
export type Abbreviation = {
  /** What the letters stand for. */
  expansion: string;
  /** One or two short sentences. */
  definition: string;
  /** Official source or standard, when there is one. */
  link?: string;
};

const R = 'https://www.rfc-editor.org/rfc/';
const SA = 'https://standards.ieee.org/ieee/';
const TG = 'https://1.ieee802.org/tsn/';
const ECPRI = 'http://www.cpri.info/downloads/eCPRI_v_1_1_2018_01_10.pdf';

export const abbreviations: Record<string, Abbreviation> = {
  // Mobile fronthaul (eCPRI specification V1.1, list of abbreviations)
  CPRI: {expansion: 'Common Public Radio Interface', definition: 'The fronthaul interface of the CPRI industry cooperation (Ericsson, Huawei, NEC, Nokia), used for most 2G, 3G and 4G fronthaul. It sends time-domain IQ samples over a dedicated point-to-point link at a constant bit rate set by sample width, sample rate and number of antennas: line-rate option 7 (9.8304 Gbit/s) carries one 20 MHz LTE carrier on 4 antennas (4T4R), and a 100 MHz carrier on 8 antennas (8T8R) needs option 10 (24.33024 Gbit/s). Because the rate grows linearly with bandwidth and antennas, CPRI does not scale to 5G massive MIMO.', link: ECPRI},
  eCPRI: {expansion: 'the packet-based CPRI interface (the specification uses “eCPRI” as a name; it is often read as “enhanced CPRI”)', definition: 'The CPRI cooperation’s packet-based fronthaul interface, first published in 2017. The split is moved inside the physical layer, so the link carries frequency-domain IQ symbols or bits instead of time-domain samples, as messages over Ethernet or IP/UDP (IQ data, bit sequence, real-time control, remote memory access, one-way delay measurement and others). The data rate then follows the actual radio load rather than a fixed CPRI rate, and the fronthaul can be switched and shared.', link: ECPRI},
  RE: {expansion: 'Radio Equipment', definition: 'The part of a radio base station at the antenna site, with the radio-frequency functions (CPRI terminology).', link: ECPRI},
  REC: {expansion: 'Radio Equipment Control', definition: 'The part of a radio base station that controls the radio equipment and runs the baseband and higher-layer processing (CPRI terminology).', link: ECPRI},
  eRE: {expansion: 'eCPRI Radio Equipment', definition: 'Radio equipment that speaks eCPRI; it holds the radio functions and the lower part of the physical layer.', link: ECPRI},
  eREC: {expansion: 'eCPRI Radio Equipment Control', definition: 'Radio equipment control that speaks eCPRI; it holds the upper part of the physical layer and the higher protocol layers.', link: ECPRI},
  RBS: {expansion: 'Radio Base Station', definition: 'The node that connects mobile devices to the cellular network; split into RE and REC when fronthaul is used.'},
  IQ: {expansion: 'In-phase and Quadrature', definition: 'Each sample of a radio signal is a complex number: I is its in-phase (real) part and Q its quadrature (imaginary) part. CPRI carries IQ samples in the time domain; eCPRI usually carries frequency-domain IQ symbols, which can also be compressed to fewer bits per sample.', link: ECPRI},
  'C&M': {expansion: 'Control and Management', definition: 'The plane of fronthaul traffic that controls and manages the radio equipment, as opposed to user-plane IQ data.', link: ECPRI},
  PDCP: {expansion: 'Packet Data Convergence Protocol', definition: 'A layer-2 protocol of the mobile radio stack, above RLC, that handles header compression, ciphering and in-order delivery.', link: ECPRI},
  RLC: {expansion: 'Radio Link Control', definition: 'A layer-2 protocol of the mobile radio stack, between PDCP and MAC, that segments packets and retransmits lost ones.', link: ECPRI},
  'PHY-U': {expansion: 'upper part of the physical layer', definition: 'The physical-layer functions that stay at the eREC in the eCPRI split.'},
  'PHY-L': {expansion: 'lower part of the physical layer', definition: 'The physical-layer functions that move to the eRE in the eCPRI split.'},
  MEF: {expansion: 'Metro Ethernet Forum (now MEF Forum)', definition: 'An industry forum that defines carrier Ethernet services and their bandwidth profiles, such as MEF 10.3.', link: 'https://www.mef.net/resources/mef-10-3-ethernet-services-attributes-phase-3/'},
  UNI: {expansion: 'User–Network Interface', definition: 'The boundary between a user’s equipment and a network service. In 802.1Qcc, the interface through which users state stream requirements to the network.'},
  SaaS: {expansion: 'Sync as a Service', definition: 'In fronthaul, synchronisation offered by the packet network itself rather than by a separate timing network.'},
  'ITU-T': {expansion: 'International Telecommunication Union, Telecommunication Standardization Sector', definition: 'The UN body that writes telecommunication recommendations; its Study Group 15 defines the telecom profiles of PTP used for fronthaul.', link: 'https://www.itu.int/en/ITU-T/'},

  // Standards bodies and general networking
  IEEE: {expansion: 'Institute of Electrical and Electronics Engineers', definition: 'The professional association whose Standards Association publishes the IEEE 802 LAN/MAN standards.', link: 'https://standards.ieee.org/'},
  IETF: {expansion: 'Internet Engineering Task Force', definition: 'The body that develops Internet standards, published as RFCs.', link: 'https://www.ietf.org/'},
  IEC: {expansion: 'International Electrotechnical Commission', definition: 'The international standards body for electrical and electronic technologies; co-owner of IEC/IEEE 60802.', link: 'https://www.iec.ch/'},
  RFC: {expansion: 'Request for Comments', definition: 'The document series in which IETF standards and related documents are published.', link: 'https://www.rfc-editor.org/'},
  OSI: {expansion: 'Open Systems Interconnection', definition: 'The seven-layer reference model for communication protocols (ISO/IEC 7498-1).'},
  LAN: {expansion: 'Local Area Network', definition: 'A network covering a limited area, such as a building or a vehicle; IEEE 802 standardises LANs.'},
  MAC: {expansion: 'Medium Access Control', definition: 'The lower sublayer of the data link layer, which frames data and controls access to the medium. A MAC address identifies a network interface.', link: SA + '802.3/10422/'},
  PHY: {expansion: 'Physical layer', definition: 'Layer 1: the transmission of bits over a medium such as copper, fibre or radio.'},
  VLAN: {expansion: 'Virtual LAN', definition: 'A logical LAN within a bridged network, identified by a 12-bit VLAN ID in the 802.1Q tag.', link: SA + '802.1Q/10323/'},
  VID: {expansion: 'VLAN Identifier', definition: 'The 12-bit field of the 802.1Q tag that names a frame’s VLAN.', link: SA + '802.1Q/10323/'},
  PCP: {expansion: 'Priority Code Point', definition: 'The 3-bit priority field of the 802.1Q tag (priorities 0 to 7).', link: SA + '802.1Q/10323/'},
  DEI: {expansion: 'Drop Eligible Indicator', definition: 'The 1-bit field of the 802.1Q tag marking frames that may be dropped first under congestion.', link: SA + '802.1Q/10323/'},
  QoS: {expansion: 'Quality of Service', definition: 'The treatment a network gives to a flow or class, in terms of bandwidth, delay, jitter and loss.'},
  FCS: {expansion: 'Frame Check Sequence', definition: 'The 4-byte CRC at the end of an Ethernet frame used to detect transmission errors.'},
  IFG: {expansion: 'Inter-Frame Gap', definition: 'The minimum idle time between two Ethernet frames on a link (12 byte times).'},
  IP: {expansion: 'Internet Protocol', definition: 'The network-layer protocol of the Internet (IPv4, RFC 791; IPv6, RFC 8200).', link: R + 'rfc791'},
  UDP: {expansion: 'User Datagram Protocol', definition: 'A connectionless transport protocol without congestion control (RFC 768).', link: R + 'rfc768'},
  TCP: {expansion: 'Transmission Control Protocol', definition: 'A reliable, connection-oriented transport protocol with congestion control (RFC 9293).', link: R + 'rfc9293'},
  OT: {expansion: 'Operational Technology', definition: 'Hardware and software that monitor and control physical processes, such as controllers, drives and sensors in a factory.'},
  IT: {expansion: 'Information Technology', definition: 'Computing and networking for information processing, such as office, business and cloud systems.'},
  IIoT: {expansion: 'Industrial Internet of Things', definition: 'Networked sensors, machines and controllers in industrial settings.'},
  ADAS: {expansion: 'Advanced Driver Assistance Systems', definition: 'Vehicle functions such as emergency braking or lane keeping that rely on cameras, radars and other sensors.'},
  PLC: {expansion: 'Programmable Logic Controller', definition: 'An industrial computer that runs a control program in a fixed cycle.'},

  // Time synchronisation
  PTP: {expansion: 'Precision Time Protocol', definition: 'IEEE 1588, a protocol that synchronises clocks over a packet network using timestamped message exchanges.', link: SA + '1588/6825/'},
  gPTP: {expansion: 'generalized Precision Time Protocol', definition: 'The profile of PTP defined by IEEE 802.1AS, in which every bridge takes part in time distribution.', link: TG + '802-1as-2020/'},
  BMCA: {expansion: 'Best Master Clock Algorithm', definition: 'The PTP algorithm that compares the clocks of a domain and elects the grandmaster.', link: SA + '1588/6825/'},
  GM: {expansion: 'Grandmaster', definition: 'The clock that is the time reference of a PTP or gPTP domain.'},
  TAI: {expansion: 'International Atomic Time (Temps Atomique International)', definition: 'The continuous atomic timescale without leap seconds; the PTP timescale counts seconds of TAI from the 1970 epoch.', link: 'https://en.wikipedia.org/wiki/International_Atomic_Time'},
  EPON: {expansion: 'Ethernet Passive Optical Network', definition: 'IEEE 802.3 point-to-multipoint access over a passive fibre tree, with its own ranging and timing mechanism that 802.1AS can reuse.', link: 'https://en.wikipedia.org/wiki/Ethernet_passive_optical_network'},
  CSN: {expansion: 'Coordinated Shared Network', definition: 'A shared medium where a coordinator schedules access, such as MoCA over in-home coaxial cable; 802.1AS defines a media-dependent layer for it.'},
  MoCA: {expansion: 'Multimedia over Coax Alliance', definition: 'A home networking technology that carries Ethernet frames over coaxial cable; an example of a coordinated shared network.', link: 'https://en.wikipedia.org/wiki/Multimedia_over_Coax_Alliance'},
  FTM: {expansion: 'Fine Timing Measurement', definition: 'The IEEE 802.11 procedure that timestamps frames between two Wi-Fi stations, first for location; 802.1AS-2020 uses it to carry time over Wi-Fi.', link: 'https://en.wikipedia.org/wiki/Wi-Fi_positioning_system'},

  // TSN mechanisms
  TSN: {expansion: 'Time-Sensitive Networking', definition: 'The set of IEEE 802.1 standards that give Ethernet bounded latency, time synchronisation and high reliability.', link: TG},
  AVB: {expansion: 'Audio Video Bridging', definition: 'The predecessor of TSN: gPTP, the credit-based shaper and stream reservation, combined for audio and video (profile: IEEE 802.1BA).', link: 'https://www.ieee802.org/1/pages/avbridges.html'},
  CBS: {expansion: 'Credit-Based Shaper', definition: 'The IEEE 802.1Qav shaper that limits a traffic class to its reserved rate (idleSlope) with a per-queue credit. In MEF bandwidth profiles, CBS instead means Committed Burst Size.', link: SA + '802.1Qav/4401/'},
  TAS: {expansion: 'Time-Aware Shaper', definition: 'IEEE 802.1Qbv scheduled traffic: a gate per queue, opened and closed by a repeating gate control list.', link: SA + '802.1Qbv/6068/'},
  GCL: {expansion: 'Gate Control List', definition: 'The repeating timetable of gate states used by the Time-Aware Shaper (and by stream gates in PSFP).', link: SA + '802.1Qbv/6068/'},
  CQF: {expansion: 'Cyclic Queuing and Forwarding', definition: 'IEEE 802.1Qch: two queues per class alternate every cycle, so a frame advances one hop per cycle.', link: TG + '802-1qch/'},
  ATS: {expansion: 'Asynchronous Traffic Shaping', definition: 'IEEE 802.1Qcr: per-stream token-bucket shaping at every hop using local clocks only.', link: TG + '802-1qcr/'},
  PSFP: {expansion: 'Per-Stream Filtering and Policing', definition: 'IEEE 802.1Qci: stream filters, stream gates and flow meters that enforce each stream’s contract at ingress.', link: TG + '802-1qci/'},
  IPV: {expansion: 'Internal Priority Value', definition: 'A priority assigned inside a bridge (for example by a PSFP stream gate) that selects the traffic class, independently of the frame’s PCP.'},
  FRER: {expansion: 'Frame Replication and Elimination for Reliability', definition: 'IEEE 802.1CB: frames are numbered, sent over disjoint paths, and duplicates are removed.', link: TG + '802-1cb/'},
  'R-TAG': {expansion: 'Redundancy tag', definition: 'The 802.1CB tag that carries the sequence number of a replicated frame.', link: TG + '802-1cb/'},
  HSR: {expansion: 'High-availability Seamless Redundancy', definition: 'An IEC 62439-3 ring redundancy protocol that sends every frame both ways round a ring.', link: 'https://webstore.iec.ch/en/publication/64423'},
  PRP: {expansion: 'Parallel Redundancy Protocol', definition: 'An IEC 62439-3 protocol that sends every frame over two independent networks.', link: 'https://webstore.iec.ch/en/publication/64423'},
  CIR: {expansion: 'Committed Information Rate', definition: 'The guaranteed long-term rate of a MEF bandwidth profile, used by PSFP flow meters.'},
  EIR: {expansion: 'Excess Information Rate', definition: 'The additional rate of a MEF bandwidth profile that is carried only when resources allow.'},
  EBS: {expansion: 'Excess Burst Size', definition: 'The burst allowance that goes with the excess information rate in a MEF bandwidth profile.'},
  IET: {expansion: 'Interspersing Express Traffic', definition: 'IEEE 802.3br: the Ethernet mechanism that lets express frames interrupt preemptable frames.', link: 'https://www.ieee802.org/3/br/'},
  eMAC: {expansion: 'express MAC', definition: 'The 802.3br MAC instance that carries express (time-critical) frames, which are never preempted.'},
  pMAC: {expansion: 'preemptable MAC', definition: 'The 802.3br MAC instance that carries preemptable frames, which express frames may interrupt.'},
  SMD: {expansion: 'Start mPacket Delimiter', definition: 'The 802.3br delimiter that tells the receiver whether an mPacket is express, the start of a preemptable frame or a continuation fragment.'},
  MCRC: {expansion: 'mPacket CRC', definition: 'The check value that ends every non-final fragment of a preempted frame in 802.3br.'},
  BE: {expansion: 'Best Effort', definition: 'Traffic with no guarantee of delay or delivery.'},

  // Reservation and configuration
  SRP: {expansion: 'Stream Reservation Protocol', definition: 'IEEE 802.1Qat: distributed admission control in which talkers advertise streams and listeners subscribe, reserving resources hop by hop.', link: SA + '802.1Qat/4050/'},
  MSRP: {expansion: 'Multiple Stream Registration Protocol', definition: 'The MRP application at the core of SRP that registers streams and reserves bridge resources.', link: SA + '802.1Qat/4050/'},
  RAP: {expansion: 'Resource Allocation Protocol', definition: 'IEEE P802.1DD: a newer reservation protocol for centralised and decentralised TSN networks, with token-bucket traffic specifications.', link: TG + '802-1dd/'},
  LRP: {expansion: 'Link-local Registration Protocol', definition: 'IEEE 802.1CS: a protocol for replicating registration databases between neighbours, used by RAP.', link: TG + '802-1cs/'},
  TSpec: {expansion: 'Traffic Specification', definition: 'The description of how much traffic a stream may send, for example a burst and a rate.'},
  CUC: {expansion: 'Centralized User Configuration', definition: 'The 802.1Qcc entity that collects the stream requirements of end stations and passes them to the CNC.', link: TG + '802-1qcc/'},
  CNC: {expansion: 'Centralized Network Configuration', definition: 'The 802.1Qcc entity that computes paths, schedules and reservations for the whole network and configures the bridges.', link: TG + '802-1qcc/'},
  YANG: {expansion: 'Yet Another Next Generation (data modelling language)', definition: 'The language in which network configuration and state are modelled for NETCONF and RESTCONF (RFC 7950).', link: R + 'rfc7950'},
  NETCONF: {expansion: 'Network Configuration Protocol', definition: 'The IETF protocol for installing and reading device configuration described in YANG (RFC 6241).', link: R + 'rfc6241'},
  RESTCONF: {expansion: 'REST-based configuration protocol', definition: 'An HTTP-based protocol for access to YANG-modelled data (RFC 8040).', link: R + 'rfc8040'},
  SDN: {expansion: 'Software-Defined Networking', definition: 'An architecture that separates the control plane, run by a logically centralised controller, from the data plane of the network elements (RFC 7426).', link: R + 'rfc7426'},
  LLDP: {expansion: 'Link Layer Discovery Protocol', definition: 'IEEE 802.1AB: devices advertise their identity and capabilities to their direct neighbours.', link: SA + '802.1AB/6047/'},
  IA: {expansion: 'Industrial Automation', definition: 'In IEC/IEEE 60802, the application domain of the profile; an IA-station is a device that groups end-station and bridge components.'},

  // Bridging and topology control
  STP: {expansion: 'Spanning Tree Protocol', definition: 'The original 802.1D protocol that blocks redundant links to leave a loop-free tree; now replaced by RSTP.'},
  RSTP: {expansion: 'Rapid Spanning Tree Protocol', definition: 'IEEE 802.1w, now in 802.1Q: a faster-converging spanning tree with alternate and backup port roles.', link: SA + '802.1Q/10323/'},
  MSTP: {expansion: 'Multiple Spanning Tree Protocol', definition: 'IEEE 802.1s, now in 802.1Q: several spanning trees, each used by a group of VLANs.', link: SA + '802.1Q/10323/'},
  MST: {expansion: 'Multiple Spanning Tree', definition: 'A spanning tree to which one or more VLANs are mapped under MSTP.'},
  MSTI: {expansion: 'MST Instance', definition: 'One spanning tree inside an MSTP region, together with the VLANs mapped to it.'},
  CST: {expansion: 'Common Spanning Tree', definition: 'The tree that connects MSTP regions and single bridges; compatible with STP and RSTP.'},
  IST: {expansion: 'Internal Spanning Tree', definition: 'The part of the common spanning tree inside one MSTP region.'},
  BPDU: {expansion: 'Bridge Protocol Data Unit', definition: 'The message bridges exchange to run STP, RSTP and MSTP.'},
  SPB: {expansion: 'Shortest Path Bridging', definition: 'IEEE 802.1aq: bridges compute shortest path trees with IS-IS, so all links can be used.', link: SA + '802.1Q/10323/'},
  SPT: {expansion: 'Shortest Path Tree', definition: 'In SPB, the tree of shortest paths from one bridge to all others; each bridge forwards only on its own SPT.'},
  SPBV: {expansion: 'Shortest Path Bridging – VID', definition: 'The SPB mode in which shortest path trees are identified by VLAN IDs; flooding and learning, plug and play.'},
  SPBM: {expansion: 'Shortest Path Bridging – MAC', definition: 'The SPB mode built on Provider Backbone Bridges, with trees identified by backbone MAC addresses and no backbone learning.'},
  PBB: {expansion: 'Provider Backbone Bridges', definition: 'IEEE 802.1ah “MAC-in-MAC”: customer frames are encapsulated in backbone Ethernet frames.'},
  ECT: {expansion: 'Equal Cost Tree', definition: 'In SPB and PCR, an algorithm that chooses one tree among several of equal cost; each one is used through its own VID.'},
  'IS-IS': {expansion: 'Intermediate System to Intermediate System', definition: 'A link-state routing protocol (ISO/IEC 10589, RFC 1195); the control plane of SPB and PCR.', link: R + 'rfc1195'},
  PCR: {expansion: 'Path Control and Reservation', definition: 'IEEE 802.1Qca: IS-IS extensions with which a controller installs explicit, non-shortest trees (RFC 7813). In ATM, PCR instead means Peak Cell Rate.', link: SA + '802.1Qca/5557/'},
  PCE: {expansion: 'Path Computation Element', definition: 'An entity that computes paths or trees from the network topology and constraints (RFC 4655).', link: R + 'rfc4655'},
  PCA: {expansion: 'Path Control Agent', definition: 'In 802.1Qca, the IS-IS participant that acts on behalf of a PCE outside the IS-IS domain.', link: R + 'rfc7813'},
  ET: {expansion: 'Explicit Tree', definition: 'In 802.1Qca, a loop-free tree imposed by a PCE instead of the shortest path tree.', link: R + 'rfc7813'},
  MRP: {expansion: 'Multiple Registration Protocol', definition: 'IEEE 802.1ak, now in 802.1Q: the framework for declaring and registering attributes such as VLANs, multicast addresses and streams.', link: SA + '802.1Q/10323/'},
  MVRP: {expansion: 'Multiple VLAN Registration Protocol', definition: 'The MRP application that registers VLAN membership, so that VLAN traffic only goes where members are.', link: SA + '802.1Q/10323/'},
  MMRP: {expansion: 'Multiple MAC Registration Protocol', definition: 'The MRP application that registers multicast MAC addresses.', link: SA + '802.1Q/10323/'},
  GARP: {expansion: 'Generic Attribute Registration Protocol', definition: 'The 802.1D predecessor of MRP.'},
  MAD: {expansion: 'MRP Attribute Declaration', definition: 'The per-port MRP state machine that declares attributes and registers those declared by neighbours.'},
  MAP: {expansion: 'MRP Attribute Propagation', definition: 'The MRP function that turns a registration on one port into declarations on the other ports.'},
  FDB: {expansion: 'Filtering Database', definition: 'The bridge table that tells, for a MAC address and VLAN, on which ports a frame is forwarded.'},

  // IETF DetNet and routing
  DetNet: {expansion: 'Deterministic Networking', definition: 'The IETF architecture and working group for bounded-latency, low-loss flows over IP and MPLS (RFC 8655).', link: R + 'rfc8655'},
  PREOF: {expansion: 'Packet Replication, Elimination and Ordering Functions', definition: 'The DetNet service-protection functions, the Layer 3 counterpart of FRER (RFC 8655).', link: R + 'rfc8655'},
  CPF: {expansion: 'Controller Plane Function', definition: 'In DetNet, the function that computes paths and resources and configures DetNet nodes (RFC 8655).', link: R + 'rfc8655'},
  MPLS: {expansion: 'Multiprotocol Label Switching', definition: 'Forwarding of packets on short labels along label-switched paths (RFC 3031).', link: R + 'rfc3031'},
  'MPLS-TE': {expansion: 'MPLS Traffic Engineering', definition: 'Use of MPLS paths with reserved bandwidth to steer traffic (RFC 2702).', link: R + 'rfc2702'},
  LSP: {expansion: 'Label-Switched Path', definition: 'The path a labelled packet follows through an MPLS network.', link: R + 'rfc3031'},
  'RSVP-TE': {expansion: 'Resource Reservation Protocol – Traffic Engineering', definition: 'The signalling protocol that sets up MPLS paths with bandwidth reservations (RFC 3209).', link: R + 'rfc3209'},
  RSVP: {expansion: 'Resource Reservation Protocol', definition: 'The IntServ signalling protocol that reserves resources per flow (RFC 2205).', link: R + 'rfc2205'},
  IntServ: {expansion: 'Integrated Services', definition: 'The IETF per-flow QoS model with reservations in every router (RFC 1633).', link: R + 'rfc1633'},
  DiffServ: {expansion: 'Differentiated Services', definition: 'The IETF per-class QoS model, in which packets are marked at the edge and treated per class in the core (RFC 2475).', link: R + 'rfc2475'},
  DSCP: {expansion: 'Differentiated Services Code Point', definition: 'The 6-bit field in the IP header that selects a DiffServ class (RFC 2474).', link: R + 'rfc2474'},
  TEAS: {expansion: 'Traffic Engineering Architecture and Signaling', definition: 'The IETF working group responsible for MPLS-TE and RSVP-TE.', link: 'https://datatracker.ietf.org/wg/teas/about/'},
  PW: {expansion: 'Pseudowire', definition: 'An emulated point-to-point link carried over a packet network; one encapsulation of the DetNet service sub-layer.'},
  GRE: {expansion: 'Generic Routing Encapsulation', definition: 'A tunnelling protocol that carries one packet inside another (RFC 2784).', link: R + 'rfc2784'},
  OAM: {expansion: 'Operations, Administration and Maintenance', definition: 'The tools for monitoring and troubleshooting a network, such as continuity checks and loss measurement.'},

  // The IEEE standards process
  PAR: {expansion: 'Project Authorization Request', definition: 'The document that authorises work on a new standard, amendment or revision, stating its scope and purpose; approved by the IEEE SA Standards Board on the recommendation of NesCom.', link: 'https://standards.ieee.org/develop/'},
  CSD: {expansion: 'Criteria for Standards Development', definition: 'The IEEE 802 criteria (such as broad market potential and technical feasibility) used to judge whether a PAR should go forward.'},
  NesCom: {expansion: 'New Standards Committee', definition: 'The IEEE SA Standards Board committee that reviews PARs before work may start.'},
  RevCom: {expansion: 'Standards Review Committee', definition: 'The IEEE SA Standards Board committee that checks a balloted draft followed due process before it is approved as a standard.'},
  SASB: {expansion: 'IEEE SA Standards Board', definition: 'The board that approves PARs and standards and oversees the standards process.'},
  LMSC: {expansion: 'LAN/MAN Standards Committee', definition: 'The IEEE Computer Society standards committee better known as IEEE 802; its working groups include 802.1, 802.3 and 802.11.', link: 'https://www.ieee802.org/'},
  WG: {expansion: 'Working Group', definition: 'The group responsible for the standards of one area, such as IEEE 802.1 (higher layer LAN protocols); only its voting members vote in working-group ballots.'},
  TG: {expansion: 'Task Group', definition: 'A part of a working group that focuses on one subject, such as the TSN task group of IEEE 802.1.'},
  TAG: {expansion: 'Technical Advisory Group', definition: 'A group of experts on a topic that crosses working groups; it may write a recommended practice.'},
  Cor: {expansion: 'Corrigendum', definition: 'A document that only corrects errors or ambiguities in a standard, without adding new material, for example 802.1Q-2014/Cor 1-2015.', link: 'https://standards.ieee.org/faqs/maintenance/'},
  'CSMA/CD': {expansion: 'Carrier-Sense Multiple Access with Collision Detection', definition: 'The access method of the original shared-medium Ethernet: listen before sending, detect collisions, back off for a random time and retry. The random back-off makes the delay unpredictable.'},
  PDU: {expansion: 'Protocol Data Unit', definition: 'The unit of data at one layer: a frame at the data link layer, a packet at the network layer, a segment (TCP) or datagram (UDP) at the transport layer.'},
};

export type AbbreviationKey = keyof typeof abbreviations;
