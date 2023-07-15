import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor() {}

  ngOnInit(): void {}

  change() {
    this.child.show('Testing');
  }
}
