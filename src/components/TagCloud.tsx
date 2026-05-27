import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { posts } from '@/data/posts';

export function TagCloud({ activeTag }: { activeTag?: string }) {
  const tags = useMemo(() => {
    const tagCount = new Map<string, number>();
    for (const post of posts) {
      for (const tag of post.tags) {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      }
    }
    return Array.from(tagCount.entries())
      .sort((a, b) => b[1] - a[1]);
  }, []);

  const maxCount = Math.max(...tags.map(([, count]) => count));
  const minCount = Math.min(...tags.map(([, count]) => count));

  const getSize = (count: number) => {
    if (maxCount === minCount) return 'text-base';
    const ratio = (count - minCount) / (maxCount - minCount);
    if (ratio > 0.7) return 'text-lg font-semibold';
    if (ratio > 0.3) return 'text-base font-medium';
    return 'text-sm';
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(([tag, count]) => (
        <Link
          key={tag}
          to={`/tags?filter=${encodeURIComponent(tag)}`}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 ${
            activeTag === tag
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-primary/5'
          } ${getSize(count)}`}
        >
          {tag}
          <span className="text-xs opacity-60">({count})</span>
        </Link>
      ))}
    </div>
  );
}
