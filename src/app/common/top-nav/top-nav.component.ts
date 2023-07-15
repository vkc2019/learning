import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem, menuData } from './menu-data';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Output() outSubMenu = new EventEmitter<MenuItem[]>();
  data: any[] = [];
  subMenuList: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = menuData;
    this.outSubMenu.emit(this.data[3].subMenu[0].subMenu);
  }

  setSubMenu(id: number) {
    const item = this.data.find((x: MenuItem) => x.id == id);
    if (item) {
      if (item.subMenu.length) {
        this.subMenuList = item.subMenu;
      } else {
        this.router.navigate([item.route]);
        this.subMenuList = [];
      }
    }
  }

  onSubMenuClick(id: number) {
    const item = this.subMenuList.find((x: MenuItem) => x.id === id);
    if (item) {
      if (item.subMenu && item.subMenu.length) {
        console.log(`SUB MENU EMITTED ${item.subMenu.length}`);
        this.outSubMenu.emit(item.subMenu);
      } else {
        this.router.navigate([item.route]);
        console.log(`URL ${item.route}`);
      }
    }
  }
}
