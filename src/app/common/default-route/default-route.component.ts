import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-default-route',
  templateUrl: './default-route.component.html',
  styleUrls: ['./default-route.component.scss'],
})
export class DefaultRouteComponent implements OnInit {
  constructor(private router: Router) {}

  message: string = '';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.message = `Will be coming with this implementation soon for ${event?.url}`;
      }
    });
  }
}
