import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

/**
 * Figures of the per-standard TSN posts and of the SDN post. Figures redrawn
 * from a paper name the paper and the figure in their source line.
 */

const xue = 'https://arxiv.org/abs/2305.16772';
const grigorjew = 'https://arxiv.org/abs/2610.11999';
const behnke = 'https://arxiv.org/abs/2311.08852';
const concepts =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf';
const tsnWiki = 'https://en.wikipedia.org/wiki/Time-Sensitive_Networking';
const sdnWiki = 'https://en.wikipedia.org/wiki/Software-defined_networking';

type Numbered = {
  /** Caption, starting with "Figure N." */
  caption: ReactNode;
};

function Grigorjew({fig}: {fig: string}): ReactNode {
  return (
    <>
      A. Grigorjew, S. Geissler, J. Schmitt, T. Hossfeld,{' '}
      <a href={grigorjew}>Decentralized Latency Models and Information Flow for TSN Shapers</a>,
      arXiv:2610.11999, 2026, {fig}
    </>
  );
}

/** 802.1AS: peer delay measurement on one link. */
export function PeerDelayFigure({caption}: Numbered): ReactNode {
  return (
    <Figure
      height={235}
      label="Peer delay measurement between two neighbouring ports: Pdelay_Req sent at t1 and received at t2, Pdelay_Resp sent at t3 and received at t4, with a follow-up message carrying t3"
      caption={caption}
      source={
        <>
          own drawing of the peer-to-peer delay mechanism of IEEE 802.1AS, after the
          description of 802.1AS in the <a href={tsnWiki}>Wikipedia article on TSN</a>.
        </>
      }>
      <Txt x={150} y={60} size={12} anchor="end">initiator port</Txt>
      <Txt x={150} y={170} size={12} anchor="end">responder port</Txt>
      <Arrow d="M160,60 H700" tone="muted" />
      <Arrow d="M160,170 H700" tone="muted" />

      <Arrow d="M220,60 L280,170" tone="service" />
      <Txt x={243} y={118} size={11} anchor="end" tone="service">Pdelay_Req</Txt>

      <Arrow d="M400,170 L460,60" tone="arrival" />
      <Txt x={420} y={118} size={11} anchor="end" tone="arrival">Pdelay_Resp (t2)</Txt>
      <Arrow d="M430,170 L490,60" tone="arrival" dashed />
      <Txt x={478} y={118} size={11} anchor="start" tone="arrival">Pdelay_Resp_Follow_Up (t3)</Txt>

      <Txt x={220} y={45} size={12} bold>t1</Txt>
      <Txt x={280} y={186} size={12} bold>t2</Txt>
      <Txt x={400} y={186} size={12} bold>t3</Txt>
      <Txt x={460} y={45} size={12} bold>t4</Txt>

      <Txt x={430} y={216} size={12}>
        mean link delay = ((t4 − t1) − (t3 − t2)) / 2, corrected by the neighbour rate ratio
      </Txt>
    </Figure>
  );
}

