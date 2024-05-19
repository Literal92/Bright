import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid d-flex">
        <a class="navbar-brand" routerLink="/authors">Home</a>
    </div>
  </nav>`,
})
export class HeaderComponent { }
