import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Figures reproduced from Wikimedia Commons. Every file in static/img/commons
 * is listed here with its author and licence, so that the attribution under
 * the image is always complete and always the same wherever it is used.
 */

type License = 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0' | 'Public domain';

const licenseUrl: Record<License, string> = {
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Public domain': 'https://commons.wikimedia.org/wiki/Commons:Licensing#Public_domain',
};

type CommonsImage = {
  /** File in static/img/commons. */
  path: string;
  /** Title of the file page on Wikimedia Commons, without "File:". */
  commons: string;
  author: string;
  license: License;
  /** Wikipedia article in which the image is used. */
  article: {title: string; url: string};
  alt: string;
  /** Set when the file was converted (for example from PDF to PNG). */
  changes?: string;
  /** Maximum displayed width in pixels. */
  width?: number;
};

const tsnArticle = {
  title: 'Time-Sensitive Networking',
  url: 'https://en.wikipedia.org/wiki/Time-Sensitive_Networking',
};

export const commonsImages = {
  'qbv-schedule': {
    path: 'qbv-schedule.svg',
    commons: 'Figure 1- Example IEEE 802.1Qbv schedule.svg',
    author: 'Ulgorash',
    license: 'CC BY-SA 4.0',
    article: tsnArticle,
    alt: 'Two cycles of an 802.1Qbv schedule, each with a short time slice for VLAN priority 3 followed by a longer slice for all other priorities',
  },
  'qbv-guard-band': {
    path: 'qbv-guard-band.svg',
    commons: 'TSN IEEE 802.1Qbv Example with guard band.svg',
    author: 'Ulgorash',
    license: 'CC BY-SA 4.0',
    article: tsnArticle,
    alt: 'The same 802.1Qbv schedule with a guard band at the end of each best-effort slice',
  },
  'qbv-infringement': {
    path: 'qbv-infringement.svg',
    commons: 'IEEE 802.1Qbv - time slice infringement.svg',
    author: 'Ulgorash',
    license: 'CC BY-SA 4.0',
    article: tsnArticle,
    alt: 'A best-effort frame started late in its slice runs into the next cycle and infringes the time-critical slice',
  },
  'frame-preemption': {
    path: 'frame-preemption.svg',
    commons: 'TSN frame pre-emption.svg',
    author: 'Ulgorash',
    license: 'CC BY-SA 4.0',
    article: tsnArticle,
    alt: 'A best-effort frame is interrupted at the start of the time-critical slice and its second part is sent after the slice; the guard band shrinks',
  },
  'cbs-credit': {
    path: 'cbs-credit.svg',
    commons: 'Traffic-shaping.svg',
    author: 'Michael Johas Teener (Mikejt)',
    license: 'CC BY-SA 3.0',
    article: tsnArticle,
    alt: 'Credit of the credit-based shaper rising with idleSlope while frames wait and falling with sendSlope while they are sent, with the queue depth and the transmitted frames below',
  },
  'avb-domains': {
    path: 'avb-domains.svg',
    commons: 'AVB-Ethernet-connections.svg',
    author:
      'Michael Johas Teener (Mikejt), converted from PDF and cleaned up by Johannes Rössel',
    license: 'CC BY-SA 3.0',
    article: tsnArticle,
    alt: 'Two AVB domains made of AVB bridges and end points; a path that crosses a non-AVB bridge cannot carry a reserved stream',
  },
  'gptp-hierarchy': {
    path: 'gptp-hierarchy.png',
    commons: 'Clock-Master.pdf',
    author: 'Michael Johas Teener (Mikejt)',
    license: 'CC BY-SA 3.0',
    article: {title: 'Audio Video Bridging', url: 'https://en.wikipedia.org/wiki/Audio_Video_Bridging'},
    alt: 'An 802.1AS grandmaster sends time through bridges to end points; each link has a clock master port at one end and a clock slave port at the other',
    changes: 'page 1 rendered from PDF to PNG, otherwise unchanged',
  },
  'srp-talker-advertise': {
    path: 'srp-talker-advertise.png',
    commons: 'Talker-Advertise-b.pdf',
    author: 'Michael Johas Teener (Mikejt)',
    license: 'CC BY-SA 3.0',
    article: tsnArticle,
    alt: 'A talker advertise propagating from bridge to bridge; in each bridge a registration on the input port becomes a declaration on the output ports',
    changes: 'page 1 rendered from PDF to PNG, otherwise unchanged',
  },
  'ptp-timing': {
    path: 'ptp-timing.svg',
    commons: 'IEEE1588 timing.svg',
    author: 'Aluxosm',
    license: 'CC0',
    article: {title: 'Precision Time Protocol', url: 'https://en.wikipedia.org/wiki/Precision_Time_Protocol'},
    alt: 'Message exchange between a time server and a network element with the timestamps T1, T1 prime, T2, T2 prime, T3 and T3 prime',
    width: 620,
  },
  'vlan-tag': {
    path: 'vlan-tag.svg',
    commons: 'Ethernet 802.1Q Insert.svg',
    author: 'Bill Stafford',
    license: 'CC BY-SA 3.0',
    article: {title: 'IEEE 802.1Q', url: 'https://en.wikipedia.org/wiki/IEEE_802.1Q'},
    alt: 'An Ethernet frame before and after the insertion of the four-byte 802.1Q header holding the TPID and the PCP, DEI and VID fields',
  },
  'sdn-architecture': {
    path: 'sdn-architecture.png',
    commons: 'SDN-architecture-overview-transparent.png',
    author: 'Open Networking Foundation (ONF)',
    license: 'CC BY-SA 3.0',
    article: {title: 'Software-defined networking', url: 'https://en.wikipedia.org/wiki/Software-defined_networking'},
    alt: 'SDN architecture: applications in the application plane, an SDN controller in the control plane, and network elements in the data plane, connected by northbound interfaces and the control-data-plane interface',
    width: 640,
  },
  gcra: {
    path: 'gcra.jpg',
    commons: 'GCRA.JPG',
    author: 'Graham Fountain, after the figure in ITU-T I.371 Annex A',
    license: 'Public domain',
    article: {title: 'Generic cell rate algorithm', url: 'https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm'},
    alt: 'Two equivalent flowcharts of the generic cell rate algorithm: the virtual scheduling algorithm with a theoretical arrival time, and the continuous-state leaky bucket',
    width: 640,
  },
  'dual-lbc': {
    path: 'dual-lbc.jpg',
    commons: 'Dual LBC.JPG',
    author: 'Graham Fountain',
    license: 'Public domain',
    article: {title: 'Generic cell rate algorithm', url: 'https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm'},
    alt: 'Flowcharts of the dual generic cell rate algorithm testing a cell against both the peak cell rate and the sustainable cell rate',
    width: 560,
  },
  'vbr-timing': {
    path: 'vbr-timing.jpg',
    commons: 'Variable Bit Rate.JPG',
    author: 'Graham Fountain',
    license: 'Public domain',
    article: {title: 'Generic cell rate algorithm', url: 'https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm'},
    alt: 'Cells of a VBR connection: a burst of MBS cells spaced 1/PCR apart, then a gap so that the next burst starts MBS/SCR after the first',
    width: 640,
  },
  'mpls-cloud': {
    path: 'mpls-cloud.svg',
    commons: 'MPLS-cloud.svg',
    author: 'Tule-hog',
    license: 'CC0',
    article: {title: 'Multiprotocol Label Switching', url: 'https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching'},
    alt: 'An MPLS cloud: customer routers outside, label edge routers on the border of the cloud, label switch routers inside',
    width: 420,
  },
  'nc-deviations': {
    path: 'nc-deviations.svg',
    commons: 'Horizontal and vertical deviation.svg',
    author: 'MarcBoyerONERA',
    license: 'CC BY-SA 3.0',
    article: {title: 'Network calculus', url: 'https://en.wikipedia.org/wiki/Network_calculus'},
    alt: 'Cumulative arrival curve A and departure curve D; the horizontal distance between them is the delay and the vertical distance the backlog',
    width: 560,
  },
  'nc-sequence': {
    path: 'nc-sequence.svg',
    commons: 'Network Calculus -- Sequence of servers.svg',
    author: 'MarcBoyerONERA',
    license: 'CC BY-SA 4.0',
    article: {title: 'Network calculus', url: 'https://en.wikipedia.org/wiki/Network_calculus'},
    alt: 'Two servers in sequence: input A enters the first server, its output X enters the second, whose output is D',
    width: 560,
  },
} satisfies Record<string, CommonsImage>;

export type CommonsImageId = keyof typeof commonsImages;

type Props = {
  id: CommonsImageId;
  /** Caption, starting with "Figure N." */
  caption: ReactNode;
};

export default function CommonsFigure({id, caption}: Props): ReactNode {
  const image: CommonsImage = commonsImages[id];
  const src = useBaseUrl(`/img/commons/${image.path}`);
  const page = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(
    image.commons.replace(/ /g, '_'),
  )}`;
  return (
    <figure className="nc-figure nc-figure-image">
      <img
        src={src}
        alt={image.alt}
        loading="lazy"
        style={image.width ? {maxWidth: `min(100%, ${image.width}px)`} : undefined}
      />
      <figcaption>
        {caption}
        <span className="nc-figure-source">
          Source: <a href={page}>{image.commons}</a> by {image.author}, from the
          Wikipedia article “<a href={image.article.url}>{image.article.title}</a>”,
          Wikimedia Commons, <a href={licenseUrl[image.license]}>{image.license}</a>
          {image.changes ? `; ${image.changes}` : ''}.
        </span>
      </figcaption>
    </figure>
  );
}
