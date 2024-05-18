import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: '', redirectTo: '/authors', pathMatch: 'full' }, // Redirect to the default view
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }