import React, {memo, type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogSidebar/Content';
import {learningPath, otherTopicLabel} from '@site/src/data/learningPath';

type Items = Props['items'];

/** Last path segment of a post permalink, i.e. its slug. */
function slugOf(permalink: string): string {
  const parts = permalink.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
}

/**
 * Groups the sidebar items by topic instead of by year. Order of topics and
 * of posts inside a topic comes from src/data/learningPath.ts.
 */
function groupByTopic(items: Items): [string, Items][] {
  const bySlug = new Map(items.map((item) => [slugOf(item.permalink), item]));
  const used = new Set<string>();
  const groups: [string, Items][] = [];

  for (const topic of learningPath) {
    const topicItems = topic.posts.flatMap((slug) => {
      const item = bySlug.get(slug);
      if (!item) {
        return [];
      }
      used.add(slug);
      return [item];
    });
    if (topicItems.length > 0) {
      groups.push([topic.label, topicItems]);
    }
  }

  const rest = items.filter((item) => !used.has(slugOf(item.permalink)));
  if (rest.length > 0) {
    groups.push([otherTopicLabel, rest]);
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
      {groupByTopic(items).map(([label, topicItems]) => (
        <div role="group" key={label}>
          <Heading as="h3" className={yearGroupHeadingClassName}>
            {label}
          </Heading>
          <ListComponent items={topicItems} />
        </div>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);
