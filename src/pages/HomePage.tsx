import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { posts } from '@/data/posts';
import { PostCard } from '@/components/PostCard';
import { TagCloud } from '@/components/TagCloud';

export function HomePage() {
  const [searchParams] = useSearchParams();
  const filterTag = searchParams.get('filter');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (filterTag) {
      result = result.filter((post) => post.tags.includes(filterTag));
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
    return result;
  }, [filterTag, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero section */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          餐飲SaaS出海筆記
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          分享餐飲科技產品國際化的思考、技術實踐和市場洞察。
          <br />
          從市場分析到產品設計，從支付整合到團隊管理。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        {/* Main content */}
        <div>
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
            />
          </div>

          {/* Filter tag notice */}
          {filterTag && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">當前篩選：</span>
              <a
                href="/tags"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {filterTag}
                <span className="ml-1 text-xs opacity-70">x</span>
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                清除篩選
              </a>
            </div>
          )}

          {/* Posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">沒有找到匹配的文章</p>
              <a
                href="/"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                查看全部文章
              </a>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              標籤
            </h3>
            <TagCloud activeTag={filterTag || undefined} />
          </div>
        </aside>
      </div>

      {/* Mobile tag cloud */}
      <div className="lg:hidden mt-10 pt-8 border-t border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
          標籤
        </h3>
        <TagCloud activeTag={filterTag || undefined} />
      </div>
    </div>
  );
}
