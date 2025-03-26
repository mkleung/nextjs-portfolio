// pages/blog.tsx
import { GetStaticProps } from 'next';
import { getCategorisedArticles } from '../lib/articles'; 
import { ArticleItem } from '../types';

type BlogProps = {
  articles: Record<string, ArticleItem[]>;
};

const Blog = ({ articles }: BlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      {Object.keys(articles).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {articles[category].map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getCategorisedArticles();

  return {
    props: {
      articles,
    },
  };
};

export default Blog;
