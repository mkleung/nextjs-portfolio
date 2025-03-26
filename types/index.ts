export type ArticleItem = {
    id: string
    title: string
    date: string
    category: string
    contentHtml: string
  }
  

export interface  BlogProps  {
  articles: Record<string, ArticleItem[]>;
};