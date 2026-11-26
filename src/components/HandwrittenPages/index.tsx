import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  /** Folder under static/img/notes holding page-NNN.jpg files. */
  set: string;
  /** Page numbers of the source PDF, e.g. [4, 5, 6] or '4-12'. */
  pages: number[] | string;
  /** What the pages are, shown in the summary line. */
  title: string;
  /** Link to the annotated PDF. */
  pdf?: string;
};

function expand(pages: number[] | string): number[] {
  if (Array.isArray(pages)) {
    return pages;
  }
  return pages.split(',').flatMap((part) => {
    const [a, b] = part.split('-').map((x) => Number(x.trim()));
    if (b === undefined) {
      return [a];
    }
    return Array.from({length: b - a + 1}, (_, i) => a + i);
  });
}

function Page({set, n}: {set: string; n: number}): ReactNode {
  const src = useBaseUrl(`/img/notes/${set}/page-${String(n).padStart(3, '0')}.jpg`);
  return (
    <figure className="handwritten-page">
      <img src={src} alt={`Annotated page ${n}`} loading="lazy" />
      <figcaption>Page {n}</figcaption>
    </figure>
  );
}

/**
 * A collapsible gallery of the original annotated pages behind a section,
 * as on the research ethics page of Doctoral training.
 */
export default function HandwrittenPages({set, pages, title, pdf}: Props): ReactNode {
  const list = expand(pages);
  return (
    <details className="handwritten-pages">
      <summary>
        Original handwritten pages: {title} ({list.length} {list.length === 1 ? 'page' : 'pages'})
      </summary>
      {pdf && (
        <p>
          Annotated PDF: <a href={pdf}>open the full file</a>.
        </p>
      )}
      {list.map((n) => (
        <Page key={n} set={set} n={n} />
      ))}
    </details>
  );
}
