import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const farkasConcepts =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf';
const farkasOverview =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-overview-1118-v01.pdf';
const charter = 'https://datatracker.ietf.org/wg/detnet/about/';

/** The seven OSI layers, with Layers 4 to 7 grouped as the end-to-end functions. */
const osiLayers = [
  'Application (L7)',
  'Presentation (L6)',
  'Session (L5)',
  'Transport (L4)',
  'Network (L3)',
  'Data link (L2)',
  'Physical (L1)',
];

/** Where the two standardisation efforts sit in the existing protocol stack. */
export function StackPlacementFigure(): ReactNode {
  const rowY = (i: number): number => 34 + i * 44;
  return (
    <Figure
      height={348}
      label="The seven OSI layers, with IETF DetNet at the network layer, IEEE 802.1 TSN at the data link layer, and network calculus as the analysis applied to both"
      caption="Figure 1. Deterministic networking extends the existing stack at two layers, where network calculus is the analysis applied to the configured result."
      source={
        <>
          Inspiration from the IEEE 802 / OSI placement in J. Farkas,{' '}
          <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a> (slide 4, 2018), and
          the scope stated in the <a href={charter}>IETF DetNet charter</a>.
        </>
      }>
      <Txt x={95} y={16} size={12} bold>OSI layer</Txt>
      <Txt x={375} y={16} size={12} bold>Deterministic extension</Txt>
      <Txt x={650} y={16} size={12} bold>Guarantee</Txt>

      {osiLayers.map((layer, i) => (
        <g key={layer}>
          <Box x={20} y={rowY(i)} w={150} h={38} lines={[layer]} size={12} tone={i < 4 ? 'muted' : 'plain'} />
          <Arrow d={`M170,${rowY(i) + 19} H230`} heads="none" />
        </g>
      ))}

      <Box x={230} y={rowY(0)} w={290} h={3 * 44 + 38} lines={['End-to-end functions (L4–L7)', 'applications and transport protocols', 'see a network with bounded latency']} title size={12} tone="muted" dashed />
      <Box x={230} y={rowY(4)} w={290} h={38} lines={['IETF DetNet', 'routed segments: IP, MPLS']} title tone="arrival" size={11} />
      <Box x={230} y={rowY(5)} w={290} h={38} lines={['IEEE 802.1 TSN', 'bridged segments: IEEE 802.1Q']} title tone="service" size={11} />
      <Box x={230} y={rowY(6)} w={290} h={38} lines={['IEEE 802.3 Ethernet, IEEE 802.11, …']} tone="plain" size={11.5} />

      <Box x={590} y={rowY(4)} w={120} h={82} lines={['Network calculus', 'worst-case delay', 'and backlog bounds']} title size={11} />
      <Arrow d={`M520,${rowY(4) + 19} H590`} tone="muted" dashed />
      <Arrow d={`M520,${rowY(5) + 19} H590`} tone="muted" dashed />
    </Figure>
  );
}

/** Latency distribution of a traditional service against a deterministic one. */
export function ServiceComparisonFigure(): ReactNode {
  return (
    <Figure
      height={250}
      label="Two latency distributions: a traditional service with a long tail beyond the application requirement, and a deterministic service entirely below the requirement"
      caption="Figure 2. A traditional service has a good average and a long tail whereas a deterministic service has no tail beyond the bound."
      source={
        <>
          redrawn after J. Farkas, <a href={farkasConcepts}>TSN Basic Concepts</a>,
          DetNet–TSN workshop (slide 4), 11 November 2018.
        </>
      }>
      <Txt x={185} y={16} size={13} bold>Traditional service</Txt>
      <Txt x={545} y={16} size={13} bold>Deterministic service</Txt>

      {/* Left panel */}
      <Arrow d="M40,200 H335" />
      <Arrow d="M40,200 V35" />
      <Txt x={185} y={222} size={12}>end-to-end latency</Txt>
      <Txt x={46} y={30} size={12} anchor="start">probability</Txt>
      <path
        d="M40,200 C90,200 100,60 140,60 C185,60 200,175 330,193"
        fill="none"
        stroke="var(--nc-arrival)"
        strokeWidth="2.5"
      />
      <Arrow d="M250,200 V45" tone="muted" dashed heads="none" />
      <Txt x={257} y={60} size={11} anchor="start">application</Txt>
      <Txt x={257} y={74} size={11} anchor="start">requirement</Txt>
      <Txt x={292} y={165} size={11} tone="arrival">late or lost</Txt>
      <Txt x={140} y={48} size={11}>good average</Txt>

      {/* Right panel */}
      <Arrow d="M400,200 H695" />
      <Arrow d="M400,200 V35" />
      <Txt x={640} y={216} size={12}>end-to-end latency</Txt>
      <Txt x={406} y={30} size={12} anchor="start">probability</Txt>
      <path
        d="M400,200 H470 C490,200 495,60 520,60 C545,60 550,200 570,200 H690"
        fill="none"
        stroke="var(--nc-service)"
        strokeWidth="2.5"
      />
      <Arrow d="M610,200 V45" tone="muted" dashed heads="none" />
      <Txt x={617} y={60} size={11} anchor="start">application</Txt>
      <Txt x={617} y={74} size={11} anchor="start">requirement</Txt>
      <Txt x={520} y={48} size={11}>bounded, no tail</Txt>
      <Arrow d="M472,214 H568" tone="service" heads="both" />
      <Txt x={520} y={232} size={11} tone="service">bounded delay variation</Txt>
    </Figure>
  );
}

