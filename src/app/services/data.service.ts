import { Person } from '../models/person.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://mocki.io/v1/88b12545-3263-4e9c-bf55-d73f107f9d77';

  constructor(private httpClient: HttpClient) { }

  public getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl)
  }
}
