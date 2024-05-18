import { Component } from "@angular/core";
import { Author, AuthorSortType } from "../../models/author.model";
import { HttpService } from "../../shared/http.service";
import { map } from "rxjs";


@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
})
export class AuthorsComponent {

    authors: Author[] = [];
    sortType: AuthorSortType = AuthorSortType.Name;
    AuthorSortType = AuthorSortType;
    searchQuery: string = '';
    totalAuthors: number = 0; // Total number of authors
    offset: number = 0; // Offset for pagination
    limit: number = 4; // Limit for pagination
  

    constructor(private service: HttpService) {
        this.service.searchAuthors(this.searchQuery, this.offset, this.limit);
        // Initialize authors array with some sample data
        this.service.author$.pipe(
            map((res: Author[]) => {
                debugger
                if (this.offset === 0) {
                    this.authors = res;
                } else {
                    this.authors.push(...res);
                }
                this.totalAuthors = this.authors.length; // Update total number of authors
            })
        ).subscribe();
    }

    sortBy(type: AuthorSortType) {
        this.sortType = type;
        // Implement sorting logic based on the selected sort type
        switch (type) {
            case AuthorSortType.Name:
                this.authors.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case AuthorSortType.totalPosts:
                this.authors.sort((a, b) => b.totalPosts - a.totalPosts);
                break;
            case AuthorSortType.totalComments:
                this.authors.sort((a, b) => b.totalComments - a.totalComments);
                break;
            default:
                break;
        }

    }

    searchAuthors(): void {
        this.offset = 0; // Reset offset
        this.service.searchAuthors(this.searchQuery, this.offset, this.limit);
    }

    loadMore(): void {
        this.offset += this.limit; // Increment offset for next pagination
        this.service.searchAuthors(this.searchQuery, this.offset, this.limit);
    }
}