/** 802.1Qbv: the inputs of a TAS scheduling problem, after Xue et al. */
export function TasModelsFigure({caption}: Numbered): ReactNode {
  const rows: [string, string[]][] = [
    [
      'Network model',
      [
        'bridges and end stations; per link: propagation delay, processing delay, line rate',
        'egress queues for scheduled traffic (at most 8), maximum GCL length (8 to 1024)',
        'synchronisation error between clocks',
      ],
    ],
    [
      'Traffic model',
      [
        'per stream: release time, period, payload, deadline, jitter',
        'release time fixed by the scheduler (fully) or by the talker (partially schedulable)',
        'deadline implicit, constrained or arbitrary; jitter zero or bounded',
      ],
    ],
    [
      'Scheduling model',
      [
        'delay: no-wait, wait-allowed, or window-based',
        'queue isolation: none, FIFO, frame-based or stream-based',
        'fixed routing or joint routing and scheduling; optional fragmentation or preemption',
      ],
    ],
  ];
  return (
    <Figure
      height={335}
      label="The three models that define a time-aware shaper scheduling problem, network, traffic and scheduling, feeding a scheduler in the CNC that outputs one gate control list per egress port"
      caption={caption}
      source={
        <>
          own drawing, after the system models of Section II of C. Xue, T. Zhang, Y. Zhou,
          M. Nixon, A. Loveless, S. Han,{' '}
          <a href={xue}>Real-Time Scheduling for 802.1Qbv Time-Sensitive Networking (TSN): A
          Systematic Review and Experimental Study</a>, arXiv:2305.16772.
        </>
      }>
      {rows.map(([label, lines], i) => (
        <g key={label}>
          <Box x={10} y={10 + i * 82} w={145} h={70} lines={[label]} title size={12} tone="arrival" />
          <Box x={170} y={10 + i * 82} w={540} h={70} lines={lines} size={11} />
        </g>
      ))}
      <Arrow d="M440,244 V280" tone="service" />
      <Box x={240} y={280} w={400} h={46} lines={['Scheduler in the CNC', 'output: one gate control list per egress port']} title size={12} tone="service" />
    </Figure>
  );
}

/** 802.3br / 802.1Qbu: the MAC Merge sublayer under two MACs. */
export function MacMergeFigure({caption}: Numbered): ReactNode {
  return (
    <Figure
      height={305}
      label="A bridge port above an express MAC and a preemptable MAC, both above the MAC Merge sublayer, above the physical layer"
      caption={caption}
      source={
        <>
          own drawing, after the description of 802.3br and 802.1Qbu in{' '}
          <a href={concepts}>J. Farkas, TSN Basic Concepts</a>, 2018, slide 12, and the{' '}
          <a href={tsnWiki}>Wikipedia article on TSN</a>.
        </>
      }>
      <Box x={110} y={10} w={500} h={46} lines={['Bridge port (802.1Q, 802.1Qbu)', 'each priority is configured express or preemptable']} title size={12} tone="arrival" />
      <Arrow d="M245,56 V90" tone="service" />
      <Arrow d="M475,56 V90" />

      <Box x={150} y={90} w={190} h={46} lines={['express MAC (eMAC)', 'time-critical frames']} title size={11.5} tone="service" />
      <Box x={380} y={90} w={190} h={46} lines={['preemptable MAC (pMAC)', 'all other frames']} title size={11.5} />
      <Arrow d="M245,136 V170" tone="service" />
      <Arrow d="M475,136 V170" />

      <Box x={110} y={170} w={500} h={58} lines={['MAC Merge sublayer (802.3br)', 'suspends a pMAC frame to send an eMAC frame, then resumes it;', 'every fragment is at least 64 bytes']} title size={11.5} />
      <Arrow d="M360,228 V262" heads="both" />
      <Box x={110} y={262} w={500} h={34} lines={['Ethernet PHY and the link']} size={12} tone="muted" />
    </Figure>
  );
}

