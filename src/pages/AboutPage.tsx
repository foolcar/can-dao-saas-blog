import { Mail, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">關於本博客</h1>

      <div className="prose">
        <section className="mb-8">
          <h2>關於作者</h2>
          <p>
            我是一名餐飲SaaS領域的產品經理/工程師，有多年國內餐飲科技行業的從業經驗。
            近年來專注於餐飲SaaS產品的國際化/出海，曾在東南亞多個市場推動產品落地。
          </p>
          <p>
            這個博客是我記錄餐飲SaaS出海過程中的思考、踩坑和經驗總結的地方。
            希望這些內容能幫助到正在考慮或已經開始出海旅程的同行。
          </p>
        </section>

        <section className="mb-8">
          <h2>博客定位</h2>
          <p>本博客聚焦於以下主題：</p>
          <ul>
            <li><strong>市場分析</strong>：海外餐飲市場的機會、挑戰和趨勢</li>
            <li><strong>產品設計</strong>：面向海外市場的POS系統、訂餐系統等產品設計</li>
            <li><strong>技術實踐</strong>：國際化架構、支付整合、合規適配等技術方案</li>
            <li><strong>團隊管理</strong>：跨國遠程團隊的搭建和管理經驗</li>
            <li><strong>行業觀察</strong>：餐飲SaaS行業的全球發展動態</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>聯繫方式</h2>
          <p>如果你對餐飲SaaS出海感興趣，或有任何問題和合作意向，歡迎聯繫：</p>
          <div className="not-prose flex flex-col gap-3 mt-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm text-foreground"
            >
              <Mail size={16} className="text-primary" />
              hello@example.com
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm text-foreground"
            >
              <Globe size={16} className="text-primary" />
              GitHub
            </a>
          </div>
        </section>

        <section>
          <h2>免責聲明</h2>
          <p>
            本博客中的所有內容僅代表個人觀點，不構成任何投資、商業或法律建議。
            文章中涉及的技術方案和商業策略僅供參考，實施前請根據自身情況進行評估。
          </p>
        </section>
      </div>
    </div>
  );
}
