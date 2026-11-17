/**
 * Topic grouping of the learning path, used by the blog sidebar
 * (src/theme/BlogSidebar/Content) and nowhere else.
 *
 * Topics appear in the order listed here, and posts appear in the order of
 * their `posts` array, independently of their dates. Each entry is the `slug`
 * of a post in blog/. A post whose slug is not listed falls into "Other".
 */
export type LearningPathTopic = {
  label: string;
  posts: string[];
};

export const learningPath: LearningPathTopic[] = [
  {
    label: 'Deterministic networks',
    posts: ['why-deterministic-guarantees', 'deterministic-networking'],
  },
  {
    label: 'Network calculus',
    posts: [
      'min-plus-algebra',
      'arrival-curves',
      'service-curves',
      'three-fundamental-bounds',
      'concatenation-pay-bursts-only-once',
      'aggregate-multiplexing-residual-service',
      'atm-and-mpls',
    ],
  },
  {
    label: 'IEEE 802.1',
    posts: [
      'ieee-802-1-tsn-task-group',
      'ieee-standards-amendments-revisions',
      'ieee-802-1q-bridge',
      'rstp-rapid-spanning-tree',
      'mstp-multiple-spanning-tree',
      'ieee-802-1aq-shortest-path-bridging',
      'ieee-802-1qca-path-control',
      'mrp-and-mvrp',
      'ieee-802-1qat-srp',
    ],
  },
  {
    label: 'IETF',
    posts: ['ietf-detnet'],
  },
  {
    label: 'TSN',
    posts: [
      'tsn-toolbox',
      'ieee-802-1as-time-synchronization',
      'credit-based-shaper',
      'time-aware-shaper',
      'ieee-802-3br-interspersing-express-traffic',
      'ieee-802-1qbu-frame-preemption',
      'cyclic-queuing-and-forwarding',
      'asynchronous-traffic-shaping',
      'per-stream-filtering-and-policing',
      'frame-replication-and-elimination',
      'stream-reservation',
      'network-calculus-for-tsn',
    ],
  },
  {
    label: 'TSN profiles',
    posts: [
      'ieee-802-1ba-avb-profile',
      'ieee-802-1cm-fronthaul-profile',
      'iec-ieee-60802-industrial-profile',
      'ieee-802-1dg-automotive-profile',
    ],
  },
  {
    label: 'SDN',
    posts: ['sdn-and-tsn-configuration', 'dynamic-reconfiguration-of-tsn'],
  },
];

export const otherTopicLabel = 'Other';
