import type {ReactNode} from 'react';
import {Arrow, Box, Figure, Txt} from '@site/src/components/Diagram';

type ReplicationProps = {
  caption: ReactNode;
  source: ReactNode;
  /** Names of the two end points and of the replicating/eliminating nodes. */
  ends: [string, string];
  nodes: [string, string];
};

/**
 * Per-packet 1+1 redundancy: a flow is replicated over two disjoint paths and
 * duplicates are eliminated by sequence number before delivery. Used for both
 * DetNet service protection (RFC 8655) and TSN FRER (IEEE 802.1CB).
 */
export function ReplicationFigure({
  caption,
  source,
  ends,
  nodes,
}: ReplicationProps): ReactNode {
  return (
    <Figure
      height={210}
      label="A flow replicated over two disjoint paths and merged again with duplicate elimination"
      caption={caption}
      source={source}>
      <Box x={10} y={83} w={100} h={44} lines={[ends[0]]} />
      <Box x={160} y={83} w={110} h={44} lines={[nodes[0], 'replicate']} title tone="service" />
      <Box x={310} y={20} w={100} h={40} lines={['path 1']} tone="muted" />
      <Box x={310} y={150} w={100} h={40} lines={['path 2']} tone="muted" />
      <Box x={450} y={83} w={110} h={44} lines={[nodes[1], 'eliminate']} title tone="service" />
      <Box x={610} y={83} w={100} h={44} lines={[ends[1]]} />

      <Arrow d="M110,105 H160" />
      <Arrow d="M215,83 V40 H310" tone="service" />
      <Arrow d="M215,127 V170 H310" tone="service" />
      <Arrow d="M410,40 H505 V83" tone="service" />
      <Arrow d="M410,170 H505 V127" tone="service" />
      <Arrow d="M560,105 H610" />

      <Txt x={135} y={92} size={11}>3 2 1</Txt>
      <Txt x={262} y={28} size={11}>3 2 1</Txt>
      <Txt x={262} y={182} size={11}>3 2 1</Txt>
      <Txt x={585} y={92} size={11}>3 2 1</Txt>
      <Txt x={360} y={98} size={11.5} italic>one copy per path:</Txt>
      <Txt x={360} y={114} size={11.5} italic>one failure, no loss</Txt>
    </Figure>
  );
}
