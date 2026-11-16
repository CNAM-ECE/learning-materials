import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt, type Tone} from '@site/src/components/Diagram';

const concepts =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-basic-concepts-1118-v01.pdf';
const intro =
  'https://www.ieee802.org/1/files/public/docs2017/tsn-farkas-intro-0517-v01.pdf';
const wikipedia = 'https://en.wikipedia.org/wiki/Time-Sensitive_Networking';

function Concepts({slides}: {slides: string}): ReactNode {
  return (
    <>
      J. Farkas, <a href={concepts}>TSN Basic Concepts</a>, DetNet–TSN workshop,
      11 November 2018, {slides}
    </>
  );
}

function Intro({slides}: {slides: string}): ReactNode {
  return (
    <>
      J. Farkas, <a href={intro}>Introduction to IEEE 802.1</a>, 15 May 2017, {slides}
    </>
  );
}

/** A stage of the bridge that a TSN tool extends. */
export type BridgeStage =
  | 'control'
  | 'ingress'
  | 'relay'
  | 'queuing'
  | 'selection'
  | 'mac'
  | 'time';

type CaptionProps = {
  /** Replaces the default caption, for reuse in another post. */
  caption?: ReactNode;
};

type BridgeProps = CaptionProps & {
  /** Stages to emphasise; the others are drawn muted. */
  highlight?: BridgeStage[];
};

const dataStages: BridgeStage[] = ['ingress', 'relay', 'queuing', 'selection', 'mac'];

/** Where each TSN tool plugs into the existing IEEE 802.1Q bridge. */
export function BridgeIntegrationFigure({highlight, caption}: BridgeProps): ReactNode {
  const tone = (stage: BridgeStage, base: Tone): Tone =>
    !highlight ? base : highlight.includes(stage) ? 'service' : 'muted';
  const stages: string[][] = [
    ['Ingress port', 'filtering, tagging', '+ PSFP (802.1Qci)', '+ FRER (802.1CB)'],
    ['Relay', 'forwarding,', 'filtering', '+ explicit trees'],
    ['Queuing', '8 traffic classes', '+ CBS (802.1Qav)', '+ ATS (802.1Qcr)'],
    ['Tx selection', 'strict priority', '+ gates (802.1Qbv)', '+ CQF (802.1Qch)'],
    ['MAC / PHY', 'IEEE 802.3', '+ preemption', '(802.3br, 802.1Qbu)'],
  ];
  return (
    <Figure
      height={300}
      label="An IEEE 802.1Q bridge with its control plane and its data plane stages, showing which TSN standard extends which existing stage"
      caption={
        caption ??
        'Figure 1. TSN is not a new bridge: each tool extends one stage of the existing IEEE 802.1Q bridge. Lines starting with “+” are the TSN additions.'
      }
      source={
        <>
          own drawing, after the bridge architecture, data-plane actions and QoS function
          chain in <Concepts slides="slides 7, 8 and 10." />
        </>
      }>
      <Box x={15} y={24} w={690} h={250} lines={[]} dashed tone="muted" />
      <Txt x={28} y={12} size={12} bold anchor="start">IEEE 802.1Q bridge</Txt>

      <Box x={35} y={40} w={650} h={48} lines={['Control plane: higher-layer entities or an external agent', '+ stream reservation (802.1Qat), TSN configuration (802.1Qcc), path control (802.1Qca)']} title size={12} tone={tone('control', 'arrival')} />

      <Txt x={35} y={106} size={11.5} italic anchor="start">Data plane: frame in</Txt>
      <Txt x={685} y={106} size={11.5} italic anchor="end">frame out</Txt>
      {stages.map((lines, i) => (
        <g key={lines[0]}>
          <Box x={35 + i * 132} y={118} w={122} h={84} lines={lines} title size={11} tone={tone(dataStages[i], 'plain')} />
          {i < 4 && <Arrow d={`M${157 + i * 132},160 H${167 + i * 132}`} />}
        </g>
      ))}

      <Box x={35} y={218} w={650} h={40} lines={['Common time base: gPTP (802.1AS), required by gates, CQF and time-gated policing']} size={12} tone={tone('time', 'service')} />
      <Arrow d="M360,118 V88" tone="arrival" heads="both" />
      <Arrow d="M360,218 V202" tone="service" />
    </Figure>
  );
}

