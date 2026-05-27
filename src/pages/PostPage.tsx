import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { posts } from '@/data/posts';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { TagBadge } from '@/components/TagBadge';
import { ReadingProgress } from '@/components/ReadingProgress';

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <p className="text-muted-foreground mb-6">請求的文章不存在或已被移除。</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft size={16} />
          返回首頁
        </Link>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          返回文章列表
        </Link>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} clickable />
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
            <span className="flex items-center gap-1.5">
              <User size={16} />
              餐飲SaaS出海團隊
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article content */}
        <MarkdownRenderer content={post.content} />

        {/* Footer navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowLeft size={16} />
            返回全部文章
          </Link>
        </div>
      </article>
    </>
  );
}
