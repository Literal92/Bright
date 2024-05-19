import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../shared/http.service";
import { Author } from "../../models/author.model";
import { Article } from "../../models/article.model";
import { Comment } from '../../models/comment.model';
import { map } from "rxjs";

@Component({
    selector: 'app-aurthor-detail',
    templateUrl: './author-detail.component.html',
})
export class AurthorDetailComponent implements OnInit {

    authorId: string | null;
    author: Author | undefined;
    publications: Article[] = [];
    comments: Comment[] = [];
    itemsPerArticlePage = 5; // Items per page
    currentArticlePage = 1; // Current page
    totalArticles = 0;
    itemsPerCommentPage = 5; 
    currentCommentPage = 1; 
    totalComments = 0;

    get totalPageComments(): number {
        return Math.ceil(this.totalComments / this.itemsPerCommentPage);
    }

    get totalPageArticles(): number {
        return Math.ceil(this.totalArticles / this.itemsPerArticlePage);
    }

    constructor(
        private route: ActivatedRoute,
        private service: HttpService
    ) { }

    ngOnInit(): void {
        this.authorId = this.route.snapshot.paramMap.get('id');
        this.publications = this.getArticles();
        this.comments = this.getCommets()
        if (this.authorId) {
            this.author = this.service.getAuthorById(+this.authorId);
        }
    }

    getArticles(): Article[] {
        if (this.authorId) {
            const articlesObject = this.service.getArticleByAuthorId(+this.authorId, this.currentArticlePage, this.itemsPerArticlePage)
            this.totalArticles = articlesObject.total;
            return articlesObject.articles;
        }
        return [];
    }

    getCommets(): Comment[] {
        if (this.authorId) {
            const commentsObject = this.service.getCommentsByAuthorId(+this.authorId, this.currentCommentPage, this.itemsPerCommentPage)
            this.totalComments = commentsObject.total;
            return commentsObject.comments;
        }
        return [];
    }

    onArticlePageChange(pageNumber: number): void {
        this.currentArticlePage = pageNumber;
        // Fetch data for the new page
        this.publications = this.getArticles();
    }

    onCommentPageChange(pageNumber: number): void {
        this.currentCommentPage = pageNumber;
        // Fetch data for the new page
        this.comments = this.getCommets();
    }

    generateCommentPageArray(): number[] {
        const pageArray: number[] = [];
        for (let i = 1; i <= this.totalPageComments; i++) {
            pageArray.push(i);
        }
        return pageArray;
    }

    generateArticlePageArray(): number[] {
        const pageArray: number[] = [];
        for (let i = 1; i <= this.totalPageArticles; i++) {
            pageArray.push(i);
        }
        return pageArray;
    }
}