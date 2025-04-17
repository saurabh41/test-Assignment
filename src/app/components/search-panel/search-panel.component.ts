// @Component({
//   standalone: true,
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   imports: [DataTableComponent]
// })
// export class SearchPanelComponent {

// }


// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {DataTableComponent}  from "../data-table/data-table.component"


// @Component({
//   selector: 'app-search-panel',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule,DataTableComponent],
//   templateUrl: './search-panel.component.html',
//   styleUrls: ['./search-panel.component.scss']

// })
// export class SearchPanelComponent {
//   // your logic here
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      position: [''],
      phoneNumber: ['']
    });
  }

  onSearch() {
    this.search.emit(this.searchForm.value);
  }

  onReset() {
    this.searchForm.reset();
    this.search.emit(this.searchForm.value);
  }
}
