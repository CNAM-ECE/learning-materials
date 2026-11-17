/**
 * Topic grouping of the learning path, used by the blog sidebar
 * (src/theme/BlogSidebar/Content) and nowhere else.
 *
 * Topics appear in the order listed here. A topic is split into sections
 * (sub-categories), each with its posts in reading order, independently of
 * their dates. Each entry is the `slug` of a post in blog/. A post whose slug
 * is not listed falls into "Other".
 */
export type LearningPathSection = {
  /** Sub-category heading; omit for a topic with a single, unnamed list. */
  label?: string;
  posts: string[];
};

export type LearningPathTopic = {
  label: string;
  sections: LearningPathSection[];
};

export const learningPath: LearningPathTopic[] = [
  {
    label: 'Deterministic networks',
    sections: [{posts: ['why-deterministic-guarantees', 'deterministic-networking']}],
  },
  {
    label: 'Network calculus',
    sections: [
      {label: 'Foundations', posts: ['min-plus-algebra', 'arrival-curves', 'service-curves']},
      {
        label: 'Bounds',
        posts: [
          'three-fundamental-bounds',
          'concatenation-pay-bursts-only-once',
          'aggregate-multiplexing-residual-service',
        ],
      },
      {label: 'Classic examples', posts: ['atm-and-mpls']},
    ],
  },
  {
    label: 'IEEE 802.1',
    sections: [
      {
        label: 'Organisation and process',
        posts: ['ieee-802-1-tsn-task-group', 'ieee-standards-amendments-revisions'],
      },
      {label: 'Bridge architecture', posts: ['ieee-802-1q-bridge']},
      {
        label: 'Active topology control',
        posts: [
          'rstp-rapid-spanning-tree',
          'mstp-multiple-spanning-tree',
          'ieee-802-1aq-shortest-path-bridging',
          'ieee-802-1qca-path-control',
        ],
      },
      {label: 'Registration and reservation', posts: ['mrp-and-mvrp', 'ieee-802-1qat-srp']},
    ],
  },
  {
    label: 'IETF',
    sections: [{posts: ['ietf-detnet']}],
  },
  {
    label: 'TSN',
    sections: [
      {label: 'Overview', posts: ['tsn-toolbox']},
      {label: 'Time synchronisation', posts: ['ieee-802-1as-time-synchronization']},
      {
        label: 'Bounded latency: shaping and scheduling',
        posts: [
          'credit-based-shaper',
          'time-aware-shaper',
          'cyclic-queuing-and-forwarding',
          'asynchronous-traffic-shaping',
        ],
      },
      {
        label: 'Bounded latency: frame preemption',
        posts: ['ieee-802-3br-interspersing-express-traffic', 'ieee-802-1qbu-frame-preemption'],
      },
      {
        label: 'Reliability',
        posts: ['per-stream-filtering-and-policing', 'frame-replication-and-elimination'],
      },
      {label: 'Resource management', posts: ['stream-reservation']},
      {label: 'Analysis', posts: ['network-calculus-for-tsn']},
    ],
  },
  {
    label: 'TSN profiles',
    sections: [
      {
        posts: [
          'ieee-802-1ba-avb-profile',
          'ieee-802-1cm-fronthaul-profile',
          'iec-ieee-60802-industrial-profile',
          'ieee-802-1dg-automotive-profile',
        ],
      },
    ],
  },
  {
    label: 'SDN',
    sections: [{posts: ['sdn-and-tsn-configuration', 'dynamic-reconfiguration-of-tsn']}],
  },
];

export const otherTopicLabel = 'Other';
