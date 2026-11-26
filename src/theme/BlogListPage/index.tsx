import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import TOC from '@theme/TOC';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogListPage';
import {researchUnderstanding} from '@site/src/data/researchUnderstanding';

type Post = {title: string; permalink: string; description?: string};

function anchor(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * The Research understanding landing page: an overview of the topics, each
 * with its sections and posts, and a table of contents on the right like the
 * Doctoral training catalogue. Replaces the default list of every post.
 */
export default function BlogListPage(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  const bySlug = new Map<string, Post>();
  for (const {content} of items) {
    const m = content.metadata;
    const slug = m.permalink.split('/').filter(Boolean).pop() ?? '';
    bySlug.set(slug, {title: m.title, permalink: m.permalink, description: m.description});
  }
  const toc = researchUnderstanding.map((topic) => ({
    value: topic.label,
    id: anchor(topic.label),
    level: 2,
  }));
  return (
      <BlogLayout
        title={metadata.blogTitle}
        description={metadata.blogDescription}
        sidebar={sidebar}
        toc={<TOC toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />}>
        <article className="markdown">
          <Heading as="h1">{metadata.blogTitle}</Heading>
          <p>
            {metadata.blogDescription}. The posts are grouped into topics meant to be read in order; posts on a
            standard end with notes from the articles, and posts built from course or reading notes end with
            the original handwritten pages.
          </p>
          {researchUnderstanding.map((topic) => (
            <section key={topic.label}>
              <Heading as="h2" id={anchor(topic.label)}>
                {topic.label}
              </Heading>
              {topic.sections.map((section) => {
                const posts = section.posts.flatMap((s) => (bySlug.has(s) ? [bySlug.get(s)!] : []));
                if (posts.length === 0) {
                  return null;
                }
                return (
                  <div key={section.label} className="ru-section">
                    <div className="ru-section__label">{section.label}</div>
                    <ul className="ru-section__posts">
                      {posts.map((p) => (
                        <li key={p.permalink}>
                          <Link to={p.permalink}>{p.title}</Link>
                          {p.description && <div className="ru-section__desc">{p.description}</div>}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </section>
          ))}
        </article>
      </BlogLayout>
  );
}
