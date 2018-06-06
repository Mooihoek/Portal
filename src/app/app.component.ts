import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tools = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val: RouterEvent) => {
      if (val.url === '/tools') {
        this.tools = true;
      } else {
        this.tools = false;
      }
    });
  }
}
