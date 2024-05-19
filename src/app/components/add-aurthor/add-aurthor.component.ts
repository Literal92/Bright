import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../../models/author.model';
import { HttpService } from '../../shared/http.service';

@Component({
    selector: 'app-add-aurthor',
    templateUrl: './add-aurthor.component.html',
})
export class AddAurthorComponent {

    newAuthorForm = new FormGroup({
        name: new FormControl('', Validators.required),
    });

    constructor(private service: HttpService) { }

    addNewAuthor(): void {
        if (this.newAuthorForm.valid) {
            const newAuthor: Author = {
                id: 0,
                name: this.newAuthorForm.get('name')!.value || '',
                imageUrl: 'https://picsum.photos/200',
                totalPosts: 0,
                totalComments: 0
            };
            // Call service method to add new author
            this.service.addAuthor(newAuthor);
            this.newAuthorForm.reset();
        } else {
            // Form is invalid, mark all fields as touched to show validation messages
            this.newAuthorForm.markAllAsTouched();
        }
    }
}
