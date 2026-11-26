import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** Reference: the about page, then the sheets and the sources, as categories
    like the Doctoral training sidebar. */
const sidebars: SidebarsConfig = {
  referenceSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Notation and terms',
      collapsed: false,
      items: ['notation', 'abbreviations', 'tsn-glossary'],
    },
    {
      type: 'category',
      label: 'Sources',
      collapsed: false,
      items: ['resources'],
    },
  ],
};

export default sidebars;
