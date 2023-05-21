import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public username = '';
  public password = '';
  arr: any[] = [];
  constructor() {
    const obj = localStorage.getItem('arr');
    if (obj) {
      this.arr = JSON.parse(obj);
    }
    console.log(this.arr);
    this.username = this.arr[0].username;
    this.password = this.arr[0].password;
  };

  

}
