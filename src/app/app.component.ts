import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [RouterModule], // Import RouterModule for router-outlet
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
