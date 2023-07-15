import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  msg: string =''
  constructor() {}

  ngOnInit(): void {
    this.msg =''
  }

  show(data: string) {
    
    this.msg = data;
  }
}
