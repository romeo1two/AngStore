import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // template: `<div class="bg-success p-2 text-center text-white">
  //                   This is SportsStore
  //              </div>`
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = 'app';
}
