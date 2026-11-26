import React, {memo, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import type {Props} from '@theme/BlogSidebar/Content';
import {researchUnderstanding, otherTopicLabel} from '@site/src/data/researchUnderstanding';

type Items = Props['items'];
type Section = {label?: string; items: Items};
type Group = {label: string; sections: Section[]};

/** Last path segment of a post permalink, i.e. its slug. */
function slugOf(permalink: string): string {
  const parts = permalink.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
}

/**
 * Groups the sidebar items by topic, and inside a topic by section, instead
 * of by year. Order comes from src/data/researchUnderstanding.ts.
 */
function groupByTopic(items: Items): Group[] {
  const bySlug = new Map(items.map((item) => [slugOf(item.permalink), item]));
  const used = new Set<string>();
  const groups: Group[] = [];

  for (const topic of researchUnderstanding) {
    const sections: Section[] = [];
    for (const section of topic.sections) {
      const sectionItems = section.posts.flatMap((slug) => {
        const item = bySlug.get(slug);
        if (!item) {
          return [];
        }
        used.add(slug);
        return [item];
      });
      if (sectionItems.length > 0) {
        sections.push({label: section.label, items: sectionItems});
      }
    }
    if (sections.length > 0) {
      groups.push({label: topic.label, sections});
    }
  }

  const rest = items.filter((item) => !used.has(slugOf(item.permalink)));
  if (rest.length > 0) {
    groups.push({label: otherTopicLabel, sections: [{items: rest}]});
  }
  return groups;
}

function samePath(a: string, b: string): boolean {
  return a.replace(/\/$/, '') === b.replace(/\/$/, '');
}

/** A collapsible category, with the markup of a docs sidebar category. */
function Category({
  label,
  level,
  active,
  children,
}: {
  label: string;
  level: number;
  active: boolean;
  children: ReactNode;
}): ReactNode {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <li
      className={clsx(
        'theme-doc-sidebar-item-category',
        `theme-doc-sidebar-item-category-level-${level}`,
        'menu__list-item',
        collapsed && 'menu__list-item--collapsed',
      )}>
      <div className="menu__list-item-collapsible">
        <a
          className={clsx(
            'menu__link menu__link--sublist menu__link--sublist-caret',
            active && 'menu__link--active',
          )}
          role="button"
          aria-expanded={!collapsed}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCollapsed((c) => !c);
          }}>
          <span className="blog-sidebar-category-label">{label}</span>
        </a>
      </div>
      {!collapsed && <ul className="menu__list">{children}</ul>}
    </li>
  );
}

function PostLink({item, level}: {item: Items[number]; level: number}): ReactNode {
  const {pathname} = useLocation();
  const active = samePath(pathname, item.permalink);
  return (
    <li
      className={clsx(
        'theme-doc-sidebar-item-link',
        `theme-doc-sidebar-item-link-level-${level}`,
        'menu__list-item',
      )}>
      <Link
        className={clsx('menu__link', active && 'menu__link--active')}
        aria-current={active ? 'page' : undefined}
        to={item.permalink}>
        {item.title}
      </Link>
    </li>
  );
}

/**
 * The Research understanding sidebar, drawn like the docs sidebars of the
 * site (Doctoral training, Reference): topics are collapsible categories,
 * their sections nested categories, and posts are links.
 */
function BlogSidebarContent({items}: Props): ReactNode {
  const {pathname} = useLocation();
  const has = (list: Items) => list.some((item) => samePath(pathname, item.permalink));
  return (
    <ul className="theme-doc-sidebar-menu menu__list">
      {groupByTopic(items).map((group) => (
        <Category
          key={group.label}
          label={group.label}
          level={1}
          active={group.sections.some((s) => has(s.items))}>
          {group.sections.map((section, i) =>
            section.label ? (
              <Category
                key={section.label}
                label={section.label}
                level={2}
                active={has(section.items)}>
                {section.items.map((item) => (
                  <PostLink key={item.permalink} item={item} level={3} />
                ))}
              </Category>
            ) : (
              <React.Fragment key={i}>
                {section.items.map((item) => (
                  <PostLink key={item.permalink} item={item} level={2} />
                ))}
              </React.Fragment>
            ),
          )}
        </Category>
      ))}
    </ul>
  );
}

export default memo(BlogSidebarContent);
