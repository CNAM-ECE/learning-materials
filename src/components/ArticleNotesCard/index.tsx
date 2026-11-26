import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {articles, notesPages, type ArticleKey, type NotesPageId} from '@site/src/data/articleNotes';

type Props = {
  /** Article notes pages on the standard of the post, most relevant first. */
  pages: NotesPageId[];
};

/**
 * A card at the top of a Research understanding post that points to the
 * Article notes on the same standard and names the articles behind them.
 */
export default function ArticleNotesCard({pages}: Props): ReactNode {
  const keys = [...new Set(pages.flatMap((p) => notesPages[p].sources))] as ArticleKey[];
  return (
    <aside className="notes-card" aria-label="Article notes">
      <div className="notes-card__title">📑 Article notes on this standard</div>
      <ul className="notes-card__pages">
        {pages.map((p) => (
          <li key={p}>
            <Link to={`/article-notes/${p}`}>{notesPages[p].title}</Link>
          </li>
        ))}
      </ul>
      <div className="notes-card__sources">
        From{' '}
        {keys.map((k, i) => (
          <span key={k}>
            {i > 0 && (i === keys.length - 1 ? ' and ' : ', ')}
            <a href={articles[k].url} title={articles[k].cite}>
              {k}
            </a>
          </span>
        ))}
        ; full citations in the references below.
      </div>
    </aside>
  );
}
