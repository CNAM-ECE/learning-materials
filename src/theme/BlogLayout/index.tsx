import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import type {Props} from '@theme/BlogLayout';

/**
 * Blog pages laid out like the docs pages (Doctoral training, Reference):
 * the sidebar is a full-height column on the left, and the content with its
 * table of contents fills the rest of the width.
 */
export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = Boolean(sidebar && sidebar.items.length > 0);
  return (
    <Layout {...layoutProps}>
      <div className="blog-docs-wrapper">
        {hasSidebar && <BlogSidebar sidebar={sidebar} />}
        <main className={clsx('blog-docs-main', hasSidebar && 'blog-docs-main--with-sidebar')}>
          <div className="container padding-top--md padding-bottom--lg">
            <div className="row">
              <div className={clsx('col', toc && 'blog-docs-main__col')}>{children}</div>
              {toc && <div className="col col--3">{toc}</div>}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
