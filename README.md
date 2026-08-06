# Economics of Aggregation, Scale, and Measurement

Research portal and thesis archive of **Matías Iglesias**.

**Live site:** [thesis.matuteiglesias.link](https://thesis.matuteiglesias.link/)

This repository publishes an accessible version of the doctoral thesis *Essays in the Economics of Aggregation* and places it beneath a present-day research programme on how economic objects change when heterogeneous units are weighted, normalized, grouped, and represented in space.

## Research structure

The portal connects one current programme with three bodies of work:

1. **Aggregation, volatility, and diversification** — how firm-level weights, marginal variance, dependence, and population paths shape aggregate fluctuations.
2. **Location quotients and pLQ** — how observation size affects specialization indices and motivates a probability-based interpretation.
3. **Correlation structures in economic geography** — how transformations, normalization, and spatial support shape co-location and industry-relatedness measures.

The active formal front is **[Concentration Is Not Scaling](https://github.com/matuteiglesias/concentration-is-not-scaling)**. The site also distinguishes peer-reviewed work, working papers, thesis results, research directions, and archival technical material.

## Site architecture

The portal has two complementary entry points:

- `src/pages/index.js` is the concise and visual research homepage.
- `docs/intro.md` explains the programme, provenance, status labels, and curated reading trails.

The remaining documentation preserves the deeper thesis archive: derivations, empirical exercises, figures, simulations, appendices, and historical formulations.

Important paths:

```text
src/pages/index.js
src/pages/index.module.css
src/components/HomepageFeatures/index.js
src/components/HomepageFeatures/styles.module.css
src/css/custom.css
docs/intro.md
docusaurus.config.js
sidebars.js
```

The sidebar is generated from the documentation tree. Semantic navigation is carried by the homepage, the programme introduction, reading guides, and document/category metadata rather than by a fragile manually duplicated table of contents.

## Content conventions

Pages and homepage sections should clearly identify the status of their claims:

- **Current manuscript**
- **Peer-reviewed publication**
- **Working paper**
- **Thesis result**
- **Research direction**
- **Technical or archival material**

The historical thesis text is preserved as research provenance. When a later manuscript refines a thesis-era formulation, the later manuscript is the authoritative statement and the older page should link forward to it rather than be silently rewritten.

## Local development

The project uses Docusaurus and Yarn.

```bash
yarn
yarn start
```

The development server supports live reload for most content and styling changes.

## Validation

Create a production build before publishing:

```bash
yarn build
```

Then inspect the generated site locally:

```bash
yarn serve
```

Review at desktop and mobile widths, in light and dark mode. Pay particular attention to:

- homepage section rhythm and equation panels;
- `/docs/intro` reading trails and anchors;
- historical routes whose slugs contain capitalized directories;
- formula overflow on small screens;
- sidebar ordering and generated category pages;
- external manuscript, publication, ORCID, and profile links.

Broken-link handling remains at `warn` while historical routes are being curated. Once the archive builds without unresolved routes, promote `onBrokenLinks` and `onBrokenMarkdownLinks` to `throw` in `docusaurus.config.js`.

## Deployment

Docusaurus produces a static site in `build/`:

```bash
yarn build
```

Deployment is intentionally kept separate from the intellectual content and navigation architecture. Publish the verified `build/` output through the repository's configured hosting workflow.

## Research and source links

- [Research portal](https://thesis.matuteiglesias.link/)
- [Current paper and reproducible source](https://github.com/matuteiglesias/concentration-is-not-scaling)
- [Matías Iglesias on GitHub](https://github.com/matuteiglesias)
- [ORCID](https://orcid.org/0000-0002-2634-2944)

## License and attribution

Text, figures, data-derived outputs, and software may have different reuse conditions. Consult the repository history and the associated paper or source artifact before reuse. Attribution should preserve the distinction between published results, working papers, thesis material, and later research extensions.
