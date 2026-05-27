import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import type { Post } from '@/types';
import { TagBadge } from './TagBadge';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-200"
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
