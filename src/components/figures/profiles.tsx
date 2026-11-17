import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt, type Tone} from '@site/src/components/Diagram';

/**
 * Figures of the 802.3br and 802.1Qbu posts and of the TSN profile posts.
 */

const tutorial =
  'https://www.ieee802.org/802_tutorials/2015-03/8023-IET-TF-1501-Winkel-Tutorial-20150115_r06.pptx';

function Tutorial({slides}: {slides: string}): ReactNode {
  return (
    <>
      L. Winkel, M. Johas Teener et al., <a href={tutorial}>joint IEEE 802.3br / 802.1 TSN
      tutorial</a>, March 2015, {slides}
    </>
  );
}

type Numbered = {caption: ReactNode};

/** 802.3br: the five mPacket formats, field sizes in octets. */
export function MPacketFigure({caption}: Numbered): ReactNode {
  type Field = [string, number, Tone];
  const W: Record<string, number> = {pre: 64, smd: 50, frag: 46, addr: 52, type: 50, data: 150, crc: 58};
  const rows: [string, Field[]][] = [
    ['Express', [['Preamble 7', W.pre, 'muted'], ['SMD-E', W.smd, 'service'], ['DA 6', W.addr, 'plain'], ['SA 6', W.addr, 'plain'], ['Type 2', W.type, 'plain'], ['Data', W.data, 'plain'], ['FCS 4', W.crc, 'muted']]],
    ['Preemptable, not cut', [['Preamble 7', W.pre, 'muted'], ['SMD-Sx', W.smd, 'arrival'], ['DA 6', W.addr, 'plain'], ['SA 6', W.addr, 'plain'], ['Type 2', W.type, 'plain'], ['Data', W.data, 'plain'], ['FCS 4', W.crc, 'muted']]],
    ['First fragment', [['Preamble 7', W.pre, 'muted'], ['SMD-Sx', W.smd, 'arrival'], ['DA 6', W.addr, 'plain'], ['SA 6', W.addr, 'plain'], ['Type 2', W.type, 'plain'], ['Data', W.data, 'plain'], ['MCRC 4', W.crc, 'arrival']]],
    ['Intermediate fragment', [['Preamble 6', W.pre, 'muted'], ['SMD-Cx', W.smd, 'arrival'], ['Frag 1', W.frag, 'arrival'], ['Data', W.data + 2 * W.addr + W.type - W.frag, 'plain'], ['MCRC 4', W.crc, 'arrival']]],
    ['Last fragment', [['Preamble 6', W.pre, 'muted'], ['SMD-Cx', W.smd, 'arrival'], ['Frag 1', W.frag, 'arrival'], ['Data', W.data + 2 * W.addr + W.type - W.frag, 'plain'], ['FCS 4', W.crc, 'muted']]],
  ];
  return (
    <Figure
      height={268}
      label="The five mPacket formats of IEEE 802.3br: express, unfragmented preemptable, and the first, intermediate and last fragments of a preempted frame, with the start mPacket delimiter, fragment count and MCRC fields"
      caption={caption}
      source={
        <>
          own drawing of the formats on slide 53 of <Tutorial slides="slides 52–55." />
        </>
      }>
      {rows.map(([label, fields], r) => {
        let x = 170;
        return (
          <g key={label}>
            <Txt x={160} y={26 + r * 48} size={11.5} anchor="end">{label}</Txt>
            {fields.map(([name, w, tone]) => {
              const box = <Box key={name + x} x={x} y={10 + r * 48} w={w} h={32} lines={[name]} size={10} tone={tone} rx={0} />;
              x += w;
              return box;
            })}
          </g>
        );
      })}
      <Txt x={360} y={256} size={11} italic>
        SMD: start mPacket delimiter, Frag: fragment count (mod 4), MCRC: CRC of a non-final fragment
      </Txt>
    </Figure>
  );
}

