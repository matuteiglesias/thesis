import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const thesisInsights = [
  {
    title: 'Firms are not sectors',
    text: 'Aggregation can make fluctuations approximately linear even when firm-level dynamics remain strongly nonlinear.',
    status: 'Thesis antecedent',
    to: '/docs/aggregation',
    link: 'Follow the micro-to-macro trail',
  },
  {
    title: 'Population is not effective diversification',
    text: 'The number of firms, their weights, marginal volatility, and dependence are distinct economic objects.',
    status: 'Current programme',
    to: '/docs/aggregation',
    link: 'See what controls diversification',
  },
  {
    title: 'The same LQ can mean different things',
    text: 'Observation size changes the economic meaning of an identical location-quotient value.',
    status: 'Published foundation',
    to: '/docs/Location-Quotients/conclusion-location-quotients',
    link: 'Read the location-quotient result',
  },
  {
    title: 'Thresholds can become probabilities',
    text: 'The probabilistic location quotient reframes specialization as a size-conditional transition probability.',
    status: 'Published foundation',
    to: '/docs/probabilistic-location-quotient',
    link: 'Understand pLQ',
  },
  {
    title: 'Relatedness depends on representation',
    text: 'Counts, logs, normalizations, and binary specialization can generate different economic networks.',
    status: 'Working-paper antecedent',
    to: '/docs/similarity-measures',
    link: 'Inspect the similarity framework',
  },
  {
    title: 'Boundaries can act like kernels',
    text: 'Administrative areas are not passive containers: their geometry helps define measured spatial overlap.',
    status: 'Research direction',
    to: '/docs/matching-discrete-to-continuous-coexistence-measures',
    link: 'Trace areas into continuous space',
  },
];

