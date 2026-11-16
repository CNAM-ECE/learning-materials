import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const rfc8655 = 'https://www.rfc-editor.org/rfc/rfc8655';

function Rfc({figure}: {figure: string}): ReactNode {
  return (
    <>
      redrawn after N. Finn, P. Thubert, B. Varga, J. Farkas,{' '}
      <a href={rfc8655}>RFC 8655</a>, <em>Deterministic Networking Architecture</em>,
      October 2019, {figure}.
    </>
  );
}

/** RFC 8655 Figure 3: a simple DetNet-enabled network. */
export function DetnetNetworkFigure(): ReactNode {
  return (
    <Figure
      height={270}
      label="A TSN end system, an edge node, a transit node, a relay node and a DetNet end system, with the application, service and forwarding layers of each and the links and sub-networks between them"
      caption="Figure 1. A simple DetNet-enabled network. DetNet adds a service sub-layer and a forwarding sub-layer to existing nodes; an existing TSN end system joins through the service proxy of an edge node."
      source={<Rfc figure="Figure 3" />}>
      <Txt x={70} y={14} size={12} bold>TSN end system</Txt>
      <Txt x={215} y={14} size={12} bold>Edge node</Txt>
      <Txt x={360} y={14} size={12} bold>Transit node</Txt>
      <Txt x={505} y={14} size={12} bold>Relay node</Txt>
      <Txt x={650} y={14} size={12} bold>DetNet end system</Txt>

      {/* TSN end system */}
      <Box x={15} y={34} w={110} h={34} lines={['Application']} size={12} tone="muted" />
      <Box x={15} y={78} w={110} h={34} lines={['TSN']} size={12} tone="service" />
      <Box x={15} y={122} w={110} h={34} lines={['Forwarding']} size={12} />

      {/* Edge node */}
      <Box x={160} y={34} w={110} h={34} lines={['Service proxy']} size={12} tone="muted" dashed />
      <Box x={160} y={78} w={52} h={34} lines={['TSN']} size={12} tone="service" />
      <Box x={218} y={78} w={52} h={34} lines={['Service']} size={12} tone="arrival" />
      <Box x={160} y={122} w={52} h={34} lines={['Fwd']} size={12} />
      <Box x={218} y={122} w={52} h={34} lines={['Fwd']} size={12} />

      {/* Transit node */}
      <Box x={305} y={122} w={110} h={34} lines={['Forwarding']} size={12} />

      {/* Relay node */}
      <Box x={450} y={78} w={110} h={34} lines={['Service']} size={12} tone="arrival" />
      <Box x={450} y={122} w={52} h={34} lines={['Fwd']} size={12} />
      <Box x={508} y={122} w={52} h={34} lines={['Fwd']} size={12} />

      {/* DetNet end system */}
      <Box x={595} y={34} w={110} h={34} lines={['Application']} size={12} tone="muted" />
      <Box x={595} y={78} w={110} h={34} lines={['Service']} size={12} tone="arrival" />
      <Box x={595} y={122} w={110} h={34} lines={['Forwarding']} size={12} />

      {/* Services */}
      <Arrow d="M125,51 H160" tone="muted" heads="both" />
      <Arrow d="M270,51 H595" tone="muted" heads="both" />
      <Txt x={432} y={41} size={11.5} italic>end-to-end service</Txt>
      <Arrow d="M270,95 H450" tone="arrival" heads="both" />
      <Arrow d="M560,95 H595" tone="arrival" heads="both" />
      <Txt x={360} y={85} size={11.5} italic tone="arrival">DetNet flow</Txt>

      {/* Links and sub-networks */}
      <Arrow d="M70,156 V205 H186 V156" heads="none" />
      <Txt x={128} y={218} size={11}>link</Txt>
      <Arrow d="M244,156 V205 H333 V156" heads="none" />
      <ellipse cx={288} cy={205} rx={40} ry={15} fill="var(--nc-fig-muted-fill)" stroke="var(--nc-fig-stroke)" strokeWidth="1.3" />
      <Txt x={288} y={205} size={10.5}>sub-network</Txt>
      <Arrow d="M387,156 V205 H476 V156" heads="none" />
      <Txt x={432} y={218} size={11}>link</Txt>
      <Arrow d="M534,156 V205 H650 V156" heads="none" />
      <ellipse cx={592} cy={205} rx={40} ry={15} fill="var(--nc-fig-muted-fill)" stroke="var(--nc-fig-stroke)" strokeWidth="1.3" />
      <Txt x={592} y={205} size={10.5}>sub-network</Txt>

      <Txt x={360} y={250} size={11.5} italic>
        a sub-network can itself be deterministic, for example an IEEE 802.1 TSN bridged network
      </Txt>
    </Figure>
  );
}

