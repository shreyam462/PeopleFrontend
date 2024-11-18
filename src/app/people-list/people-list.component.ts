import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.peopleService.getPeople().subscribe(
      (data: any) => {
        this.people = data;
      },
      (error) => {
        console.error('Error fetching people:', error);
      }
    );
  }
}
