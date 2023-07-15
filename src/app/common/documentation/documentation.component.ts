import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  currentRoute = '';
  constructor(private router: Router) {}

  docData: any[] = [];

  selectedDoc: any;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let item = event?.url.split('/');
        this.currentRoute = item[item.length - 1];
        console.log(`${this.currentRoute}`);
        const it = this.docData.find((x) => x.id === this.currentRoute);
        if (it) {
          this.selectedDoc = it;
        } else {
          this.selectedDoc = null;
        }
      } else {
        this.currentRoute = '';
      }
    });

    this.docData = [
      {
        id: 'two-way-binding',
        url: 'https://angular.io/guide/two-way-binding',
        title: 'Two-way binding',
        description: '',
      },
    ];
  }
}
