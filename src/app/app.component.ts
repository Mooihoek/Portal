import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  about = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val: RouterEvent) => {
      if (val.url === '/tools') {
        this.about = true;
      } else {
        this.about = false;
      }
    });
  }
}
