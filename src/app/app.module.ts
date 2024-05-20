import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AddAurthorComponent } from './components/add-aurthor/add-aurthor.component';
import { HeaderComponent } from './shared/util/header.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AddAurthorComponent,
    HeaderComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
