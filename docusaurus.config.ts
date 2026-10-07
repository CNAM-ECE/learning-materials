import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repoUrl = 'https://github.com/CNAM-ECE/learning-materials';

const config: Config = {
  title: 'Network Calculus Notes',
  tagline:
    'A learning path from min-plus algebra to certified reconfiguration of Time-Sensitive Networks',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://cnam-ece.github.io',
  baseUrl: '/learning-materials/',
  organizationName: 'CNAM-ECE',
  projectName: 'learning-materials',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'reference',
          sidebarPath: './sidebars.ts',
          editUrl: `${repoUrl}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          blogTitle: 'Learning path',
          blogDescription:
            'A sequence of posts on deterministic network calculus and its application to TSN',
          blogSidebarTitle: 'Learning path',
          blogSidebarCount: 'ALL',
          sortPosts: 'ascending',
          postsPerPage: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: `${repoUrl}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Network Calculus Notes',
      logo: {
        alt: 'Network Calculus Notes logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Learning path', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Notes',
          items: [
            {label: 'Learning path', to: '/blog'},
            {label: 'Notation and results', to: '/reference/notation'},
            {label: 'Annotated resources', to: '/reference/resources'},
          ],
        },
        {
          title: 'Related work',
          items: [
            {
              label: 'Certified admission control for TSN',
              href: 'https://github.com/CNAM-ECE/network-calculus',
            },
            {label: 'panco', href: 'https://github.com/anne-bou/panco'},
            {label: 'DiscoDNC', href: 'https://github.com/NetCal/DNC'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: repoUrl},
            {label: 'Docusaurus', href: 'https://docusaurus.io'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Le Huyen Trang. Personal study notes, built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
