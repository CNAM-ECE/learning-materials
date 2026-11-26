import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Article notes: one page per standard, grouped by the four TSN pillars of
 * the toolbox (timing, bounded latency, reliability, resource management),
 * then the profiles and the Layer 3 counterpart.
 */
const sidebars: SidebarsConfig = {
  articleNotesSidebar: [
    'index',
    {
      type: 'category',
      label: 'Foundations',
      collapsed: false,
      items: ['ieee-802-1q-bridge'],
    },
    {
      type: 'category',
      label: 'Timing and synchronisation',
      collapsed: false,
      items: ['ieee-802-1as'],
    },
    {
      type: 'category',
      label: 'Bounded low latency',
      collapsed: false,
      items: ['ieee-802-1qav', 'ieee-802-1qbv', 'ieee-802-1qbu-802-3br', 'ieee-802-1qch-qcr'],
    },
    {
      type: 'category',
      label: 'High reliability',
      collapsed: false,
      items: ['ieee-802-1qci', 'ieee-802-1cb'],
    },
    {
      type: 'category',
      label: 'Resource management',
      collapsed: false,
      items: ['ieee-802-1qcc'],
    },
    {
      type: 'category',
      label: 'Profiles and use cases',
      collapsed: false,
      items: ['tsn-profiles'],
    },
    {
      type: 'category',
      label: 'Layer 3',
      collapsed: false,
      items: ['ietf-detnet'],
    },
  ],
};

export default sidebars;
