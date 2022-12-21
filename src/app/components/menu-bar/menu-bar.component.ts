import { Component } from '@angular/core';
import { faHouse, faNewspaper, faTree} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})

export class MenuBarComponent {
  faHouse = faHouse;
  faNewspaper = faNewspaper;
  faTree = faTree
  }