/** RFC 8655 Figures 2 and 4: data-plane stack and example technologies. */
export function DetnetStackFigure(): ReactNode {
  return (
    <Figure
      height={290}
      label="DetNet data-plane protocol stack at source and destination, with a service sub-layer, a forwarding sub-layer and lower layers, and example technologies for each"
      caption="Figure 2. The DetNet data-plane protocol stack, with example technologies that can realise each sub-layer."
      source={<Rfc figure="Figures 2 and 4" />}>
      <Box x={30} y={20} w={210} h={32} lines={['Source']} title size={12.5} tone="muted" />
      <Box x={30} y={52} w={210} h={84} lines={['Service sub-layer', 'packet sequencing', 'flow replication', 'packet encoding']} title size={12} tone="arrival" />
      <Box x={30} y={136} w={210} h={66} lines={['Forwarding sub-layer', 'resource allocation', 'explicit routes']} title size={12} tone="service" />
      <Box x={30} y={202} w={210} h={32} lines={['Lower layers']} size={12} />

      <Box x={270} y={20} w={210} h={32} lines={['Destination']} title size={12.5} tone="muted" />
      <Box x={270} y={52} w={210} h={84} lines={['Service sub-layer', 'duplicate elimination', 'flow merging', 'packet decoding']} title size={12} tone="arrival" />
      <Box x={270} y={136} w={210} h={66} lines={['Forwarding sub-layer', 'resource allocation', 'explicit routes']} title size={12} tone="service" />
      <Box x={270} y={202} w={210} h={32} lines={['Lower layers']} size={12} />

      <Arrow d="M135,234 V262 H375 V236" />
      <Txt x={255} y={274} size={11} italic>packets go down the source stack and up the destination stack</Txt>

      <Txt x={610} y={36} size={12} bold>Example technologies</Txt>
      <Box x={510} y={52} w={200} h={84} lines={['pseudowire (PW),', 'UDP, GRE']} size={12} dashed />
      <Box x={510} y={136} w={200} h={66} lines={['IPv6, IPv4,', 'MPLS TE LSPs, MPLS SR']} size={12} dashed />
      <Box x={510} y={202} w={200} h={32} lines={['TSN, MPLS-TE, OTN']} size={12} dashed />
    </Figure>
  );
}

