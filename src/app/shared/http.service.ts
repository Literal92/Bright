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

  getArticles() {
  }

  getArticleById(id: number): Article | undefined {
    return ARTICLES.find(article => article.id === id);
  }

  getAuthorById(id: number): Author | undefined {
    return AUTHORS.find(author => author.id === id);
  }

  getComments(): Comment[] {
    return COMMENTS;
  }

}
