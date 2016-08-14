import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  template:` <h1>{{title}}</h1>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
	title = 'Tour of Heroes';
}
