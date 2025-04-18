
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent  {
  constructor(private dataService :DataService ){}
  data: any[] = [];

  dataSearch(fields:any){
      this.dataService.getPeople().subscribe((data : Person[]) => {
      this.data = this.filterPeople(fields,data)   
    });
  }


  filterPeople(userInput: any, people: any[]): any[] {
    return people.filter(person => {
      return Object.keys(userInput).some(key => {
        const inputValue = userInput[key]?.trim().toLowerCase();
        const personValue = person[key]?.toLowerCase();
  
        return inputValue && personValue?.includes(inputValue);
      });
    });
  }
  
  resetTable(){
    this.data = []
  }

  }
