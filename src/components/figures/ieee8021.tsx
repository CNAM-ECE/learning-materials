import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const farkasIntro =
  'https://www.ieee802.org/1/files/public/docs2017/tsn-farkas-intro-0517-v01.pdf';
const farkasOverview =
  'https://www.ieee802.org/1/files/public/docs2018/detnet-tsn-farkas-tsn-overview-1118-v01.pdf';
const tsnPage = 'https://1.ieee802.org/tsn/';

/** IEEE 802 against the OSI model, and the TSN task group inside 802.1. */
export function Ieee802PlacementFigure(): ReactNode {
  const osi = ['Application', 'Presentation', 'Session', 'Transport', 'Network', 'Data link', 'Physical'];
  const groups = ['TSN TG', 'Security TG', 'Maintenance TG', 'OmniRAN TG'];
  const macs = ['802.3 Ethernet', '802.11 Wireless LAN', '802.15 Wireless PAN'];
  return (
    <Figure
      height={270}
      label="OSI reference model with IEEE 802 covering the data link and physical layers, IEEE 802.1 on top of the MAC standards, and the TSN task group inside the 802.1 working group"
      caption="Figure 1. IEEE 802 covers the two lowest OSI layers; IEEE 802.1 sits at the top of the link layer, above the media-specific standards, and hosts the TSN task group."
      source={
        <>
          own drawing, after J. Farkas, <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a>{' '}
          (2018), slides 4 and 6, and{' '}
          <a href={farkasIntro}>Introduction to IEEE 802.1</a> (2017), slide 13.
        </>
      }>
      <Txt x={90} y={14} size={12} bold>OSI reference model</Txt>
      {osi.map((layer, i) => (
        <Box key={layer} x={20} y={28 + i * 33} w={140} h={28} lines={[layer]} size={12} tone={i < 5 ? 'muted' : 'plain'} />
      ))}

      <Txt x={465} y={14} size={12} bold>IEEE 802.1 working group: task groups (2018)</Txt>
      {groups.map((group, i) => (
        <Box key={group} x={230 + i * 120} y={28} w={110} h={40} lines={[group]} size={12} title={i === 0} tone={i === 0 ? 'service' : 'plain'} />
      ))}
      {groups.map((group, i) => (
        <Arrow key={group} d={`M${285 + i * 120},68 V150`} tone={i === 0 ? 'service' : 'muted'} heads="none" />
      ))}

      <Box x={230} y={150} w={470} h={44} lines={['IEEE 802.1', 'bridging, architecture, management, security']} title size={12} tone="service" />
      {macs.map((mac, i) => (
        <Box key={mac} x={230 + i * 160} y={206} w={150} h={40} lines={[mac]} size={12} />
      ))}

      <Arrow d="M160,207 C195,207 195,172 230,172" tone="muted" dashed />
      <Arrow d="M160,240 C195,240 195,226 230,226" tone="muted" dashed />
      <Txt x={465} y={260} size={11} italic>media-specific MAC and PHY standards</Txt>
    </Figure>
  );
}

/** From the AVB task group to the TSN task group. */
export function AvbToTsnFigure(): ReactNode {
  const events: [number, string, string[]][] = [
    [110, '2005', ['AVB task group starts:', 'professional audio/video,', 'consumer, infotainment']],
    [360, '2012', ['AVB TG renamed TSN TG:', 'industrial and automotive', 'use cases join']],
    [610, '2015', ['Interworking TG merged', 'into the TSN TG']],
  ];
  return (
    <Figure
      height={150}
      label="Timeline: AVB task group started in 2005, renamed TSN task group in 2012, merged with the Interworking task group in 2015"
      caption="Figure 2. From Audio Video Bridging to Time-Sensitive Networking."
      source={
        <>
          own drawing, dates from J. Farkas,{' '}
          <a href={farkasIntro}>Introduction to IEEE 802.1</a> (2017), slide 23.
        </>
      }>
      <Arrow d="M30,40 H700" />
      {events.map(([x, year, lines]) => (
        <g key={year}>
          <circle cx={x} cy={40} r={6} fill="var(--nc-service)" />
          <Txt x={x} y={18} size={14} bold>{year}</Txt>
          {lines.map((line, i) => (
            <Txt key={line} x={x} y={68 + i * 17} size={12}>{line}</Txt>
          ))}
        </g>
      ))}
    </Figure>
  );
}

