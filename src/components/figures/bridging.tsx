import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const wikiMrp = 'https://en.wikipedia.org/wiki/Multiple_Registration_Protocol';
const tutorial = 'https://www.ieee802.org/802_tutorials/2013-03/8021-IETF-tutorial-final.pdf';

/** MRP: a declaration becomes a registration on the receiving port and is re-declared on the others. */
export function MrpFigure({caption}: {caption: ReactNode}): ReactNode {
  const bridges = [190, 370, 550];
  return (
    <Figure
      height={215}
      label="An end station declares an attribute, for example membership of VLAN 10. Each bridge registers it on the port where it arrives and declares it on its other ports, so every bridge learns through which port members can be reached"
      caption={caption}
      source={
        <>
          own drawing of MRP attribute declaration and propagation, after the{' '}
          <a href={wikiMrp}>Wikipedia article on MRP</a> and the{' '}
          <a href={tutorial}>IEEE 802.1Q tutorial</a>, IETF 86, 2013, slide 27.
        </>
      }>
      <Box x={10} y={70} w={110} h={46} lines={['End station', 'member of VLAN 10']} title size={10.5} />
      {bridges.map((x, i) => (
        <g key={x}>
          <Box x={x} y={60} w={130} h={66} lines={[`Bridge ${i + 1}`]} title size={11.5} tone="service" />
          <Box x={x - 2} y={80} w={26} h={26} lines={['R']} title size={11} tone="arrival" rx={2} />
          <Box x={x + 106} y={80} w={26} h={26} lines={['D']} title size={11} rx={2} />
        </g>
      ))}
      <Arrow d="M120,93 H188" tone="arrival" />
      <Arrow d="M322,93 H368" tone="arrival" />
      <Arrow d="M502,93 H548" tone="arrival" />
      <Txt x={154} y={80} size={10.5} tone="arrival">declare</Txt>

      <Txt x={360} y={24} size={11.5} italic>a declaration received on a port is registered (R) there,</Txt>
      <Txt x={360} y={42} size={11.5} italic>and declared (D) on the bridge’s other ports</Txt>

      <Arrow d="M610,160 H130" tone="service" dashed />
      <Txt x={370} y={176} size={11} tone="service">frames for VLAN 10 now reach the registering port, and only the ports that lead to members</Txt>
      <Txt x={370} y={200} size={10.5} italic>
        MRP applications: MVRP (VLANs) · MMRP (multicast MAC addresses) · MSRP (streams)
      </Txt>
    </Figure>
  );
}
