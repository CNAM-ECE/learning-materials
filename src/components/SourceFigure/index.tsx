import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Figures cropped from the original sources of the learning path (IEEE 802.1
 * slide decks, RFC 8655, arXiv papers). Each file in static/img/sources is
 * listed here with the document, page and figure it was cut from, so that the
 * source line under the image is always complete. The figures remain the work
 * of their authors; they are shown unchanged apart from cropping, for study.
 */

type Doc = {cite: string; url: string};

const docs = {
  concepts: {
    cite: 'J. Farkas, “TSN Basic Concepts,” DetNet–TSN workshop, IEEE 802.1, 11 November 2018',
    url: 'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf',
  },
  overview: {
    cite: 'J. Farkas, “IEEE 802.1 TSN TG Overview,” DetNet–TSN workshop, IEEE 802.1, 11 November 2018',
    url: 'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-overview-1118-v01.pdf',
  },
  intro: {
    cite: 'J. Farkas, “Introduction to IEEE 802.1: Focus on the Time-Sensitive Networking Task Group,” IEEE 802.1, 15 May 2017',
    url: 'https://www.ieee802.org/1/files/public/docs2017/tsn-farkas-intro-0517-v01.pdf',
  },
  rfc8655: {
    cite: 'N. Finn, P. Thubert, B. Varga, J. Farkas, RFC 8655, “Deterministic Networking Architecture,” IETF, October 2019',
    url: 'https://www.rfc-editor.org/rfc/rfc8655',
  },
  xue: {
    cite: 'C. Xue, T. Zhang, Y. Zhou, M. Nixon, A. Loveless, S. Han, “Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A Systematic Review and Experimental Study,” arXiv:2305.16772',
    url: 'https://arxiv.org/abs/2305.16772',
  },
  tutorial: {
    cite: 'P. Thaler, N. Finn, D. Fedyk, J. Farkas, G. Parsons, E. Gray, “IEEE 802.1Q: Media Access Control Bridges and Virtual Bridged Local Area Networks,” IEEE 802.1 tutorial, IETF 86, 10 March 2013',
    url: 'https://www.ieee802.org/802_tutorials/2013-03/8021-IETF-tutorial-final.pdf',
  },
  avb2022: {
    cite: 'D. Pannell, “An Introduction to AVB (Audio Video Bridging), the 1st TSN Profile,” IEEE SA TSN webinar series, June 2022',
    url: 'https://www.ieee802.org/1/files/public/docs2022/webinar-pannell-AVB-0622.pdf',
  },
  cm2018: {
    cite: 'J. Farkas, “IEEE Std 802.1CM Time-Sensitive Networking for Fronthaul: An Overview,” IEEE 802.1, July 2018',
    url: 'https://www.ieee802.org/1/files/public/docs2018/cm-farkas-overview-0718-v01.pdf',
  },
  iec60802: {
    cite: 'J. Woods, “IEC/IEEE 60802: The Case for the Converged Network in the Factory of the Future,” IEEE SA TSN webinar series, 6 April 2023',
    url: 'https://www.ieee802.org/1/files/public/docs2023/webinar-woods-TSN_60802-0423.pdf',
  },
  rfc7813: {
    cite: 'J. Farkas (Ed.), N. Bragg, P. Unbehagen, G. Parsons, P. Ashwood-Smith, C. Bowers, RFC 7813, “IS-IS Path Control and Reservation,” IETF, June 2016',
    url: 'https://www.rfc-editor.org/rfc/rfc7813',
  },
  cisco: {
    cite: 'Cisco Systems, “Precision Time Protocol Software Configuration Guide for IE 2000U and Connected Grid Switches,” PTP overview (Cisco art 310450)',
    url: 'https://www.cisco.com/c/en/us/td/docs/switches/connectedgrid/cg-switch-sw-master/software/configuration/guide/ptp/b_ptp_ie2ku.html',
  },
  pannell2020: {
    cite: 'D. Pannell, “Status & Content of the IEEE TSN Auto Profile,” IEEE Ethernet & IP @ Automotive Technology Day, September 2020',
    url: 'https://standards.ieee.org/wp-content/uploads/import/documents/other/eipatd-presentations/2020/D1-05-Pannell-Status-and-Content-of-the-IEEE-TSN-Automotive-Profile.pdf',
  },
  grigorjew: {
    cite: 'A. Grigorjew, S. Geissler, J. Schmitt, T. Hossfeld, “Decentralized Latency Models and Information Flow for TSN Shapers – A Tutorial,” arXiv:2610.11999, 2026',
    url: 'https://arxiv.org/abs/2610.11999',
  },
} satisfies Record<string, Doc>;

