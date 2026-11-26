import React, {memo, type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';

const NoList = (): null => null;

/**
 * Desktop blog sidebar laid out like the docs sidebar: a full-height column
 * on the left with a border, holding the docs-style menu.
 */
function BlogSidebarDesktop({sidebar}: Props): ReactNode {
  // No post is unlisted, so every sidebar item is shown.
  const items = sidebar.items;
  return (
    <aside className="blog-docs-sidebar">
      <div className="blog-docs-sidebar__viewport">
        <nav
          className="menu thin-scrollbar blog-docs-sidebar__menu"
          aria-label={translate({
            id: 'theme.blog.sidebar.navAriaLabel',
            message: 'Blog recent posts navigation',
            description: 'The ARIA label for recent posts in the blog sidebar',
          })}>
          <BlogSidebarContent items={items} ListComponent={NoList} yearGroupHeadingClassName="" />
        </nav>
      </div>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
