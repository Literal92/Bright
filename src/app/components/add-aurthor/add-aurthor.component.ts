import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../../models/author.model';

@Component({
    selector: 'app-add-aurthor',
    templateUrl: './add-aurthor.component.html',
})
export class AddAurthorComponent { 

    newAuthorForm = new FormGroup({
        name: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required),
        // Add more form controls for other author properties as needed
    });

    constructor() {}

    addNewAuthor(): void {
        if (this.newAuthorForm.valid) {
            const newAuthor: Author = {
                id: Math.random() * 100,
                name: this.newAuthorForm.get('name')!.value || '',
                imageUrl: this.newAuthorForm.get('imageUrl')!.value || '',
                totalPosts: 0,
                totalComments: 0
            };
            // Call service method to add new author
            //   this.authorService.addAuthor(newAuthor).subscribe(
            //     (response) => {
            //       // Handle success response
            //       console.log('New author added:', response);
            //       // Reset the form after successful addition
            //       this.newAuthorForm.reset();
            //       // Reload authors to reflect the changes
            //       this.loadAuthors();
            //     },
            //     (error) => {
            //       // Handle error response
            //       console.error('Error adding new author:', error);
            //     }
            //   );
        } else {
            // Form is invalid, mark all fields as touched to show validation messages
            this.newAuthorForm.markAllAsTouched();
        }
    }
}
