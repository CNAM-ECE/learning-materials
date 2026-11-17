import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

const sa = (id: string): string => `https://standards.ieee.org/ieee/802.1Q/${id}/`;

type Edition = {name: string; when: string; id: string; merged: string[]; active?: boolean};

const editions: Edition[] = [
  {name: '802.1Q-1998', when: 'approved 1998', id: '1039', merged: ['802.1u-2001 (corrigendum), 802.1v-2001, 802.1s-2002 (MSTP)']},
  {name: '802.1Q-2005', when: 'approved 2005', id: '3495', merged: ['802.1ad-2005, 802.1ak-2007 (MRP), 802.1ag-2007, 802.1ah-2008, 802.1ap-2008, Cor 1-2008,', '802.1aj-2009, 802.1Qav-2009 (CBS), 802.1Qaw-2009, 802.1Qay-2009, 802.1Qau-2010, 802.1Qat-2010 (SRP)']},
  {name: '802.1Q-2011', when: 'approved 2011', id: '4410', merged: ['802.1Qaz-2011, 802.1Qbb-2011, 802.1Qbc-2011, 802.1Qbe-2011, 802.1Qbf-2011, 802.1Qbg-2012,', '802.1aq-2012 (SPB), Cor 2-2012, 802.1Qbp-2014; and the separate standard 802.1D-2004 (MAC bridges)']},
  {name: '802.1Q-2014', when: 'approved 2014', id: '5801', merged: ['Cor 1-2015, 802.1Qbv-2015 (TAS), 802.1Qca-2015 (path control), 802.1Qcd-2015,', '802.1Qbu-2016 (preemption), 802.1Qbz-2016, 802.1Qch-2017 (CQF), 802.1Qci-2017 (PSFP)']},
  {name: '802.1Q-2018', when: 'approved 2018', id: '6844', merged: ['802.1Qcc-2018 (TSN configuration), 802.1Qcp-2018 (YANG), 802.1Qcy-2019,', '802.1Qcr-2020 (ATS), 802.1Qcx-2020']},
  {name: '802.1Q-2022', when: 'active standard', id: '10323', active: true, merged: ['802.1Qcj-2023, 802.1Qcw-2023 (YANG for Qbv, Qbu, Qci), 802.1Qcz-2023, 802.1Qdj-2024,', '802.1Qdx-2024, 802.1Qdy-2025; projects P802.1Qdq, P802.1Qdt, P802.1Qee']},
  {name: 'P802.1Q', when: 'revision PAR 2023', id: '11285', merged: ['the next roll-up, in progress: it will supersede 802.1Q-2022 and absorb its amendments']},
];

/** How the amendments of each 802.1Q edition were rolled into the next edition. */
export function DotQHistoryFigure({caption}: {caption: ReactNode}): ReactNode {
  const rowH = 52;
  return (
    <Figure
      height={editions.length * rowH + 22}
      label="Timeline of IEEE 802.1Q: each edition, the amendments and corrigenda approved against it, and the next edition that rolled them up, from 802.1Q-1998 to the 802.1Q-2022 active standard and the P802.1Q revision in progress"
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
          , which list for each edition its amendments, corrigenda and the edition that superseded it.
        </>
      }>
      <Txt x={75} y={10} size={11} bold>Edition</Txt>
      <Txt x={435} y={10} size={11} bold>Amendments and corrigenda approved before the next edition, then rolled into it</Txt>
      {editions.map((e, i) => {
        const y = 22 + i * rowH;
        const last = i === editions.length - 1;
        return (
          <g key={e.name}>
            <Box x={10} y={y} w={130} h={36} lines={[e.name, e.when]} title size={10.5} tone={e.active ? 'service' : last ? 'muted' : 'plain'} dashed={last} />
            <Box x={160} y={y} w={550} h={36} lines={e.merged} size={9.5} tone={last ? 'muted' : 'arrival'} dashed={last} />
            <Arrow d={`M140,${y + 18} H160`} tone="muted" heads="none" />
            {!last && <Arrow d={`M75,${y + 36} V${y + rowH}`} />}
            {!last && <Txt x={84} y={y + 44} size={9} italic anchor="start">roll-up revision</Txt>}
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
