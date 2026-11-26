import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Doctoral training: the catalogue first, then the courses grouped by theme.
 * Inside a theme, courses are in date order.
 */
const sidebars: SidebarsConfig = {
  doctoralTrainingSidebar: [
    'index',
    {
      type: 'category',
      label: 'Ethics and integrity',
      collapsed: false,
      items: ['courses/research-ethics', 'courses/ai-ethics'],
    },
    {
      type: 'category',
      label: 'Scientific schools and courses',
      collapsed: false,
      items: ['courses/p3s3', 'courses/demythif-ai', 'courses/data-science'],
    },
    {
      type: 'category',
      label: 'Communication and scholarly tools',
      collapsed: false,
      items: [
        'courses/thesis-180s',
        'courses/zotero',
        'courses/bibliometrics',
        'courses/thesis-submission',
      ],
    },
    {
      type: 'category',
      label: 'Innovation, IP and careers',
      collapsed: false,
      items: ['courses/patents', 'courses/innovation', 'courses/corporate-rd'],
    },
    {
      type: 'category',
      label: 'Institutional',
      collapsed: false,
      items: ['courses/j1a-welcome'],
    },
  ],
};

export default sidebars;
