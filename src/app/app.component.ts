import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<nav class='navbar navbar-default'>
  <div class='container-fluid'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/course']">Course</a></li>
          <li><a [routerLink]="['/student']">Student</a></li>
          <li><a [routerLink]="['/subject']">Subject</a></li>
          <li><a [routerLink]="['/teacher']">Teacher</a></li>
      </ul>
  </div>
</nav>
  <div class="container">
     <router-outlet></router-outlet>
  </div>
  
`
})
export class AppComponent {
  title = 'app';
}
