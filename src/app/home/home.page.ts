import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Array<any> = [];

  constructor() {
    this.items = [
      {title: 'Data Drive the App', done: true},
      {title: 'Toggle Items', done: true},
      {title: 'Create New Items', done: false},
      {title: 'Delete Items', done: false},
      {title: 'Edit Items', done: false},
    ];
  }

}