/** The four groups of the TSN toolbox. */
export function ToolboxFigure(): ReactNode {
  return (
    <Figure
      height={300}
      label="The four groups of TSN tools: time synchronisation, bounded low latency, ultra reliability, and dedicated resources and API"
      caption="Figure 2. The TSN toolbox. The four groups together deliver guaranteed transport with bounded low latency, low delay variation and extremely low loss."
      source={
        <>
          redrawn after <Concepts slides="slide 5," /> and <Intro slides="slide 22." />
        </>
      }>
      <Box x={10} y={15} w={340} h={112} lines={['Time synchronisation', 'Timing and Synchronization (802.1AS),', 'which includes a profile of IEEE 1588']} title size={12} tone="service" />
      <Box x={370} y={15} w={340} h={112} lines={['Ultra reliability', 'Frame Replication and Elimination (802.1CB)', 'Path Control and Reservation (802.1Qca)', 'Per-Stream Filtering and Policing (802.1Qci)', 'reliability for time sync (802.1AS)']} title size={12} />
      <Box x={10} y={175} w={340} h={112} lines={['Bounded low latency', 'Credit-Based Shaper (802.1Qav)', 'Frame preemption (802.3br, 802.1Qbu)', 'Scheduled Traffic (802.1Qbv)', 'Cyclic Queuing and Forwarding (802.1Qch)', 'Asynchronous Traffic Shaping (802.1Qcr)']} title size={12} />
      <Box x={370} y={175} w={340} h={112} lines={['Dedicated resources and API', 'Stream Reservation Protocol (802.1Qat)', 'TSN configuration (802.1Qcc)', 'YANG data models (802.1Qcp and others)', 'Link-local Registration Protocol (802.1CS)']} title size={12} tone="arrival" />
      <Txt x={360} y={151} size={13} bold>zero congestion loss · bounded latency · low delay variation</Txt>
    </Figure>
  );
}

/** 802.1Qbv: gates opening and closing on a repeating cycle. */
export function ScheduledTrafficFigure({caption}: CaptionProps): ReactNode {
  const x0 = 150;
  const cycle = 275;
  const cycles = [0, 1];
  return (
    <Figure
      height={230}
      label="Two cycles of a time-aware schedule: the gate of the critical queue and the gate of the other queues open in alternation, with a guard band before each critical window"
      caption={
        caption ??
        'Figure 3. Scheduled traffic (802.1Qbv). Gates open and close on a repeating cycle; closing the non-critical gates in advance (guard band) keeps the critical window free.'
      }
      source={
        <>
          own drawing, after <Concepts slides="slide 11," /> and{' '}
          <Intro slides="slides 31 and 33." />
        </>
      }>
      <Txt x={140} y={63} size={12} anchor="end">gate, critical queue</Txt>
      <Txt x={140} y={108} size={12} anchor="end">gate, other queues</Txt>
      <Txt x={140} y={153} size={12} anchor="end">frames on the link</Txt>

      {cycles.map((c) => {
        const x = x0 + c * cycle;
        return (
          <g key={c}>
            <Arrow d={`M${x + 2},26 H${x + cycle - 2}`} tone="muted" heads="both" />
            <Txt x={x + cycle / 2} y={14} size={11.5} italic>cycle</Txt>

            <Box x={x} y={50} w={75} h={26} lines={['open']} size={11} tone="service" rx={0} />
            <Box x={x + 75} y={50} w={200} h={26} lines={['closed']} size={11} tone="muted" rx={0} />

            <Box x={x} y={95} w={75} h={26} lines={['closed']} size={11} tone="muted" rx={0} />
            <Box x={x + 75} y={95} w={170} h={26} lines={['open']} size={11} tone="arrival" rx={0} />
            <Box x={x + 245} y={95} w={30} h={26} lines={[]} tone="muted" rx={0} />

            <Box x={x + 6} y={140} w={56} h={26} lines={['critical']} size={10.5} tone="service" rx={2} />
            <Box x={x + 80} y={140} w={78} h={26} lines={['other']} size={10.5} tone="arrival" rx={2} />
            <Box x={x + 162} y={140} w={78} h={26} lines={['other']} size={10.5} tone="arrival" rx={2} />

            <Arrow d={`M${x + 260},190 V124`} tone="muted" />
          </g>
        );
      })}
      <Txt x={x0 + 260 + cycle / 2 - 137} y={202} size={11.5} italic>
        guard band: no new non-critical frame may start
      </Txt>
    </Figure>
  );
}

