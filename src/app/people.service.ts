import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private baseUrl = 'http://localhost:3000'; // Backend server URL

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(`${this.baseUrl}/person`);
  }

  getPersonById(id: string) {
    return this.http.get(`${this.baseUrl}/person/${id}`);
  }

  addPerson(person: any) {
    return this.http.post(`${this.baseUrl}/person`, person);
  }

  updatePerson(id: string, person: any) {
    return this.http.put(`${this.baseUrl}/person/${id}`, person);
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.baseUrl}/person/${id}`);
  }
}
