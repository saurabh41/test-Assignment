import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DataTableComponent } from "../data-table/data-table.component"

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,DataTableComponent],
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  searchForm: FormGroup;

  @ViewChild(DataTableComponent) dataTable!: DataTableComponent;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      position: [''],
      phoneNumber: [''],
      address : ['']
    });
  }

  onSearch() {
    this.dataTable.dataSearch(this.searchForm.value);

  }

  onReset() {
    this.searchForm.reset();
    this.dataTable.resetTable()
  }
}