/** Base technology, configuration and profile standards. */
export function StandardsGroupingFigure(): ReactNode {
  const base: [string, string][] = [
    ['802.1AS', 'time sync'],
    ['802.1Qat', 'SRP'],
    ['802.1Qav', 'CBS'],
    ['802.1Qbu', 'preempt.'],
    ['802.1Qbv', 'schedule'],
    ['802.1Qch', 'CQF'],
    ['802.1Qci', 'PSFP'],
    ['802.1CB', 'FRER'],
    ['802.1Qcr', 'ATS'],
  ];
  const config: [string, string][] = [
    ['802.1Qcc', 'TSN configuration'],
    ['802.1Qcp', 'YANG, bridges'],
    ['802.1Qcw', 'YANG, Qbv/Qbu/Qci'],
    ['802.1ABcu', 'YANG, LLDP'],
    ['802.1CBcv', 'YANG and MIB, FRER'],
  ];
  const profiles: [string, string][] = [
    ['802.1BA', 'audio video bridging'],
    ['802.1CM', 'fronthaul'],
    ['IEC/IEEE 60802', 'industrial automation'],
    ['802.1DG', 'automotive in-vehicle'],
    ['802.1DP', 'aerospace onboard'],
  ];
  return (
    <Figure
      height={250}
      label="Three tiers of TSN standards: base technology, configuration, and profiles that select from the two tiers below"
      caption="Figure 3. Three tiers of TSN standards: a profile selects and constrains tools from the base and configuration tiers for one application domain."
      source={
        <>
          redrawn after J. Farkas, <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a>{' '}
          (2018), slide 9, with the profile row updated from the{' '}
          <a href={tsnPage}>TSN task group page</a>.
        </>
      }>
      <Txt x={10} y={42} size={12} bold anchor="start">Profiles</Txt>
      {profiles.map(([id, role], i) => (
        <Box key={id} x={128 + i * 118} y={20} w={112} h={44} lines={[id, role]} title size={11} tone="arrival" />
      ))}

      <Txt x={10} y={122} size={12} bold anchor="start">Configuration</Txt>
      {config.map(([id, role], i) => (
        <Box key={id} x={128 + i * 118} y={100} w={112} h={44} lines={[id, role]} title size={11} />
      ))}

      <Txt x={10} y={196} size={12} bold anchor="start">Base</Txt>
      <Txt x={10} y={212} size={12} bold anchor="start">technology</Txt>
      {base.map(([id, role], i) => (
        <Box key={id} x={128 + i * 65.5} y={182} w={62} h={44} lines={[id, role]} title size={10.5} tone="service" />
      ))}

      <Arrow d="M420,100 V66" tone="muted" />
      <Arrow d="M420,182 V146" tone="muted" />
      <Txt x={432} y={83} size={11} anchor="start" italic>selects and constrains</Txt>
      <Txt x={432} y={164} size={11} anchor="start" italic>configures</Txt>
    </Figure>
  );
}

/** High-level IEEE standards development process. */
export function StandardsProcessFigure(): ReactNode {
  const steps: [string[], 'plain' | 'service' | 'muted'][] = [
    [['PAR', 'project', 'authorised'], 'muted'],
    [['NesCom', 'approval'], 'muted'],
    [['Task group', 'ballot'], 'service'],
    [['Working', 'group ballot'], 'service'],
    [['Sponsor', 'ballot'], 'service'],
    [['RevCom', 'approval'], 'muted'],
    [['Publication'], 'plain'],
  ];
  return (
    <Figure
      height={140}
      label="IEEE standards development process from project authorisation request through task group, working group and sponsor ballots to publication"
      caption="Figure 4. The path of an IEEE 802.1 project from authorisation to publication. A “P” in front of a designation means the project is still on this path."
      source={
        <>
          redrawn after J. Farkas, <a href={farkasOverview}>IEEE 802.1 TSN TG Overview</a>{' '}
          (2018), slide 7.
        </>
      }>
      {steps.map(([lines, tone], i) => (
        <g key={lines.join(' ')}>
          <Box x={8 + i * 102} y={20} w={92} h={58} lines={lines} size={12} tone={tone} title={i === 6} />
          {i < 6 && <Arrow d={`M${100 + i * 102},49 H${110 + i * 102}`} />}
        </g>
      ))}
      <Arrow d="M212,92 H508" tone="service" heads="both" />
      <Txt x={360} y={110} size={11.5} italic>
        each ballot covers the whole draft; recirculation ballots cover only the changes
      </Txt>
    </Figure>
  );
}