/** 802.3br MM_CTL.request: HOLD before a scheduled express window, RELEASE after it. */
export function HoldReleaseFigure({caption}: Numbered): ReactNode {
  const rowsY = [40, 85, 130, 175, 220];
  const labels = ['MAC client schedule', 'MM_CTL.request', 'pMAC transmit', 'eMAC transmit', 'MAC Merge on the link'];
  return (
    <Figure
      height={262}
      label="Timeline: the MAC client asserts HOLD a guard band before the express window, the preemptable frame is cut, express frames go out in the window, RELEASE lets the rest of the preemptable frame follow"
      caption={caption}
      source={
        <>
          own drawing, after the hold-and-release timing on slides 48–50 of{' '}
          <Tutorial slides="slides 47–50." />
        </>
      }>
      {labels.map((l, i) => (
        <Txt key={l} x={170} y={rowsY[i]} size={11.5} anchor="end">{l}</Txt>
      ))}
      <Box x={330} y={rowsY[0] - 13} w={70} h={26} lines={['guard band']} size={10} tone="muted" rx={0} />
      <Box x={400} y={rowsY[0] - 13} w={180} h={26} lines={['express traffic window']} size={10.5} tone="service" rx={0} />
      <Box x={330} y={rowsY[1] - 13} w={56} h={26} lines={['HOLD']} title size={10.5} tone="arrival" rx={0} />
      <Box x={580} y={rowsY[1] - 13} w={70} h={26} lines={['RELEASE']} title size={10.5} tone="arrival" rx={0} />
      <Box x={190} y={rowsY[2] - 13} w={150} h={26} lines={['preemptable frame']} size={10.5} rx={0} />
      <Box x={590} y={rowsY[2] - 13} w={110} h={26} lines={['remainder']} size={10.5} rx={0} />
      <Box x={410} y={rowsY[3] - 13} w={70} h={26} lines={['express']} size={10.5} tone="service" rx={0} />
      <Box x={495} y={rowsY[3] - 13} w={70} h={26} lines={['express']} size={10.5} tone="service" rx={0} />
      <Box x={190} y={rowsY[4] - 13} w={150} h={26} lines={['fragment 1']} size={10.5} rx={0} />
      <Box x={410} y={rowsY[4] - 13} w={70} h={26} lines={['express']} size={10.5} tone="service" rx={0} />
      <Box x={495} y={rowsY[4] - 13} w={70} h={26} lines={['express']} size={10.5} tone="service" rx={0} />
      <Box x={590} y={rowsY[4] - 13} w={110} h={26} lines={['fragment 2']} size={10.5} rx={0} />
      <Arrow d="M330,22 V238" tone="arrival" dashed heads="none" />
      <Arrow d="M400,22 V238" tone="service" dashed heads="none" />
      <Arrow d="M190,250 H710" />
      <Txt x={705} y={240} size={10.5} anchor="end">time</Txt>
    </Figure>
  );
}

const chips: [string, string][] = [
  ['priority', 'Priority (802.1Q)'],
  ['as', 'gPTP (802.1AS)'],
  ['cbs', 'CBS (Qav)'],
  ['srp', 'SRP (Qat)'],
  ['tas', 'TAS (Qbv)'],
  ['pre', 'Preemption (Qbu)'],
  ['cqf', 'CQF (Qch)'],
  ['ats', 'ATS (Qcr)'],
  ['psfp', 'PSFP (Qci)'],
  ['frer', 'FRER (CB)'],
  ['qcc', 'Config (Qcc)'],
  ['sec', 'Security (AE, AR)'],
];

export type ProfileTool = (typeof chips)[number][0];

type ProfileProps = Numbered & {
  /** Application domain and its requirements, as keywords. */
  application: string[];
  /** Profile name and standard number. */
  profile: string[];
  /** Tools named for this profile in the cited material. */
  picks: ProfileTool[];
  source: ReactNode;
};

/** A profile between an application and the TSN toolbox. */
export function ProfileFigure({caption, application, profile, picks, source}: ProfileProps): ReactNode {
  return (
    <Figure
      height={292}
      label={`${profile[0]}: a profile that selects, for an application, a subset of the TSN base standards`}
      caption={caption}
      source={source}>
      <Box x={20} y={10} w={678} h={58} lines={application} title size={11.5} tone="muted" />
      <Arrow d="M359,68 V100" />
      <Txt x={372} y={84} size={10.5} italic anchor="start">requirements</Txt>
      <Box x={170} y={100} w={378} h={58} lines={profile} title size={11.5} tone="arrival" />
      <Arrow d="M359,158 V190" tone="arrival" />
      <Txt x={372} y={174} size={10.5} italic anchor="start">selects features, options and defaults</Txt>
      {chips.map(([id, name], i) => (
        <Box
          key={id}
          x={20 + (i % 6) * 114}
          y={190 + Math.floor(i / 6) * 46}
          w={108}
          h={36}
          lines={[name]}
          title={picks.includes(id)}
          size={10}
          tone={picks.includes(id) ? 'service' : 'muted'}
          dashed={!picks.includes(id)}
        />
      ))}
    </Figure>
  );
}