/** 802.1Qch: CQF as a joint configuration of PSFP and TAS, after Grigorjew et al. */
export function CqfGatesFigure({caption}: Numbered): ReactNode {
  const bridge = (dx: number, name: string): ReactNode => (
    <g>
      <Box x={dx} y={20} w={330} h={160} lines={[]} dashed tone="muted" />
      <Txt x={dx + 165} y={36} size={12} bold>{name}</Txt>
      <Box x={dx + 12} y={70} w={80} h={70} lines={['PSFP', 'assigns', 'IPV 7']} title size={11} tone="service" />
      <Box x={dx + 120} y={55} w={110} h={34} lines={['queue 7: filling']} size={10.5} tone="service" />
      <Box x={dx + 120} y={120} w={110} h={34} lines={['queue 6: draining']} size={10.5} tone="arrival" />
      <Box x={dx + 245} y={55} w={78} h={99} lines={['TAS', 'gate 7 closed', 'gate 6 open']} title size={10.5} />
      <Arrow d={`M${dx + 92},95 H${dx + 106} V72 H${dx + 120}`} tone="service" />
      <Arrow d={`M${dx + 92},115 H${dx + 106} V137 H${dx + 120}`} tone="muted" dashed />
      <Arrow d={`M${dx + 230},72 H${dx + 245}`} tone="muted" dashed />
      <Arrow d={`M${dx + 230},137 H${dx + 245}`} tone="arrival" />
    </g>
  );
  return (
    <Figure
      height={250}
      label="Two bridges with identical cyclic queuing configuration: in each, PSFP puts arriving frames into queue 7 while TAS transmits from queue 6; in the next slot the roles swap"
      caption={caption}
      source={
        <>
          own drawing, after <Grigorjew fig="Fig. 12 and Section VI-C." />
        </>
      }>
      {bridge(10, 'Bridge A')}
      {bridge(380, 'Bridge B')}
      <Arrow d="M333,105 H392" tone="arrival" />
      <Txt x={360} y={92} size={10.5} italic>link</Txt>

      <Txt x={100} y={224} size={11.5} anchor="end">time:</Txt>
      <Box x={110} y={210} w={300} h={28} lines={['slot of length T: PSFP → IPV 7, TAS opens gate 6']} size={10.5} tone="service" rx={0} />
      <Box x={410} y={210} w={300} h={28} lines={['next slot: PSFP → IPV 6, TAS opens gate 7']} size={10.5} tone="arrival" rx={0} />
    </Figure>
  );
}

/** Shaper-to-shaper delay segments, after Grigorjew et al. */
export function DelaySegmentsFigure({caption}: Numbered): ReactNode {
  const bridge = (dx: number, name: string): ReactNode => (
    <g>
      <Box x={dx} y={25} w={330} h={95} lines={[]} dashed tone="muted" />
      <Txt x={dx + 165} y={42} size={12} bold>{name}</Txt>
      <Box x={dx + 10} y={60} w={90} h={48} lines={['processing']} size={11} />
      <Box x={dx + 110} y={60} w={90} h={48} lines={['shaper']} size={11} tone="service" />
      <Box x={dx + 210} y={60} w={110} h={48} lines={['priority queue', 'and transmission']} size={10.5} tone="arrival" />
      <Arrow d={`M${dx + 100},84 H${dx + 110}`} />
      <Arrow d={`M${dx + 200},84 H${dx + 210}`} />
    </g>
  );
  return (
    <Figure
      height={205}
      label="Two bridges, each made of processing, a shaper and a priority queue; one delay segment runs from the end of the upstream shaper to the end of the downstream shaper"
      caption={caption}
      source={
        <>
          own drawing, after <Grigorjew fig="Figs. 4 and 5." />
        </>
      }>
      {bridge(10, 'Upstream bridge')}
      {bridge(380, 'Downstream bridge')}
      <Arrow d="M330,84 H390" />

      <Arrow d="M210,110 V150" tone="muted" dashed heads="none" />
      <Arrow d="M580,110 V150" tone="muted" dashed heads="none" />
      <Arrow d="M20,150 H208" tone="muted" dashed />
      <Arrow d="M212,150 H578" tone="service" heads="both" />
      <Arrow d="M582,150 H708" tone="muted" dashed />
      <Txt x={110} y={168} size={11} italic>previous segment</Txt>
      <Txt x={395} y={168} size={11.5} tone="service">one delay segment, bounded by the downstream bridge:</Txt>
      <Txt x={395} y={185} size={11.5} tone="service">upstream queue, link, downstream processing and shaping</Txt>
      <Txt x={645} y={168} size={11} italic>next segment</Txt>
    </Figure>
  );
}

