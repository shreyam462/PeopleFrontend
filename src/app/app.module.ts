import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { routes } from './app.routes';
import { AppComponent } from './app.component'; // Import the standalone AppComponent

@NgModule({
  declarations: [
    PeopleListComponent,
    EditPersonComponent,
    DeletePersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Define routes here
    AppComponent, // Import standalone AppComponent
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent], // Bootstrap the standalone AppComponent
})
export class AppModule {}
