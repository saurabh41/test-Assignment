import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataService } from './services/data.service';
import { Person } from './models/person.model';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchPanelComponent, DataTableComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allPeople: Person[] = [];
  filteredPeople: Person[] = [];

  constructor(private dataService: DataService) {
    // this.loadPeople();
  }

  loadPeople() {
    this.dataService.getPeople().subscribe((data) => {
      this.allPeople = data;
      this.filteredPeople = [...data];
    });
  }

  handleSearch(criteria: any) {
    this.filteredPeople = this.allPeople.filter(person =>
      (!criteria.firstName || person.firstName.toLowerCase().includes(criteria.firstName.toLowerCase())) &&
      (!criteria.lastName || person.lastName.toLowerCase().includes(criteria.lastName.toLowerCase())) &&
      (!criteria.position || person.position.toLowerCase().includes(criteria.position.toLowerCase())) &&
      (!criteria.phoneNumber || person.phoneNumber.includes(criteria.phoneNumber))
    );
  }
}
