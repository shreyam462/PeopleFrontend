import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  personId: string = '';
  person: { name: string; age: number; gender: string; mobile: string } = {
    name: '',
    age: 0,
    gender: '',
    mobile: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  saveChanges(): void {
    this.peopleService.updatePerson(this.personId, this.person).subscribe(
      () => {
        alert('Person updated successfully!');
        this.router.navigate(['/list']);
      },
      (error) => {
        console.error('Error updating person:', error);
      }
    );
  }
}