/** 802.1Qci: the PSFP tables a frame passes through. */
export function PsfpTablesFigure({caption}: Numbered): ReactNode {
  const boxes: string[][] = [
    ['Stream identification', 'per 802.1CB: MAC', 'address, VLAN ID', 'or IP fields → handle'],
    ['Stream filter', 'match stream handle', 'and priority; check', 'maximum SDU size'],
    ['Stream gate', 'open or closed by its', 'gate control list;', 'sets internal priority'],
    ['Flow meter', 'CIR, CBS, EIR, EBS', '(MEF 10.3 profile)', 'green, yellow, red'],
  ];
  return (
    <Figure
      height={215}
      label="A frame passes stream identification, a stream filter, a stream gate and a flow meter; frames that are too long, meet a closed gate or are marked red are discarded, the others go to queuing"
      caption={caption}
      source={
        <>
          own drawing, after the stream filter, stream gate and flow meter of{' '}
          <a href={concepts}>J. Farkas, TSN Basic Concepts</a>, 2018, slide 13, and the{' '}
          <a href={tsnWiki}>Wikipedia article on TSN</a>.
        </>
      }>
      {boxes.map((lines, i) => (
        <g key={lines[0]}>
          <Box x={8 + i * 180} y={15} w={158} h={100} lines={lines} title size={10.5} tone={i === 0 ? 'arrival' : 'service'} />
          {i < 3 && <Arrow d={`M${166 + i * 180},65 H${188 + i * 180}`} />}
        </g>
      ))}
      <Box x={188} y={160} w={338} h={40} lines={['discarded and counted: too long, gate closed, or red']} size={11} tone="muted" dashed />
      <Box x={548} y={160} w={158} h={40} lines={['to queuing']} title size={11.5} tone="service" />
      <Arrow d="M267,115 V160" tone="muted" dashed />
      <Arrow d="M447,115 V160" tone="muted" dashed />
      <Arrow d="M570,115 L510,160" tone="muted" dashed />
      <Arrow d="M650,115 V160" tone="service" />
    </Figure>
  );
}

/** 802.1CB: the functions on the replicating and the eliminating side. */
export function FrerFunctionsFigure({caption}: Numbered): ReactNode {
  const left: string[][] = [
    ['Stream identification'],
    ['Sequence generation', 'one number per frame'],
    ['Stream splitting', 'one copy per member stream'],
    ['Sequence encode', 'R-TAG, HSR or PRP tag'],
  ];
  const right: string[][] = [
    ['Sequence decode', 'read the sequence number'],
    ['Individual recovery', 'optional, per member stream'],
    ['Sequence recovery', 'vector or match algorithm'],
    ['Latent error detection', 'alarm if a path goes silent'],
  ];
  const column = (x: number, items: string[][], tone: 'service' | 'arrival'): ReactNode =>
    items.map((lines, i) => (
      <g key={lines[0]}>
        <Box x={x} y={36 + i * 54} w={280} h={42} lines={lines} title size={11} tone={tone} />
        {i < 3 && <Arrow d={`M${x + 140},${78 + i * 54} V${90 + i * 54}`} />}
      </g>
    ));
  return (
    <Figure
      height={255}
      label="Functions of frame replication and elimination: on the replicating side stream identification, sequence generation, splitting and encoding; on the eliminating side decoding, individual recovery, sequence recovery and latent error detection"
      caption={caption}
      source={
        <>
          own drawing of the functions named in IEEE 802.1CB, after{' '}
          <a href={concepts}>J. Farkas, TSN Basic Concepts</a>, 2018, slide 16, and the{' '}
          <a href={tsnWiki}>Wikipedia article on TSN</a>.
        </>
      }>
      <Txt x={160} y={18} size={12} bold>Replicating side (talker or bridge)</Txt>
      <Txt x={560} y={18} size={12} bold>Eliminating side (bridge or listener)</Txt>
      {column(20, left, 'service')}
      {column(420, right, 'arrival')}
      <Arrow d="M300,210 H340 V50 H420" tone="service" />
      <Arrow d="M300,226 H380 V64 H420" tone="service" />
      <Txt x={334} y={140} size={11} anchor="end" tone="service">path 1</Txt>
      <Txt x={386} y={140} size={11} anchor="start" tone="service">path 2</Txt>
    </Figure>
  );
}