/** 802.3br / 802.1Qbu: an express frame suspends a preemptable frame. */
export function PreemptionFigure({caption}: CaptionProps): ReactNode {
  return (
    <Figure
      height={200}
      label="Without preemption an express frame waits for a long preemptable frame to finish; with preemption the preemptable frame is suspended, the express frame is sent, and the rest of the preemptable frame follows"
      caption={
        caption ??
        'Figure 4. Frame preemption (802.3br and 802.1Qbu). The operation is local to one link: the fragments are reassembled at the next hop.'
      }
      source={
        <>
          own drawing, after <Intro slides="slides 29 and 30," /> and{' '}
          <Concepts slides="slide 12." />
        </>
      }>
      <Arrow d="M260,22 V172" tone="service" dashed heads="none" />
      <Txt x={260} y={12} size={11.5} tone="service">express frame becomes ready</Txt>

      <Txt x={140} y={63} size={12} anchor="end">without preemption</Txt>
      <Box x={150} y={50} w={300} h={26} lines={['preemptable frame']} size={11} tone="arrival" rx={2} />
      <Box x={456} y={50} w={84} h={26} lines={['express']} size={11} tone="service" rx={2} />
      <Arrow d="M262,88 H454" tone="muted" heads="both" />
      <Txt x={358} y={100} size={11} italic>express frame waits</Txt>

      <Txt x={140} y={143} size={12} anchor="end">with preemption</Txt>
      <Box x={150} y={130} w={124} h={26} lines={['fragment 1']} size={11} tone="arrival" rx={2} />
      <Box x={280} y={130} w={84} h={26} lines={['express']} size={11} tone="service" rx={2} />
      <Box x={370} y={130} w={186} h={26} lines={['fragment 2 (remainder)']} size={11} tone="arrival" rx={2} />

      <Arrow d="M150,180 H700" />
      <Txt x={690} y={190} size={11} anchor="end">time</Txt>
    </Figure>
  );
}

/** 802.1Qci and 802.1Qcr: per-stream processing before the queues. */
export function PerStreamFigure({caption}: CaptionProps): ReactNode {
  return (
    <Figure
      height={220}
      label="Per-stream processing of an incoming frame: stream filter, stream gate, then either a flow meter for policing or an asynchronous traffic shaper, then queuing"
      caption={
        caption ??
        'Figure 6. Per-stream processing ahead of the queues. PSFP (802.1Qci) meters and drops; ATS (802.1Qcr) reuses the filter and gate but delays each frame to an eligibility time instead.'
      }
      source={
        <>
          own drawing, after <Concepts slides="slides 13 and 15." />
        </>
      }>
      <Txt x={45} y={100} size={12}>incoming</Txt>
      <Txt x={45} y={116} size={12}>frame</Txt>
      <Arrow d="M80,108 H110" />

      <Box x={110} y={78} w={130} h={60} lines={['Stream filter', 'stream ID, priority,', 'counters']} title size={11.5} />
      <Arrow d="M240,108 H270" />
      <Box x={270} y={78} w={130} h={60} lines={['Stream gate', 'open or closed,', 'sets internal priority']} title size={11.5} />

      <Arrow d="M400,98 H420 V50 H440" tone="service" />
      <Arrow d="M400,118 H420 V166 H440" tone="arrival" />

      <Box x={440} y={20} w={150} h={60} lines={['Flow meter (PSFP)', 'bandwidth profile,', 'red / yellow / green']} title size={11.5} tone="service" />
      <Box x={440} y={136} w={150} h={60} lines={['ATS shaper', 'token bucket,', 'eligibility time']} title size={11.5} tone="arrival" />

      <Arrow d="M590,50 H610 V98 H630" tone="service" />
      <Arrow d="M590,166 H610 V118 H630" tone="arrival" />
      <Box x={630} y={78} w={80} h={60} lines={['Queuing']} title size={11.5} tone="muted" />
    </Figure>
  );
}

