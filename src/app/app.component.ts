import { Component } from '@angular/core';
import { MenuItem } from './common/top-nav/menu-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subMenuList: MenuItem[] = [];
  title = 'learnings';

  onSubMenuReceived(items: MenuItem[]) {
    console.log(`SUB MENU RECEIVED`);
    this.subMenuList = items;
  }
}
