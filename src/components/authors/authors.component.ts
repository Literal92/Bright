import { Component } from "@angular/core";
import { Author, AuthorSortType } from "../../models/author.model";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {

    authors: Author[] = [];
    sortType: AuthorSortType = AuthorSortType.Name;
    AuthorSortType = AuthorSortType;

    constructor() {
        // Initialize authors array with some sample data
        this.authors = [
            new Author({
                id: 1,
                name: 'John Doe',
                imageUrl: 'https://example.com/john.jpg',
                totalPosts: 15,
                totalComments: 20,
            }),
            new Author({
                id: 2,
                name: 'Jane Smith',
                imageUrl: 'https://example.com/jane.jpg',
                totalPosts: 10,
                totalComments: 25,
            }),
        ];
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
}