/** 802.1Qch: a frame advances exactly one hop per cycle. */
export function CyclicQueuingFigure({caption}: CaptionProps): ReactNode {
  const x0 = 150;
  const w = 135;
  const rows = ['bridge A sends', 'bridge B sends', 'bridge C sends'];
  return (
    <Figure
      height={215}
      label="Cyclic queuing and forwarding: a frame sent by bridge A in one cycle is sent by bridge B in the next cycle and by bridge C in the cycle after"
      caption={
        caption ??
        'Figure 5. Cyclic Queuing and Forwarding (802.1Qch). A frame received in one cycle is transmitted in the next, so latency depends only on the cycle time and the number of hops.'
      }
      source={
        <>
          own drawing, after <Intro slides="slides 35 and 36," /> and the{' '}
          <a href={wikipedia}>Wikipedia article on TSN</a>.
        </>
      }>
      {[0, 1, 2, 3].map((c) => (
        <g key={c}>
          <Txt x={x0 + c * w + w / 2} y={16} size={11.5} italic>cycle {c + 1}</Txt>
          {rows.map((row, r) => (
            <Box key={row} x={x0 + c * w} y={32 + r * 52} w={w} h={36} lines={[]} tone="muted" rx={0} />
          ))}
        </g>
      ))}
      {rows.map((row, r) => (
        <g key={row}>
          <Txt x={140} y={50 + r * 52} size={12} anchor="end">{row}</Txt>
          <Box x={x0 + r * w + 30} y={38 + r * 52} w={75} h={24} lines={['frame']} size={11} tone="service" rx={2} />
        </g>
      ))}
      <Arrow d={`M${x0 + 105},68 L${x0 + w + 30},90`} tone="service" />
      <Arrow d={`M${x0 + w + 105},120 L${x0 + 2 * w + 30},142`} tone="service" />
      <Arrow d={`M${x0},188 H${x0 + 4 * w}`} />
      <Txt x={x0 + 4 * w - 10} y={200} size={11} anchor="end">time</Txt>
    </Figure>
  );
}

/** 802.1Qcc: the fully centralised configuration model. */
export function ConfigurationFigure({caption}: CaptionProps): ReactNode {
  return (
    <Figure
      height={275}
      label="Fully centralised TSN configuration: end stations give their stream requirements to a centralised user configuration entity, which talks to a centralised network configuration entity that configures the bridges"
      caption={
        caption ??
        'Figure 8. The fully centralised configuration model of 802.1Qcc. In the fully distributed model the same information travels hop by hop with the reservation protocol, without CUC or CNC.'
      }
      source={
        <>
          own drawing, after the three models named in <Concepts slides="slide 18," />{' '}
          and the description of 802.1Qcc in the{' '}
          <a href={wikipedia}>Wikipedia article on TSN</a>.
        </>
      }>
      <Box x={255} y={15} w={210} h={46} lines={['CUC', 'Centralized User Configuration']} title size={12} tone="arrival" />
      <Box x={255} y={100} w={210} h={46} lines={['CNC', 'Centralized Network Configuration']} title size={12} tone="service" />
      <Arrow d="M360,61 V100" tone="arrival" heads="both" />
      <Txt x={372} y={81} size={11} italic anchor="start">stream requirements</Txt>

      <Box x={20} y={195} w={110} h={46} lines={['Talker']} title size={12} />
      <Box x={215} y={195} w={110} h={46} lines={['Bridge']} title size={12} tone="service" />
      <Box x={395} y={195} w={110} h={46} lines={['Bridge']} title size={12} tone="service" />
      <Box x={590} y={195} w={110} h={46} lines={['Listener']} title size={12} />
      <Arrow d="M130,218 H215" />
      <Arrow d="M325,218 H395" />
      <Arrow d="M505,218 H590" />
      <Txt x={360} y={258} size={11.5} italic>stream: one talker to one or more listeners</Txt>

      <Arrow d="M255,38 H75 V195" tone="arrival" dashed heads="both" />
      <Arrow d="M465,38 H645 V195" tone="arrival" dashed heads="both" />
      <Txt x={87} y={110} size={11} tone="arrival" anchor="start">end-station</Txt>
      <Txt x={87} y={124} size={11} tone="arrival" anchor="start">requirements</Txt>

      <Arrow d="M310,146 L272,193" tone="service" dashed />
      <Arrow d="M410,146 L448,193" tone="service" dashed />
      <Txt x={478} y={123} size={11} tone="service" anchor="start">NETCONF / RESTCONF,</Txt>
      <Txt x={478} y={137} size={11} tone="service" anchor="start">YANG models</Txt>
    </Figure>
  );
}
