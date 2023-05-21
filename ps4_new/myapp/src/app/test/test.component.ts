import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private router: Router){};

  signUpUsers: any[] = [];  // blank array to store object.
  signUpObj: any = {
    username: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    username: '',
    password: ''
  };

  login() {
    const data = this.signUpUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if (data != undefined) {
      alert('login success');
      this.router.navigate(['profile']);
    } else {
      alert('invalid username');
    }
  }

  signup() {
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('arr', JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      username: '',
      email: '',
      password: ''
    }
    alert('registerd SUccess');
  }
}
