// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-data-table',
//   imports: [],
//   templateUrl: './data-table.component.html',
//   styleUrl: './data-table.component.scss'
// })
// export class DataTableComponent {

// }


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() data: any[] = [];
}
