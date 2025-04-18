import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchPanelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent {

  constructor() {
  }
}
