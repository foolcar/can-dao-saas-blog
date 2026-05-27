import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '@/data/posts';

export function TagsPage() {
  const tagData = useMemo(() => {
    const tagMap = new Map<string, { count: number; posts: typeof posts }>();
    for (const post of posts) {
      for (const tag of post.tags) {
        const existing = tagMap.get(tag);
        if (existing) {
          existing.count++;
          existing.posts.push(post);
        } else {
          tagMap.set(tag, { count: 1, posts: [post] });
        }
      }
    }
    return Array.from(tagMap.entries()).sort((a, b) => b[1].count - a[1].count);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">標籤分類</h1>
      <p className="text-muted-foreground mb-8">
        按標籤瀏覽所有文章，共 {tagData.length} 個標籤
      </p>

      {/* Tag cloud */}
      <div className="mb-12 p-6 bg-card border border-border rounded-lg">
        <div className="flex flex-wrap gap-3">
          {tagData.map(([tag, data]) => (
            <Link
              key={tag}
              to={`/?filter=${encodeURIComponent(tag)}`}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {tag}
              </span>
              <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                {data.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tag details */}
      <div className="space-y-8">
        {tagData.map(([tag, data]) => (
          <section key={tag}>
            <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
              {tag}
              <span className="text-sm font-normal text-muted-foreground ml-2">
                {data.count} 篇文章
              </span>
            </h2>
            <div className="space-y-3">
              {data.posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/post/${post.slug}`}
                  className="block p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                >
                  <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