/** Stream reservation: what a talker announcement carries hop by hop. */
export function ReservationFlowFigure({caption}: Numbered): ReactNode {
  const nodes: [number, string][] = [
    [10, 'Talker'],
    [210, 'Bridge A'],
    [410, 'Bridge B'],
    [600, 'Listener'],
  ];
  const messages: [number, string[]][] = [
    [75, ['Talker announce', 'burst 120 B, rate 175 kbit/s', 'acc. max latency 500 µs']],
    [275, ['Talker announce', 'same traffic specification', 'acc. max latency 1.5 ms']],
    [470, ['Talker announce', 'same traffic specification', 'acc. max latency 2.2 ms']],
  ];
  return (
    <Figure
      height={250}
      label="A talker announcement travels from the talker through two bridges to the listener; its traffic specification stays the same and its accumulated maximum latency grows at each hop; the listener's ready message travels back"
      caption={caption}
      source={
        <>
          own drawing, after <Grigorjew fig="Fig. 7 (values from that example)." />
        </>
      }>
      {messages.map(([x, lines]) => (
        <g key={x}>
          <Box x={x} y={15} w={180} h={66} lines={lines} title size={10.5} tone="service" />
          <Arrow d={`M${x + 90},81 V170`} tone="muted" dashed />
        </g>
      ))}
      {nodes.map(([x, name]) => (
        <Box key={name} x={x} y={158} w={110} h={40} lines={[name]} title size={12} />
      ))}
      <Arrow d="M120,178 H210" tone="service" />
      <Arrow d="M320,178 H410" tone="service" />
      <Arrow d="M520,178 H600" tone="service" />
      <Arrow d="M655,198 V222 H65 V198" tone="arrival" dashed />
      <Txt x={360} y={236} size={11.5} tone="arrival">
        listener ready travels back; each bridge commits its resources
      </Txt>
    </Figure>
  );
}

/** SDN planes and their TSN counterparts. */
export function SdnTsnPlanesFigure({caption}: Numbered): ReactNode {
  return (
    <Figure
      height={290}
      label="SDN application, control and data planes mapped onto TSN: the CUC and other applications in the application plane, the CNC as SDN controller in the control plane, TSN bridges in the data plane"
      caption={caption}
      source={
        <>
          own drawing, after the SDN architecture in the{' '}
          <a href={sdnWiki}>Wikipedia article on SDN</a>, the 802.1Qcc models in the{' '}
          <a href={tsnWiki}>Wikipedia article on TSN</a>, and the CUC/CNC discussion of I.
          Behnke, H. Austad, <a href={behnke}>Real-Time Performance of Industrial IoT
          Communication Technologies: A Review</a>, arXiv:2311.08852, Section III-D.
        </>
      }>
      <Box x={10} y={15} w={145} h={60} lines={['Application', 'plane']} title size={12} tone="muted" />
      <Box x={10} y={110} w={145} h={60} lines={['Control', 'plane']} title size={12} tone="muted" />
      <Box x={10} y={215} w={145} h={60} lines={['Data', 'plane']} title size={12} tone="muted" />

      <Box x={170} y={15} w={262} h={60} lines={['CUC', 'end-station requirements:', 'PLC tools, OPC UA, engineering']} title size={10.5} tone="arrival" />
      <Box x={448} y={15} w={262} h={60} lines={['Other SDN applications', 'routing policy, monitoring,', 'reconfiguration']} title size={10.5} tone="arrival" />

      <Box x={170} y={110} w={540} h={60} lines={['CNC = SDN controller', 'topology discovery, path computation, gate schedules, admission control']} title size={11.5} tone="service" />

      <Box x={170} y={215} w={160} h={60} lines={['TSN bridge', 'gates, shapers, PSFP']} title size={10.5} />
      <Box x={360} y={215} w={160} h={60} lines={['TSN bridge', 'queues, FRER']} title size={10.5} />
      <Box x={550} y={215} w={160} h={60} lines={['TSN bridge', 'gPTP, preemption']} title size={10.5} />

      <Arrow d="M200,75 V110" tone="arrival" heads="both" />
      <Arrow d="M680,75 V110" tone="arrival" heads="both" />
      <Txt x={210} y={92} size={10.5} italic anchor="start">northbound: user/network interface (802.1Qcc)</Txt>

      <Arrow d="M185,170 V215" tone="service" dashed heads="both" />
      <Arrow d="M375,170 V215" tone="service" dashed heads="both" />
      <Arrow d="M565,170 V215" tone="service" dashed heads="both" />
      <Txt x={193} y={192} size={10.5} italic anchor="start">NETCONF / RESTCONF + YANG</Txt>
      <Txt x={383} y={192} size={10.5} italic anchor="start">or OpenFlow</Txt>
      <Txt x={573} y={192} size={10.5} italic anchor="start">southbound</Txt>
    </Figure>
  );
}

