import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

export const routes: Routes = [
  { path: 'list', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent },
  { path: '**', redirectTo: 'list' }, // Default route
];
