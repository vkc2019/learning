import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-imp-links',
  templateUrl: './imp-links.component.html',
  styleUrls: ['./imp-links.component.scss'],
})
export class ImpLinksComponent implements OnInit {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

}
