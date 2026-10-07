import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  step: string;
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    step: 'Part I',
    title: 'Min-plus foundations',
    to: '/blog/min-plus-algebra',
    description: (
      <>
        Cumulative functions, min-plus convolution and deconvolution, and the
        arrival and service curve abstractions on which every bound rests.
      </>
    ),
  },
  {
    step: 'Part II',
    title: 'Worst-case bounds',
    to: '/blog/three-fundamental-bounds',
    description: (
      <>
        Delay, backlog and output bounds; concatenation and the
        &ldquo;pay bursts only once&rdquo; principle; residual service under
        aggregate scheduling.
      </>
    ),
  },
  {
    step: 'Part III',
    title: 'TSN and reconfiguration',
    to: '/blog/dynamic-reconfiguration-of-tsn',
    description: (
      <>
        Network calculus models of TSN shapers, and the open problem of
        reconfiguring a deterministic network online without losing its
        guarantees.
      </>
    ),
  },
];

function Feature({step, title, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <p className={styles.step}>{step}</p>
      <Heading as="h3">
        <Link to={to}>{title}</Link>
      </Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
