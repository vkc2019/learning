import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.scss'],
})
export class TwowaybindComponent implements OnInit {
  message: string = '';
  constructor(){}

  ngOnInit(): void {
    
  }
}
