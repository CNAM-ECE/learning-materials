import type {ReactNode} from 'react';
import {abbreviations} from '@site/src/data/abbreviations';

type Props = {
  /** Abbreviations to list, in any order; they are sorted alphabetically. */
  terms: string[];
  /** Summary line of the collapsible box. */
  title?: string;
  /** Open the box by default. */
  open?: boolean;
};

/** A collapsible table of the abbreviations used in a post. */
export default function Abbreviations({terms, title, open = false}: Props): ReactNode {
  const keys = [...new Set(terms)]
    .filter((k) => k in abbreviations)
    .sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}));
  return (
    <details className="abbr-box" open={open}>
      <summary>
        {title ?? 'Abbreviations used in this post'} ({keys.length})
      </summary>
      <table>
        <thead>
          <tr>
            <th>Abbreviation</th>
            <th>Stands for</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((k) => {
            const a = abbreviations[k];
            return (
              <tr key={k} id={`abbr-${k.replace(/[^A-Za-z0-9]/g, '')}`}>
                <td>{a.link ? <a href={a.link}><b>{k}</b></a> : <b>{k}</b>}</td>
                <td>{a.expansion}</td>
                <td>{a.definition}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </details>
  );
}