/** The three configuration models of 802.1Qcc side by side. */
export function ConfigurationModelsFigure({caption}: Numbered): ReactNode {
  const chain = (px: number): ReactNode => (
    <g>
      {[
        [8, 'ES'],
        [64, 'B'],
        [122, 'B'],
        [178, 'ES'],
      ].map(([dx, name]) => (
        <Box key={dx} x={px + (dx as number)} y={185} w={44} h={30} lines={[name as string]} size={11} tone={name === 'B' ? 'service' : 'plain'} />
      ))}
      <Arrow d={`M${px + 52},200 H${px + 64}`} heads="none" />
      <Arrow d={`M${px + 108},200 H${px + 122}`} heads="none" />
      <Arrow d={`M${px + 166},200 H${px + 178}`} heads="none" />
    </g>
  );
  const panel = (px: number, title: string[], note: string): ReactNode => (
    <g>
      <Box x={px} y={8} w={230} h={240} lines={[]} dashed tone="muted" />
      {title.map((t, i) => (
        <Txt key={t} x={px + 115} y={26 + i * 15} size={11.5} bold>{t}</Txt>
      ))}
      <Txt x={px + 115} y={232} size={10.5} italic>{note}</Txt>
      {chain(px)}
    </g>
  );
  return (
    <Figure
      height={255}
      label="Three configuration models: fully distributed with hop-by-hop signalling; centralised network and distributed user with a CNC configuring the bridges; fully centralised with a CUC talking to end stations and a CNC configuring bridges"
      caption={caption}
      source={
        <>
          own drawing, after the three models of IEEE 802.1Qcc named in{' '}
          <a href={concepts}>J. Farkas, TSN Basic Concepts</a>, 2018, slide 18, and the{' '}
          <a href={tsnWiki}>Wikipedia article on TSN</a>.
        </>
      }>
      {panel(5, ['Fully distributed'], 'bridges decide locally')}
      <Arrow d="M35,165 H205" tone="arrival" dashed heads="both" />
      <Txt x={120} y={135} size={10.5} tone="arrival">hop-by-hop signalling</Txt>
      <Txt x={120} y={150} size={10.5} tone="arrival">(SRP, RAP)</Txt>

      {panel(245, ['Centralised network,', 'distributed user'], 'end stations signal the edge')}
      <Box x={310} y={80} w={100} h={34} lines={['CNC']} title size={12} tone="service" />
      <Arrow d="M331,114 V185" tone="service" dashed />
      <Arrow d="M389,114 V185" tone="service" dashed />
      <Arrow d="M275,185 V168 H318 V185" tone="arrival" dashed />

      {panel(485, ['Fully centralised'], 'CUC for users, CNC for bridges')}
      <Box x={493} y={80} w={90} h={34} lines={['CUC']} title size={12} tone="arrival" />
      <Box x={617} y={80} w={90} h={34} lines={['CNC']} title size={12} tone="service" />
      <Arrow d="M583,97 H617" tone="arrival" heads="both" />
      <Arrow d="M515,185 V114" tone="arrival" dashed heads="both" />
      <Arrow d="M640,114 L575,185" tone="service" dashed />
      <Arrow d="M660,114 L635,185" tone="service" dashed />
    </Figure>
  );
}
