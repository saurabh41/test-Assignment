import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root' // This ensures it’s available globally
})
export class DataService {
  private apiUrl = 'https://mp1855331cde406ca0fd.free.beeceptor.com/data';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<{ people: Person[] }>(this.apiUrl).pipe(
      map(response => response.people) // Because the data is nested under "people"
    );
  }
}
