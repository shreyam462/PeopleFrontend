import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css'],
})
export class DeletePersonComponent implements OnInit {
  personId: string = '';
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id') || '';
    this.loadPerson();
  }

  loadPerson(): void {
    this.peopleService.getPersonById(this.personId).subscribe(
      (data: any) => {
        this.person = data;
      },
      (error) => {
        console.error('Error fetching person:', error);
      }
    );
  }

  deletePerson(): void {
    this.peopleService.deletePerson(this.personId).subscribe(
      () => {
        alert('Person deleted successfully!');
        this.router.navigate(['/list']);
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }
}
