import { Link } from 'react-router-dom';

interface TagBadgeProps {
  tag: string;
  clickable?: boolean;
  size?: 'sm' | 'md';
}

export function TagBadge({ tag, clickable = true, size = 'sm' }: TagBadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';

  if (clickable) {
    return (
      <Link
        to={`/tags?filter=${encodeURIComponent(tag)}`}
        className={`inline-block rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors ${sizeClasses}`}
        onClick={(e) => e.stopPropagation()}
      >
        {tag}
      </Link>
    );
  }

  return (
    <span
      className={`inline-block rounded-full bg-primary/10 text-primary font-medium ${sizeClasses}`}
    >
      {tag}
    </span>
  );
}
