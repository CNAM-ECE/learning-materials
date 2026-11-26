import React, {memo, type ReactNode} from 'react';
import Heading from '@theme/Heading';
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

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  return (
    <>
      {groupByTopic(items).map((group) => (
        <div role="group" key={group.label}>
          <Heading as="h3" className={yearGroupHeadingClassName}>
            {group.label}
          </Heading>
          {group.sections.map((section, i) => (
            <div key={section.label ?? i} className="blog-sidebar-section">
              {section.label && (
                <div className="blog-sidebar-section__label">{section.label}</div>
              )}
              <div className="blog-sidebar-section__items">
                <ListComponent items={section.items} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);
