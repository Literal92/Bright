import { Article, ArticleType } from "../models/article.model";

export const ARTICLES: Article[] = [
  {
    id: 1,
    type: ArticleType.Article,
    title: 'Introduction to Angular',
    createdOn: new Date('2022-05-01'),
  },
  {
    id: 2,
    type: ArticleType.Book,
    title: 'Angular Best Practices',
    createdOn: new Date('2022-05-05'),
  },
  {
    id: 3,
    type: ArticleType.Article,
    title: 'Getting Started with TypeScript',
    createdOn: new Date('2022-05-10'),
  },
  // Add more mock articles as needed
];
