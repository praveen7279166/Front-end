import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  sUserName: string = '';

  sPassword: string = '';

  constructor(private authSrvc: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    this.authSrvc.fnSignUp(this.sUserName, this.sPassword);
    this.authSrvc.bSignedIn = false;
  }

}