type Entry = {
  doc: keyof typeof docs;
  where: string;
  alt: string;
  width?: number;
  /** What was changed, if more than cropping. */
  edit?: string;
};

export const sourceFigures = {
  'farkas2018-deterministic-service': {doc: 'concepts', where: 'slide 4', alt: 'Latency and loss distributions of a traditional and of a deterministic service'},
  'farkas2018-components': {doc: 'concepts', where: 'slide 5', alt: 'TSN components: synchronisation, reliability, latency and resource management, with the standards of each group'},
  'farkas2018-bridged-network': {doc: 'concepts', where: 'slide 6', alt: 'A bridged network of edge and core bridges with talkers, listeners and three streams'},
  'farkas2018-bridge-architecture': {doc: 'concepts', where: 'slide 7', alt: 'Simplified baggy-pants model of a MAC bridge: control plane with higher layer entities and an external agent above a data plane made of a relay and two ports', width: 520},
  'farkas2018-data-plane-actions': {doc: 'concepts', where: 'slide 8', alt: 'The baggy-pants bridge redrawn as a pipeline: ingress port, relay and egress port, each with an action set and a table'},
  'farkas2018-forwarding-process': {doc: 'concepts', where: 'slide 9', alt: 'The forwarding process of IEEE 802.1Q from reception port to transmission port, with the sub-clause of each step'},
  'farkas2018-qos-functions': {doc: 'concepts', where: 'slide 10', alt: 'QoS functions of a bridge port: filtering and policing, shaping, queuing and transmission selection'},
  'farkas2018-scheduled-traffic': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 11', alt: 'Time-gated queues with gates opening and closing for critical and non-critical traffic'},
  'farkas2018-preemption': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 12', alt: 'Rocks of critical packets and sand of preemptable packets filling the gaps between them'},
  'farkas2018-psfp': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 13', alt: 'PSFP chain: filter, time gate with internal priority, meter, then queuing', width: 420},
  'farkas2018-ats': {doc: 'concepts', where: 'slide 14', alt: 'Asynchronous traffic shaping per hop: high and low priority shaped queues on both sides of a link'},
  'farkas2018-ats-components': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 15', alt: 'ATS chain: filter, gate with internal priority, ATS shaper, then queuing', width: 400},
  'farkas2018-frer': {doc: 'concepts', where: 'slide 16', alt: 'Frame replication at node N1 and elimination at node N2 over two disjoint paths'},
  'farkas2018-explicit-trees': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 17', alt: 'IS-IS shortest path tree and an explicit tree installed by a controller between edge bridges'},
  'farkas2018-configuration': {doc: 'concepts', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 18', alt: 'The fully distributed, centralised network and distributed user, and fully centralised configuration models'},
  'overview2018-ieee-sa': {doc: 'overview', where: 'slide 3', alt: 'Organisation chart of the IEEE Standards Association down to the IEEE 802 committee'},
  'overview2018-ieee802-osi': {doc: 'overview', where: 'slide 4', alt: 'OSI reference model with IEEE 802 covering the data link and physical layers and IEEE 802.1 at the top of the data link layer', width: 300},
  'overview2018-grouping': {doc: 'overview', where: 'slide 9', alt: 'TSN standards grouped into profiles, configuration and base technology'},
  'overview2018-profiles': {doc: 'overview', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 11', alt: 'IEEE 802 features combined into profiles such as AVB, fronthaul and industrial automation', width: 460},
  'intro2017-gptp-network': {doc: 'intro', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 27', alt: 'A gPTP network across Ethernet, EPON, wireless and coordinated shared networks', width: 460},
  'intro2017-preemption-frame': {doc: 'intro', where: 'slide 29', alt: 'An express frame interrupting a preemptable frame, with minimum fragment sizes and inter-frame gaps', width: 620},
  'intro2017-mac-merge': {doc: 'intro', where: 'slide 30', alt: 'Express MAC and preemptable MAC above the MAC merge sublayer and the PHY', width: 320},
  'intro2017-qbv-gates': {doc: 'intro', where: 'slide 31', alt: 'A transmission gate after each queue of an 802.1Q port, driven by a gate control list'},
  'intro2017-qbv-preemption': {doc: 'intro', where: 'slide 32', alt: 'Scheduled traffic gates combined with express and preemptable MACs and the MAC merge sublayer'},
  'intro2017-guard-band': {doc: 'intro', where: 'slide 33', alt: 'Express gate and preemptable traffic at an egress port, with and without a guard band'},
  'intro2017-cqf-gates': {doc: 'intro', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 35', alt: 'Cyclic queuing: time-aware ingress filters feeding two class queues with cycle gates', width: 560},
  'intro2017-cqf-timing': {doc: 'intro', where: 'slide 36', alt: 'Cyclic queuing timing on four links: each frame stays one cycle at each hop'},
  'intro2017-qcc-model': {doc: 'intro', where: 'slide 38', alt: 'Centralized network / distributed user model: a CNC managing bridges, with user/network configuration at the edge'},
  'intro2017-control-plane': {doc: 'intro', where: 'slide 49', alt: 'Control plane overview: VLANs assigned to control modes, and the control options for each topology layer'},
  'rfc8655-fig2': {doc: 'rfc8655', where: 'Figure 2', alt: 'ASCII figure of the DetNet data-plane protocol stack with service and forwarding sub-layers', width: 620},
  'rfc8655-fig3': {doc: 'rfc8655', where: 'Figure 3', alt: 'ASCII figure of a simple DetNet-enabled network with end systems, edge, transit and relay nodes', width: 620},
  'rfc8655-fig4': {doc: 'rfc8655', where: 'Figure 4', alt: 'ASCII figure of DetNet adaptation to the data plane', width: 620},
  'rfc8655-fig7': {doc: 'rfc8655', where: 'Figure 7', alt: 'ASCII figure of the northbound and southbound interfaces between end systems, controller plane functions and DetNet nodes', width: 620},
  'rfc8655-fig10': {doc: 'rfc8655', where: 'Figure 10', alt: 'ASCII figure of IP nodes interconnected by an Ethernet domain', width: 620},
  'xue2023-fig1': {doc: 'xue', where: 'Fig. 1', alt: 'A TSN bridge with ingress ports, switching engine, priority filter, queues with gates and a gate control list', width: 520},
  'ieee8021q-tutorial-bridge-components': {doc: 'tutorial', where: 'slide 14', alt: 'A bridge specified as an A component and a B component with typed ports, implemented as a single relay with a port that combines the X, Y and Z functions', width: 520, edit: 'cropped, with the slide text beside the figure removed'},
  'ieee8021q-tutorial-topology-layers': {doc: 'tutorial', where: 'slide 25', alt: 'Topology layers of a bridged network stacked as planes: physical network topology, active topology, VLAN topology and station location'},
  'avb2022-home-network': {doc: 'avb2022', where: 'slide 10', alt: 'A home with an Ethernet AVB backbone connecting computers, speakers, displays and an audio/video server in each room'},
  'avb2022-automotive': {doc: 'avb2022', where: 'slide 12', alt: 'An automotive infotainment network: a central unit connected to displays, cameras and media players around the car'},
  'avb2022-gptp-hops': {doc: 'avb2022', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 15', alt: 'A five-hop gPTP sync tree from the grandmaster endpoint through four bridges, with cable delay and residence time at each hop'},
  'avb2022-pcp-classes': {doc: 'avb2022', where: 'slide 17', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', alt: 'AVB priority code points 3 and 2 mapped to traffic classes 8 and 7 with credit-based shapers ahead of a strict priority selector', width: 560},
  'avb2022-profile': {doc: 'avb2022', where: 'slide 30', alt: 'The TSN components at the time of AVB: 802.1AS, IEEE 1722, the credit-based shaper, SRP and IEEE 1722.1'},
  'cm2018-fronthaul': {doc: 'cm2018', where: 'slide 3', alt: 'A 5G radio base station split into radio equipment and radio equipment control, connected by fronthaul; backhaul beyond'},
  'cm2018-splits': {doc: 'cm2018', where: 'slide 4', alt: 'Radio base station functional splits: no split, the CPRI split below the PHY, and the eCPRI split inside the PHY'},
  'cm2018-ethernet-fronthaul': {doc: 'cm2018', where: 'slide 5', alt: 'Ethernet-based fronthaul: radio equipment and radio equipment control in the radio domain connected through an IEEE 802.1/802.3 bridged network'},
  'cm2018-fronthaul-details': {doc: 'cm2018', where: 'slide 9', alt: 'Fronthaul flows separated by priority and VLAN, carried by IEEE 802.1CM profiles across a bridged network, with synchronisation provided separately'},
  'iec60802-2023-challenge': {doc: 'iec60802', where: 'slide 8', alt: 'Traditional industrial networks with special hardware at layer 2 compared with standard Ethernet stacks'},
  'iec60802-2023-line-topology': {doc: 'iec60802', where: 'slide 10', alt: 'A controller and servodrives in a line topology with cycle times of 125 and 200 microseconds'},
  'iec60802-2023-scheduled-traffic': {doc: 'iec60802', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 11', alt: 'Applications with many cycle times, end-station gating cycles and bridge gating cycles across a network'},
  'iec60802-2023-sync': {doc: 'iec60802', where: 'slide 12', alt: 'Two time domains, global time and working clock, each with a PTP clock and an application clock', width: 480},
  'iec60802-2023-ia-station': {doc: 'iec60802', where: 'slide 13', alt: 'An IA-station: end station components and bridge components sharing one chassis and one management entity'},
  'iec60802-2023-resource-management': {doc: 'iec60802', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 19', alt: 'Common resource management: a centralized user and network configuration entity aware of all OT and IT traffic in its domain'},
  'ieee8021q-tutorial-active-topology': {doc: 'tutorial', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 26', alt: 'Five bridges controlled by RSTP (one shared tree), MSTP (one tree per group of VLANs) and SPB (one shortest path tree per bridge)'},
  'ieee8021q-tutorial-spb-spt': {doc: 'tutorial', edit: 'cropped, with neighbouring slide text, logos or navigation icons blanked', where: 'slide 31', alt: 'Shortest path trees of bridges A and C over four SPT bridges running ISIS-SPB', width: 520},
  'ieee8021q-tutorial-spb-load': {doc: 'tutorial', where: 'slide 32', alt: 'Two equal-cost shortest path tree options for bridge A in a five-bridge network', width: 480},
  'ieee8021q-tutorial-srp-example': {doc: 'tutorial', where: 'slide 53', alt: 'A talker advertise propagating through bridges to listeners, with the accumulated latency increased at each bridge, and listener ready messages returning'},
  'rfc7813-fig2': {doc: 'rfc7813', where: 'Figure 2', edit: 'ASCII figure rendered from the RFC text, otherwise unchanged', alt: 'ASCII figure of a strict explicit tree over nine bridges A to I, and its description as a list of hops starting at root A', width: 360},
  'cisco-ptp-delay-request': {doc: 'cisco', where: 'figure “PTP message exchange”', edit: 'cropped from a screenshot, otherwise unchanged', alt: 'Master and slave timelines: Sync sent at t1 and received at t2, Follow_Up carrying t1, Delay_Req sent at t3 and received at t4, Delay_Resp carrying t4; path delay and offset formulas below', width: 620},
  'overview2018-process': {doc: 'overview', where: 'slide 7', edit: 'cropped, with the slide footer blanked', alt: 'The standard development process: PAR, NesCom approval, task group ballot, working group ballot and recirculation, sponsor ballot and recirculation, RevCom approval, publication', width: 560},
  'pannell2020-stages': {doc: 'pannell2020', where: 'slide 6', alt: 'Stages of an IEEE 802.1 standard: new idea, PAR, task group, work group, SA ballots, standard'},
  'grigorjew2026-fig1': {doc: 'grigorjew', where: 'Fig. 1', alt: 'Use cases for decentralised latency models: fully decentralised reservation, reservation between CNC domains, reshaping after FRER merging'},
  'grigorjew2026-fig4': {doc: 'grigorjew', where: 'Fig. 4', alt: 'Switch delay model: propagation, store and forward, processing, shaper queuing and priority queuing', width: 520},
  'grigorjew2026-fig5': {doc: 'grigorjew', where: 'Fig. 5', alt: 'Delay segments between shapers of consecutive switches'},
  'grigorjew2026-fig12': {doc: 'grigorjew', where: 'Fig. 12', alt: 'Cyclic queuing and forwarding as PSFP and TAS gates in two switches'},
} satisfies Record<string, Entry>;

export type SourceFigureId = keyof typeof sourceFigures;

type Props = {
  id: SourceFigureId;
  /** Caption, starting with "Figure N." */
  caption: ReactNode;
};

export default function SourceFigure({id, caption}: Props): ReactNode {
  const entry: Entry = sourceFigures[id];
  const doc: Doc = docs[entry.doc];
  const src = useBaseUrl(`/img/sources/${id}.png`);
  return (
    <figure className="nc-figure nc-figure-image">
      <img
        src={src}
        alt={entry.alt}
        loading="lazy"
        style={entry.width ? {maxWidth: `min(100%, ${entry.width}px)`} : undefined}
      />
      <figcaption>
        {caption}
        <span className="nc-figure-source">
          Source: <a href={doc.url}>{doc.cite}</a>, {entry.where};{' '}
          {entry.edit ?? 'cropped, otherwise unchanged'}.
        </span>
      </figcaption>
    </figure>
  );
}