/** RFC 8655 Figure 7 and Section 4.4: the three planes. */
export function DetnetPlanesFigure(): ReactNode {
  return (
    <Figure
      height={270}
      label="Application plane, controller plane and network plane of DetNet, separated by the northbound and southbound interfaces"
      caption="Figure 3. The three planes of the DetNet architecture. Controller Plane Functions (CPFs) compute paths and install per-flow behaviour in the DetNet nodes."
      source={<Rfc figure="Figure 7 and Section 4.4" />}>
      <Txt x={14} y={45} size={12} bold anchor="start">Application</Txt>
      <Txt x={14} y={61} size={12} bold anchor="start">plane</Txt>
      <Box x={130} y={30} w={270} h={44} lines={['User agent']} size={12} tone="muted" />
      <Box x={420} y={30} w={280} h={44} lines={['Flow management entity', 'negotiates flows from traffic specifications']} title size={11.5} tone="muted" />

      <Arrow d="M130,92 H700" tone="muted" dashed heads="none" />
      <Txt x={14} y={92} size={11} italic anchor="start">northbound</Txt>

      <Txt x={14} y={123} size={12} bold anchor="start">Controller</Txt>
      <Txt x={14} y={139} size={12} bold anchor="start">plane</Txt>
      <Box x={130} y={110} w={180} h={44} lines={['CPF', 'path computation (PCE)']} title size={11.5} tone="arrival" />
      <Box x={325} y={110} w={180} h={44} lines={['CPF', 'network management']} title size={11.5} tone="arrival" />
      <Box x={520} y={110} w={180} h={44} lines={['CPF', 'distributed control protocol']} title size={11.5} tone="arrival" />

      <Arrow d="M130,172 H700" tone="muted" dashed heads="none" />
      <Txt x={14} y={172} size={11} italic anchor="start">southbound</Txt>

      <Txt x={14} y={205} size={12} bold anchor="start">Network</Txt>
      <Txt x={14} y={221} size={12} bold anchor="start">plane</Txt>
      <Arrow d="M130,213 H700" heads="none" />
      <Box x={130} y={192} w={70} h={42} lines={['NIC']} size={12} />
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} x={222 + i * 98} y={192} w={84} h={42} lines={['DetNet', 'node']} size={11.5} tone="service" />
      ))}
      <Box x={630} y={192} w={70} h={42} lines={['NIC']} size={12} />
      <Txt x={415} y={252} size={11} italic>end-system network interfaces and DetNet nodes: data plane and OAM</Txt>

      <Arrow d="M264,154 V190" tone="arrival" />
      <Arrow d="M362,154 V190" tone="arrival" />
      <Arrow d="M558,154 V190" tone="arrival" />
    </Figure>
  );
}

/** RFC 8655 Figure 10: IP nodes interconnected by an Ethernet (TSN) domain. */
export function DetnetOverTsnFigure(): ReactNode {
  return (
    <Figure
      height={230}
      label="Two IP DetNet nodes connected through two Ethernet bridges; the first IP node pushes an Ethernet flow identifier, the bridges forward on it, and the far IP node recognises the flow and continues at layer 3"
      caption="Figure 4. DetNet IP nodes interconnected by an Ethernet domain: the DetNet flow is mapped to a Layer 2 flow identifier, which is all the bridges need to give it TSN treatment."
      source={<Rfc figure="Figure 10" />}>
      <Arrow d="M30,34 H690" tone="arrival" heads="both" />
      <Txt x={360} y={18} size={12} tone="arrival" bold>IP domain: DetNet, Layer 3</Txt>

      <Box x={30} y={70} w={110} h={46} lines={['IP-A', 'DetNet node']} title size={12} tone="arrival" />
      <Box x={220} y={70} w={110} h={46} lines={['ETH-1', 'TSN bridge']} title size={12} tone="service" />
      <Box x={390} y={70} w={110} h={46} lines={['ETH-2', 'TSN bridge']} title size={12} tone="service" />
      <Box x={580} y={70} w={110} h={46} lines={['IP-1', 'DetNet node']} title size={12} tone="arrival" />

      <Arrow d="M140,93 H220" />
      <Arrow d="M330,93 H390" />
      <Arrow d="M500,93 H580" />

      <Txt x={85} y={134} size={11.5}>pushes an Ethernet</Txt>
      <Txt x={85} y={149} size={11.5}>flow ID (ETH-ID)</Txt>
      <Txt x={360} y={134} size={11.5}>forward as per ETH-ID,</Txt>
      <Txt x={360} y={149} size={11.5}>L3 identifier not inspected</Txt>
      <Txt x={635} y={134} size={11.5}>recognises the flow,</Txt>
      <Txt x={635} y={149} size={11.5}>continues at Layer 3</Txt>

      <Arrow d="M220,182 H500" tone="service" heads="both" />
      <Txt x={360} y={200} size={12} tone="service" bold>Ethernet domain: TSN sub-network, Layer 2</Txt>
    </Figure>
  );
}
