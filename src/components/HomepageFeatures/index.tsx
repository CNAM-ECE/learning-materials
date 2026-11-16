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
    step: 'Deterministic networks',
    title: 'Why bounds, and what they require',
    to: '/blog/why-deterministic-guarantees',
    description: (
      <>
        What a deterministic service is, why measurement cannot certify it,
        and how the work is divided between Layer 2 and Layer 3.
      </>
    ),
  },
  {
    step: 'Network calculus',
    title: 'Min-plus foundations and worst-case bounds',
    to: '/blog/min-plus-algebra',
    description: (
      <>
        Arrival and service curves; delay, backlog and output bounds;
        concatenation and the &ldquo;pay bursts only once&rdquo; principle;
        residual service under aggregate scheduling.
      </>
    ),
  },
  {
    step: 'IEEE 802.1 · IETF · TSN',
    title: 'Standards, tools and reconfiguration',
    to: '/blog/ieee-802-1-tsn-task-group',
    description: (
      <>
        The TSN task group and IETF DetNet, the TSN toolbox and its network
        calculus models, and the open problem of reconfiguring a
        deterministic network online without losing its guarantees.
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
