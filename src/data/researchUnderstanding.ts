/**
 * Topic grouping of the Research understanding section, used by the blog sidebar
 * (src/theme/BlogSidebar/Content) and nowhere else.
 *
 * Topics appear in the order listed here. A topic is split into sections
 * (sub-categories), each with its posts in reading order, independently of
 * their dates. Each entry is the `slug` of a post in blog/. A post whose slug
 * is not listed falls into "Other".
 */
export type ResearchSection = {
  /** Sub-category heading. */
  label: string;
  posts: string[];
};

export type ResearchTopic = {
  label: string;
  sections: ResearchSection[];
};

export const researchUnderstanding: ResearchTopic[] = [
  {
    label: 'Deterministic networks',
    sections: [
      {label: 'Overview', posts: ['determinism-from-ethernet-to-tsn', 'why-deterministic-guarantees']},
      {label: 'Architecture', posts: ['deterministic-networking']},
    ],
  },
  {
    label: 'Network calculus',
    sections: [
      {label: 'Overview', posts: ['min-plus-algebra']},
      {label: 'Curves', posts: ['arrival-curves', 'service-curves']},
      {
        label: 'Bounds',
        posts: [
          'three-fundamental-bounds',
          'concatenation-pay-bursts-only-once',
          'aggregate-multiplexing-residual-service',
        ],
      },
      {
        label: 'Shapers and regulators',
        posts: ['packetizers-and-greedy-shapers', 'max-plus-and-interleaved-regulators'],
      },
      {label: 'Networks and stability', posts: ['fifo-networks-and-stability']},
      {label: 'Clocks', posts: ['clock-non-idealities-in-network-calculus']},
      {label: 'Classic examples', posts: ['atm-and-mpls']},
    ],
  },
  {
    label: 'IEEE 802.1',
    sections: [
      {
        label: 'Overview',
        posts: ['ieee-802-1-tsn-task-group'],
      },
      {label: 'Standards process', posts: ['ieee-standards-amendments-revisions']},
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
    sections: [{label: 'Overview', posts: ['ietf-detnet']}],
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
      {
        label: 'Profiles',
        posts: [
          'ieee-802-1ba-avb-profile',
          'ieee-802-1cm-fronthaul-profile',
          'iec-ieee-60802-industrial-profile',
          'ieee-802-1dg-automotive-profile',
        ],
      },
      {label: 'Analysis', posts: ['network-calculus-for-tsn']},
    ],
  },
  {
    label: 'SDN',
    sections: [
      {label: 'Overview', posts: ['sdn-and-tsn-configuration']},
      {label: 'Reconfiguration', posts: ['dynamic-reconfiguration-of-tsn']},
    ],
  },
];

export const otherTopicLabel = 'Other';
