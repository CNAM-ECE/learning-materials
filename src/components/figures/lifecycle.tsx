import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const sa = (id: string): string => `https://standards.ieee.org/ieee/802.1Q/${id}/`;

/** Keyword lines, then the designation. */
type Chip = string[];
type Edition = {name: string; when: string; id: string; chips: Chip[]; more?: string; active?: boolean};

/** Key amendments of each edition, merged into the next one; the full lists are on the IEEE SA pages. */
const editions: Edition[] = [
  {name: '802.1Q-1998', when: '1998', id: '1039', chips: [['MSTP', '802.1s'], ['Protocol', 'VLANs', '802.1v']], more: '+1 corrigendum'},
  {name: '802.1Q-2005', when: '2005', id: '3495', chips: [['Provider', 'bridges', '802.1ad'], ['MRP', '802.1ak'], ['PBB', '802.1ah'], ['CBS', 'Qav'], ['SRP', 'Qat']], more: '+6 more'},
  {name: '802.1Q-2011', when: '2011', id: '4410', chips: [['SPB', '802.1aq'], ['ETS', 'Qaz'], ['PFC', 'Qbb'], ['EVB', 'Qbg'], ['MAC bridges', '802.1D-2004']], more: '+5 more'},
  {name: '802.1Q-2014', when: '2014', id: '5801', chips: [['TAS', 'Qbv'], ['Preemption', 'Qbu'], ['PCR', 'Qca'], ['CQF', 'Qch'], ['PSFP', 'Qci']], more: '+3 more'},
  {name: '802.1Q-2018', when: '2018', id: '6844', chips: [['TSN', 'configuration', 'Qcc'], ['YANG', 'Qcp'], ['ATS', 'Qcr']], more: '+2 more'},
  {name: '802.1Q-2022', when: 'active', id: '10323', active: true, chips: [['YANG for', 'TSN', 'Qcw'], ['PBB', 'attachment', 'Qcj'], ['Congestion', 'isolation', 'Qcz']], more: '+3 more'},
  {name: 'P802.1Q', when: 'revision in progress', id: '11285', chips: []},
];

/** How the amendments of each 802.1Q edition were rolled into the next edition. */
export function DotQHistoryFigure({caption}: {caption: ReactNode}): ReactNode {
  const rowH = 78;
  const boxH = 46;
  const chipW = 88;
  return (
    <Figure
      height={editions.length * rowH - (rowH - boxH) + 34}
      label="Timeline of IEEE 802.1Q editions from 1998 to the 2022 active standard and the revision in progress; for each edition, its key amendments shown as keywords, which the next edition rolled up"
      caption={caption}
      source={
        <>
          own drawing from the IEEE SA pages of{' '}
          {editions.map((e, i) => (
            <span key={e.id}>
              <a href={sa(e.id)}>{e.name}</a>
              {i < editions.length - 2 ? ', ' : i === editions.length - 2 ? ' and ' : ''}
            </span>
          ))}
          , which list every amendment and corrigendum of each edition.
        </>
      }>
      <Txt x={75} y={12} size={11} bold>Edition</Txt>
      <Txt x={420} y={12} size={11} bold>Key amendments, rolled into the next edition</Txt>
      {editions.map((e, i) => {
        const y = 28 + i * rowH;
        const last = i === editions.length - 1;
        return (
          <g key={e.name}>
            <Box x={10} y={y} w={130} h={boxH} lines={[e.name, e.when]} title size={10.5} tone={e.active ? 'service' : last ? 'muted' : 'plain'} dashed={last} />
            {e.chips.map((lines, k) => (
              <Box key={lines.join()} x={160 + k * (chipW + 8)} y={y} w={chipW} h={boxH} lines={lines} title={lines.length - 1} size={9.5} tone="arrival" />
            ))}
            {e.more && (
              <Txt x={164 + e.chips.length * (chipW + 8)} y={y + boxH / 2} size={9.5} italic anchor="start">{e.more}</Txt>
            )}
            {last && <Txt x={160} y={y + boxH / 2} size={10} italic anchor="start">the next roll-up: it will supersede 802.1Q-2022 and absorb its amendments</Txt>}
            {!last && <Arrow d={`M75,${y + boxH} V${y + rowH - 2}`} />}
            {!last && <Txt x={84} y={y + boxH + (rowH - boxH) / 2} size={9} italic anchor="start">roll-up</Txt>}
          </g>
        );
      })}
    </Figure>
  );
}

/** The life of one IEEE standard: base, amendments, corrigenda, revision, and inactive states. */
export function StandardLifecycleFigure({caption}: {caption: ReactNode}): ReactNode {
  return (
    <Figure
      height={250}
      label="Life of an IEEE standard: a PAR leads to a new base standard; amendments and corrigenda change it while it is active; a revision rolls them up into a new edition, which supersedes the old one; a standard not revised within 10 years becomes inactive-reserved, and a ballot can make it inactive-withdrawn"
      caption={caption}
      source={
        <>
          own drawing, after the{' '}
          <a href="https://standards.ieee.org/faqs/maintenance/">IEEE SA maintenance FAQ</a> and D. Pannell,{' '}
          <a href="https://standards.ieee.org/wp-content/uploads/import/documents/other/eipatd-presentations/2020/D1-05-Pannell-Status-and-Content-of-the-IEEE-TSN-Automotive-Profile.pdf">How IEEE 802.1 Works</a>,
          2020, slide 4.
        </>
      }>
      <Box x={10} y={20} w={110} h={46} lines={['PAR', 'new project']} title size={11} tone="muted" />
      <Arrow d="M120,43 H160" />
      <Box x={160} y={14} w={170} h={58} lines={['Base standard, edition N', 'capital letters, e.g.', '802.1Q-2018']} title size={10.5} tone="service" />
      <Arrow d="M330,43 H390" />
      <Txt x={360} y={32} size={9.5} italic>revision</Txt>
      <Box x={390} y={14} w={170} h={58} lines={['Base standard, edition N+1', 'rolls up all changes,', 'e.g. 802.1Q-2022']} title size={10.5} tone="service" />
      <Arrow d="M560,43 H590" />
      <Box x={590} y={20} w={120} h={46} lines={['and so on,', 'at least every', '10 years']} size={10} tone="muted" dashed />

      <Box x={150} y={115} w={190} h={52} lines={['Amendment', 'lower-case letters: 802.1Qcc;', 'adds or changes content']} title size={10} tone="arrival" />
      <Box x={150} y={180} w={190} h={52} lines={['Corrigendum', '“Cor”: fixes errors only,', 'no new content']} title size={10} tone="arrival" />
      <Arrow d="M245,115 V72" tone="arrival" />
      <Arrow d="M340,141 C380,141 400,110 430,72" tone="arrival" dashed />
      <Arrow d="M340,206 C390,206 430,130 470,72" tone="arrival" dashed />
      <Txt x={420} y={160} size={9.5} italic anchor="start">merged into the next edition</Txt>

      <Box x={560} y={115} w={150} h={52} lines={['Superseded', 'replaced by the', 'next edition']} title size={10} tone="muted" />
      <Box x={560} y={180} w={150} h={52} lines={['Inactive', 'reserved: not revised in 10 y', 'withdrawn: by ballot']} title size={10} tone="muted" />
      <Arrow d="M245,72 C245,95 520,95 600,115" tone="muted" dashed />
      <Txt x={500} y={113} size={9.5} italic>edition N</Txt>
    </Figure>
  );
}
