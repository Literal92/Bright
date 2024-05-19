import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { ARTICLES } from '../data/Article';
import { Author } from '../models/author.model';
import { AUTHORS } from '../data/Author';
import { COMMENTS } from '../data/Comment';
import { Comment } from '../models/comment.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private authorSubject = new BehaviorSubject<Author[]>([]);
  public author$: Observable<Author[]> = this.authorSubject.asObservable();

  constructor() { }

  searchAuthors(query: string, offset: number, limit: number): void {
    const startIndex = offset;
    const endIndex = offset + limit;
    const filterAuthors = AUTHORS
      .filter(author => author.name.toLocaleLowerCase().includes(query.toLowerCase()))
      .slice(startIndex, endIndex);
    this.authorSubject.next(filterAuthors);
  }

  getAuthorById(id: number): Author | undefined {
    return AUTHORS.find(author => author.id === id);
  }

  getArticleByAuthorId(id: number, currentPage: number, itemsPerPage: number): { articles: Article[], total: number } {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articles = ARTICLES.filter(comment => comment.authorId === id);
    return { articles: articles.slice(startIndex, endIndex), total: articles.length };
  }

  getCommentsByAuthorId(id: number, currentPage: number, itemsPerPage: number): { comments: Comment[], total: number } {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const comments = COMMENTS.filter(comment => comment.authorId === id);
    return { comments: comments.slice(startIndex, endIndex), total: comments.length };
  }

}