/** What each layer contributes to a deterministic path, and where SDN sits. */
export function LayerRolesFigure(): ReactNode {
  type Row = {
    label: string;
    lines: string[];
    tone: 'plain' | 'muted' | 'arrival' | 'service';
    h?: number;
    dashed?: boolean;
  };
  const rows: Row[] = [
    {label: 'Application (L7)', lines: ['Application services', 'control loops, audio and video, OPC UA'], tone: 'muted'},
    {label: 'Presentation (L6)', lines: ['Data representation', 'encoding, compression, encryption'], tone: 'muted'},
    {label: 'Session (L5)', lines: ['Dialogue control', 'open, synchronise and close sessions'], tone: 'muted'},
    {label: 'Transport (L4)', lines: ['End-to-end transport', 'UDP or TCP; no congestion feedback on DetNet flows'], tone: 'muted'},
    {label: 'Network (L3)', lines: ['IETF DetNet over IP and MPLS', 'service sub-layer: replication, elimination, ordering', 'forwarding sub-layer: resources, explicit routes'], tone: 'arrival', h: 52},
    {label: 'L3 → L2', lines: ['DetNet flow → TSN stream', 'matched on destination MAC, VLAN ID and priority (802.1CB)'], tone: 'plain', dashed: true},
    {label: 'Data link (L2)', lines: ['IEEE 802.1 TSN bridges', 'policing, shaping, gates, preemption, FRER, reservation'], tone: 'service'},
    {label: 'Physical (L1)', lines: ['IEEE 802.3 Ethernet, IEEE 802.11, …', 'MAC Merge sublayer for preemption (802.3br)'], tone: 'plain'},
  ];
  let y = 36;
  const placed = rows.map((row) => {
    const h = row.h ?? 38;
    const at = {row, y, h};
    y += h + 8;
    return at;
  });
  const timeY = y + 4;
  const center = (i: number): number => placed[i].y + placed[i].h / 2;
  return (
    <Figure
      height={timeY + 44}
      label="The seven OSI layers with the function each provides in a deterministic path: end-to-end functions in Layers 4 to 7, DetNet at Layer 3, a mapping of DetNet flows to TSN streams, TSN at Layer 2, Ethernet at Layer 1, a common time base under every layer, and an SDN controller configuring Layers 3 and 2"
      caption="Figure 4. What each layer contributes to a deterministic path. A software-defined controller configures both the routed (DetNet) and the bridged (TSN) segments, and every node shares one time base."
      source={
        <>
          own drawing, after the operation and traffic-engineering sections of the{' '}
          <a href="https://en.wikipedia.org/wiki/Deterministic_Networking">Wikipedia article on DetNet</a>,
          the sub-layers of <a href="https://www.rfc-editor.org/rfc/rfc8655">RFC 8655</a>, and J. Farkas,{' '}
          <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a> (2018).
        </>
      }>
      <Txt x={77} y={16} size={12} bold>OSI layer</Txt>
      <Txt x={355} y={16} size={12} bold>Function in a deterministic path</Txt>
      <Txt x={652} y={16} size={12} bold>Control</Txt>

      {placed.map(({row, y: top, h}) => (
        <g key={row.label}>
          <Box x={10} y={top} w={135} h={h} lines={[row.label]} title size={11.5} tone="muted" dashed={row.dashed} />
          <Arrow d={`M145,${top + h / 2} H185`} heads="none" />
          <Box x={185} y={top} w={340} h={h} lines={row.lines} title size={10.5} tone={row.tone} dashed={row.dashed} />
        </g>
      ))}

      <Box x={10} y={timeY} w={515} h={32} lines={['Common time at every node: gPTP (802.1AS), a profile of IEEE 1588 PTP']} size={11} tone="service" />

      <Box x={595} y={placed[4].y} w={115} h={placed[6].y + placed[6].h - placed[4].y} lines={['SDN controller', 'explicit routes', 'resource', 'reservation', 'IntServ + DiffServ', 'TSN: the CNC']} title size={10.5} tone="arrival" />
      <Arrow d={`M595,${center(4)} H527`} tone="arrival" dashed />
      <Arrow d={`M595,${center(6)} H527`} tone="arrival" dashed />
    </Figure>
  );
}
