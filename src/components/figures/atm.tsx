import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt, type Tone} from '@site/src/components/Diagram';

const atmWiki = 'https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode';
const mplsWiki = 'https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching';

/** ATM and MPLS paths, with the network calculus objects attached to each part. */
export function AtmMplsFigure(): ReactNode {
  const row = (y: number, nodes: [string[], Tone][]): ReactNode =>
    nodes.map(([lines, tone], i) => {
      const x = [115, 235, 365, 495, 625][i];
      const w = i === 4 ? 85 : i === 0 ? 100 : 110;
      return (
        <g key={lines[0] + i}>
          <Box x={x} y={y} w={w} h={46} lines={lines} title size={10.5} tone={tone} />
          {i < 4 && <Arrow d={`M${x + w},${y + 23} H${[235, 365, 495, 625][i]}`} />}
        </g>
      );
    });
  return (
    <Figure
      height={270}
      label="An ATM virtual circuit, policed at the user-network interface and switched by VPI/VCI swapping, above an MPLS label-switched path with an ingress label edge router, label switch routers and an egress router; arrival curves apply at the entry and service curves at each hop"
      caption="Figure 1. ATM and MPLS have the same structure: a path fixed in advance, traffic checked at the entry, and a label swapped at every hop. Network calculus attaches an arrival curve to the entry and a service curve to each hop."
      source={
        <>
          own drawing, after the Wikipedia articles on{' '}
          <a href={atmWiki}>Asynchronous Transfer Mode</a> and{' '}
          <a href={mplsWiki}>Multiprotocol Label Switching</a>.
        </>
      }>
      <Box x={10} y={10} w={90} h={112} lines={['ATM', '1990s', 'fixed cells']} title size={11.5} tone="muted" />
      <Txt x={420} y={18} size={11} italic>virtual circuit (VPI/VCI): set up with call admission control, same path for every cell</Txt>
      <Arrow d="M235,32 H605" tone="muted" heads="both" />
      {row(45, [
        [['End system', 'segments into', '53-byte cells'], 'plain'],
        [['UNI', 'GCRA policing'], 'arrival'],
        [['ATM switch', 'swap VPI/VCI'], 'service'],
        [['ATM switch', 'swap VPI/VCI'], 'service'],
        [['End system'], 'plain'],
      ])}
      <Txt x={290} y={108} size={10.5} tone="arrival">arrival curve enforced</Txt>
      <Txt x={485} y={108} size={10.5} tone="service">service curve per hop</Txt>

      <Box x={10} y={145} w={90} h={112} lines={['MPLS', 'from 1997', 'labelled packets']} title size={11.5} tone="muted" />
      <Txt x={420} y={153} size={11} italic>label-switched path (LSP), e.g. set up by RSVP-TE with a bandwidth reservation</Txt>
      <Arrow d="M235,167 H605" tone="muted" heads="both" />
      {row(180, [
        [['IP network'], 'plain'],
        [['Ingress LER', 'FEC, push label'], 'arrival'],
        [['LSR', 'swap label'], 'service'],
        [['Egress LER', 'pop label'], 'service'],
        [['IP network'], 'plain'],
      ])}
      <Txt x={290} y={243} size={10.5} tone="arrival">edge policing: arrival curve</Txt>
      <Txt x={485} y={243} size={10.5} tone="service">per-class service: aggregates</Txt>
    </Figure>
  );
}

/** Bit layout of the ATM UNI cell header and of an MPLS label stack entry. */
export function HeaderFormatsFigure(): ReactNode {
  const px = 15;
  const x0 = 110;
  const fields = (y: number, list: [string, number, Tone][]): ReactNode => {
    let x = x0;
    return list.map(([name, bits, tone]) => {
      const box = (
        <Box
          key={name}
          x={x}
          y={y}
          w={bits * px}
          h={34}
          lines={bits >= 3 ? [name, bits === 3 || bits === 4 ? `${bits}` : `${bits} bits`] : []}
          title
          size={10}
          tone={tone}
          rx={0}
        />
      );
      x += bits * px;
      return box;
    });
  };
  return (
    <Figure
      height={190}
      label="The ATM cell header at the user-network interface, 40 bits: GFC 4, VPI 8, VCI 16, PT 3, CLP 1, HEC 8. The MPLS label stack entry, 32 bits: label 20, traffic class 3, bottom of stack 1, TTL 8"
      caption="Figure 2. The two headers, drawn to scale. Blue: the label that identifies the circuit or path at this hop, rewritten at every switch. Orange: the fields that carry a priority or loss class."
      source={
        <>
          own drawing from the field lists in the Wikipedia articles on{' '}
          <a href={atmWiki}>ATM</a> (cell structure) and <a href={mplsWiki}>MPLS</a>{' '}
          (operation).
        </>
      }>
      <Txt x={x0} y={18} size={11.5} anchor="start" bold>
        ATM cell header at the UNI: 5 bytes, followed by a 48-byte payload
      </Txt>
      {fields(32, [
        ['GFC', 4, 'muted'],
        ['VPI', 8, 'service'],
        ['VCI', 16, 'service'],
        ['PT', 3, 'plain'],
        ['CLP', 1, 'arrival'],
        ['HEC', 8, 'muted'],
      ])}
      <Txt x={x0 + 31 * px + 7.5} y={78} size={10} tone="arrival">CLP</Txt>
      <Txt x={10} y={49} size={11} anchor="start">40 bits</Txt>

      <Txt x={x0} y={112} size={11.5} anchor="start" bold>
        MPLS label stack entry: 4 bytes, one per label, between the layer-2 and IP headers
      </Txt>
      {fields(126, [
        ['Label', 20, 'service'],
        ['TC', 3, 'arrival'],
        ['S', 1, 'plain'],
        ['TTL', 8, 'muted'],
      ])}
      <Txt x={x0 + 23 * px + 7.5} y={172} size={10}>S</Txt>
      <Txt x={10} y={143} size={11} anchor="start">32 bits</Txt>
    </Figure>
  );
}
