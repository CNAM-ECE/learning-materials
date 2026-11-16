import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const farkasConcepts =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf';
const farkasOverview =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-overview-1118-v01.pdf';
const charter = 'https://datatracker.ietf.org/wg/detnet/about/';

/** Where the two standardisation efforts sit in the existing protocol stack. */
export function StackPlacementFigure(): ReactNode {
  const layers = ['Application', 'Transport', 'Network (L3)', 'Data link (L2)', 'Physical (L1)'];
  return (
    <Figure
      height={290}
      label="Protocol stack showing IETF DetNet at the network layer, IEEE 802.1 TSN at the data link layer, and network calculus as the analysis applied to both"
      caption="Figure 1. Deterministic networking extends the existing stack at two layers; network calculus is the analysis applied to the configured result."
      source={
        <>
          own drawing, after the IEEE 802 / OSI placement in J. Farkas,{' '}
          <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a> (2018), slide 4, and
          the scope stated in the <a href={charter}>IETF DetNet charter</a>.
        </>
      }>
      <Txt x={95} y={16} size={12} bold>Existing layer</Txt>
      <Txt x={360} y={16} size={12} bold>Deterministic extension</Txt>
      <Txt x={625} y={16} size={12} bold>Guarantee</Txt>

      {layers.map((layer, i) => (
        <Box key={layer} x={20} y={34 + i * 50} w={150} h={40} lines={[layer]} tone={i < 2 ? 'muted' : 'plain'} />
      ))}

      <Box x={200} y={34} w={320} h={90} lines={['unchanged:', 'applications and transport protocols', 'see a network with bounded latency']} tone="muted" dashed />
      <Box x={200} y={134} w={320} h={40} lines={['IETF DetNet', 'routed segments: IP, MPLS']} title tone="arrival" size={12} />
      <Box x={200} y={184} w={320} h={40} lines={['IEEE 802.1 TSN', 'bridged segments: IEEE 802.1Q']} title tone="service" size={12} />
      <Box x={200} y={234} w={320} h={40} lines={['IEEE 802.3 Ethernet, IEEE 802.11, …']} tone="plain" size={12} />

      <Arrow d="M170,154 H200" heads="none" />
      <Arrow d="M170,204 H200" heads="none" />
      <Arrow d="M170,254 H200" heads="none" />

      <Box x={550} y={134} w={150} h={90} lines={['Network calculus', 'worst-case delay', 'and backlog bounds']} title size={12} />
      <Arrow d="M520,154 H550" tone="muted" dashed />
      <Arrow d="M520,204 H550" tone="muted" dashed />
    </Figure>
  );
}

/** Latency distribution of a traditional service against a deterministic one. */
export function ServiceComparisonFigure(): ReactNode {
  return (
    <Figure
      height={250}
      label="Two latency distributions: a traditional service with a long tail beyond the application requirement, and a deterministic service entirely below the requirement"
      caption="Figure 2. A traditional service has a good average and a long tail; a deterministic service has no tail beyond the bound."
      source={
        <>
          redrawn after J. Farkas, <a href={farkasConcepts}>TSN Basic Concepts</a>,
          DetNet–TSN workshop, 11 November 2018, slide 4.
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
