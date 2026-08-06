import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const transformations = [
  {
    number: 'I',
    title: 'Micro units → macro volatility',
    question: 'How do heterogeneous firm shocks become aggregate fluctuations?',
    text: 'Weights, marginal volatility, dependence, and population paths jointly determine diversification.',
    to: '/docs/aggregation',
    link: 'Explore aggregation and volatility',
  },
  {
    number: 'II',
    title: 'Economic table → specialization index',
    question: 'When does normalization change the meaning of revealed advantage?',
    text: 'Observation size can distort a familiar index and motivate a probability-based alternative.',
    to: '/docs/category/location-quotients',
    link: 'Explore location quotients and pLQ',
  },
  {
    number: 'III',
    title: 'Locations → areas → networks',
    question: 'How do geographic support and representation shape measured relatedness?',
    text: 'Boundaries, distance, normalization, and transformations help define the network being measured.',
    to: '/docs/category/correlations-in-geography',
    link: 'Explore correlation structures',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.kicker}>One programme, three transformations</p>
            <Heading as="h2">Aggregation does not merely summarize the economy</Heading>
          </div>
          <p>
            It helps create the quantities we later interpret as volatility,
            specialization, and economic relatedness.
          </p>
        </div>

        <div className={styles.grid}>
          {transformations.map((item) => (
            <article className={styles.transformation} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <Heading as="h3">{item.title}</Heading>
              <p className={styles.question}>{item.question}</p>
              <p>{item.text}</p>
              <Link to={item.to}>{item.link} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
