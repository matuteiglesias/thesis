// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Economics of Aggregation, Scale, and Measurement',
  tagline: 'Research programme and thesis archive by Matías Iglesias',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://thesis.matuteiglesias.link',
  baseUrl: '/',
  organizationName: 'matuteiglesias',
  projectName: 'thesis',

  // Keep warnings during the redesign. Promote both settings to "throw"
  // once the semantic routes and historical slugs have been fully checked.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
          breadcrumbs: true,
          editUrl: 'https://github.com/matuteiglesias/thesis/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/matuteiglesias/thesis/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'Research on aggregation, scale, volatility, specialization measures, and spatial economic structure, with guided access to the doctoral thesis archive.',
      },
      {
        name: 'keywords',
        content:
          'economics, aggregation, scaling, concentration, volatility, location quotients, economic geography, Matías Iglesias',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Matías Iglesias · Research',
      logo: {
        alt: 'Matías Iglesias research portal',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Research programme',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          label: 'Thesis archive',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Research notes',
          position: 'left',
        },
        {
          href: 'https://github.com/matuteiglesias/concentration-is-not-scaling',
          label: 'Current paper',
          position: 'right',
        },
        {
          href: 'https://github.com/matuteiglesias/thesis',
          label: 'Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {
              label: 'Programme overview',
              to: '/docs/intro',
            },
            {
              label: 'Aggregation reading guide',
              to: '/docs/aggregation',
            },
            {
              label: 'Location quotients and pLQ',
              to: '/docs/category/location-quotients',
            },
            {
              label: 'Correlations in geography',
              to: '/docs/category/correlations-in-geography',
            },
          ],
        },
        {
          title: 'Academic record',
          items: [
            {
              label: 'Current paper and source',
              href: 'https://github.com/matuteiglesias/concentration-is-not-scaling',
            },
            {
              label: 'CV',
              to: '/docs/General/cv',
            },
            {
              label: 'ORCID',
              href: 'https://orcid.org/0000-0002-2634-2944',
            },
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/matuteiglesias',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/matiasiglesias/',
            },
            {
              label: 'ResearchGate',
              href: 'https://www.researchgate.net/profile/Matias-Iglesias-9',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Matías Iglesias. Research portal and thesis archive.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
