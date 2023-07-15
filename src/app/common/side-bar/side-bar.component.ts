import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.data = [
    //   {
    //     route: 'angular/view-child',
    //     label: 'View Child',
    //   },
    //   {
    //     route: 'angular/two-way-binding',
    //     label: 'Two way binding',
    //   },
    //   {
    //     route: 'angular/directive',
    //     label: 'Directive',
    //   },
    //   {
    //     route: 'view-child',
    //     label: 'pipes',
    //   },
    //   {
    //     route: 'imp-links',
    //     label: 'Important links',
    //   },
    // ];
  }
}