const statusRows = [
  {
    work: 'Concentration Is Not Scaling',
    status: 'Current manuscript',
    detail: 'Formal foundation for the aggregation programme',
  },
  {
    work: 'Size distortions of location quotients and pLQ',
    status: 'Peer-reviewed publication',
    detail: 'Published foundation on normalization and observation size',
  },
  {
    work: 'Correlation structures in economic geography',
    status: 'Working paper',
    detail: 'Spatial co-occurrence, normalization, and industry networks',
  },
  {
    work: 'Thesis essays and technical trails',
    status: 'Research archive',
    detail: 'Derivations, figures, experiments, and future options',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroInner}`}>
        <p className={styles.eyebrow}>Matías Iglesias · Research portal</p>
        <Heading as="h1" className={styles.heroTitle}>
          Economics of Aggregation, Scale, and Measurement
        </Heading>
        <p className={styles.heroLead}>
          I study how economic objects change when heterogeneous units are
          weighted, normalized, grouped, and represented in space.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Explore the research programme
          </Link>
          <Link className={styles.secondaryButton} to="#current-research">
            See the current research front
          </Link>
          <Link className={styles.textButton} to="/docs/intro#research-trails">
            Browse the thesis archive →
          </Link>
        </div>
      </div>
    </header>
  );
}

function CurrentResearch() {
  return (
    <section id="current-research" className={styles.currentSection}>
      <div className={`container ${styles.currentGrid}`}>
        <div className={styles.currentCopy}>
          <p className={styles.sectionLabel}>Current research front</p>
          <Heading as="h2">Concentration Is Not Scaling</Heading>
          <p className={styles.currentClaim}>
            Two systems can have the same concentration path and different
            rates of diversification.
          </p>
          <p>
            Direct economic weights describe concentration. Aggregate-variance
            scaling depends on the complete population-indexed stochastic
            exposure: marginal variances, dependence, composition, and the path
            along which the population changes. The current manuscript turns
            that distinction into an exact finite-interval accounting result.
          </p>
          <div className={styles.inlineLinks}>
            <Link to="https://github.com/matuteiglesias/concentration-is-not-scaling">
              Manuscript and reproducible source ↗
            </Link>
            <Link to="/docs/aggregation">Aggregation reading guide →</Link>
            <Link to="/docs/intro#current-programme">Programme context →</Link>
          </div>
        </div>

        <div className={styles.equationPanel} aria-label="Concentration and aggregate variance comparison">
          <div>
            <span>Direct concentration</span>
            <strong>H(N) = w(N)ᵀw(N)</strong>
          </div>
          <div className={styles.notEqual}>≠</div>
          <div>
            <span>Aggregate variance</span>
            <strong>V(N) = w(N)ᵀΣ(N)w(N)</strong>
          </div>
          <p>
            A level property of weights is not, by itself, an elasticity of a
            variance–covariance system.
          </p>
        </div>
      </div>
    </section>
  );
}

function PublishedFoundation() {
  return (
    <section className={styles.foundationSection}>
      <div className={`container ${styles.splitSection}`}>
        <div className={styles.numberMark} aria-hidden="true">01</div>
        <div>
          <p className={styles.sectionLabel}>Published foundation</p>
          <Heading as="h2">The same location quotient can mean different things</Heading>
          <p className={styles.featureLead}>
            An identical LQ value can represent a different distance from
            specialization for observations of different sizes.
          </p>
          <p>
            The location-quotient programme shows how row, column, observation,
            and table size shape the distribution and persistence of a familiar
            economic index. The probabilistic location quotient then replaces a
            brittle threshold with a size-conditional transition probability.
          </p>
          <div className={styles.formulaStrip}>
            <span>From a threshold</span>
            <strong>LQ &gt; 1</strong>
            <span>to a transition object</span>
            <strong>pLQ = P(LQₜ₊₁ &gt; 1 | current size conditions)</strong>
          </div>
          <div className={styles.inlineLinks}>
            <Link to="/docs/Location-Quotients/conclusion-location-quotients">
              Why size distorts location quotients →
            </Link>
            <Link to="/docs/probabilistic-location-quotient">
              From threshold to probability →
            </Link>
            <Link to="/docs/category/location-quotients">
              Full location-quotient trail →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpatialAntecedent() {
  return (
    <section className={styles.spatialSection}>
      <div className={`container ${styles.spatialGrid}`}>
        <div className={styles.spatialVisual} aria-hidden="true">
          <div className={styles.gridMap}>
            <span className={styles.cellA} />
            <span className={styles.cellB} />
            <span className={styles.cellC} />
            <span className={styles.cellD} />
            <span className={styles.cellE} />
            <span className={styles.cellF} />
          </div>
          <div className={styles.networkSketch}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div>
          <p className={styles.sectionLabel}>Spatial antecedent</p>
          <Heading as="h2">The map is part of the measurement</Heading>
          <p className={styles.featureLead}>
            Administrative areas are not passive containers: their scale and
            geometry help determine the relationship represented by a
            co-location measure.
          </p>
          <p>
            The geography programme treats similarity matrices as locational
            correlation structures. It then asks how discrete areas, continuous
            distance, normalization, and input transformation change the
            industry network we claim to observe.
          </p>
          <div className={styles.inlineLinks}>
            <Link to="/docs/abstract-cooccurrence-measures-economic-geography">
              What is a relatedness matrix measuring? →
            </Link>
            <Link to="/docs/matching-discrete-to-continuous-coexistence-measures">
              From areas to continuous overlap →
            </Link>
            <Link to="/docs/category/correlations-in-geography">
              Explore the geography trail →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThesisInsights() {
  return (
    <section className={styles.insightsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Ideas recovered from the thesis</p>
            <Heading as="h2">Research propositions with deeper evidence trails</Heading>
          </div>
          <p>
            These are antecedents and options, not six simultaneous active
            projects. The current publication sequence remains anchored in the
            aggregation programme.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {thesisInsights.map((item) => (
            <article className={styles.insightCard} key={item.title}>
              <span className={styles.statusPill}>{item.status}</span>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.text}</p>
              <Link to={item.to}>{item.link} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchStatus() {
  return (
    <section className={styles.statusSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Research status</p>
            <Heading as="h2">A programme with explicit provenance</Heading>
          </div>
          <p>
            The portal distinguishes current manuscripts, published work,
            working papers, thesis results, and research directions.
          </p>
        </div>
        <div className={styles.statusTable} role="table" aria-label="Research status">
          {statusRows.map((row) => (
            <div className={styles.statusRow} role="row" key={row.work}>
              <strong role="cell">{row.work}</strong>
              <span className={styles.statusBadge} role="cell">{row.status}</span>
              <span role="cell">{row.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closingSection}>
      <div className={`container ${styles.closingGrid}`}>
        <div>
          <p className={styles.sectionLabel}>Research archive, not a frozen thesis</p>
          <Heading as="h2">Follow the idea, then inspect the evidence</Heading>
          <p>
            Start with the present programme, choose a curated reading trail,
            and move from a research proposition into the original derivations,
            figures, data arguments, and technical material.
          </p>
        </div>
        <div className={styles.closingLinks}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Understand the programme
          </Link>
          <Link className={styles.secondaryButton} to="/docs/intro#research-trails">
            Choose a reading trail
          </Link>
          <Link className={styles.textButton} to="/docs/General/cv">
            CV and research record →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Economics of Aggregation, Scale, and Measurement"
      description="Research by Matías Iglesias on aggregation, volatility, specialization measures, and spatial economic structure.">
      <Hero />
      <main>
        <CurrentResearch />
        <HomepageFeatures />
        <PublishedFoundation />
        <SpatialAntecedent />
        <ThesisInsights />
        <ResearchStatus />
        <Closing />
      </main>
    </Layout>
  );
}
