import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  sUserName: string = '';

  sPassword: string = '';

  bIsSignIn: boolean = true;

  constructor(private authSrvc: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignIn(): void {
    if(this.bIsSignIn)
      this.authSrvc.fnSignIn(this.sUserName, this.sPassword);
    else
      this.authSrvc.fnSignUp(this.sUserName, this.sPassword);
    
    this.authSrvc.bSignedIn = true;
  }

  @HostListener('keyup', ['$event'])
  fnHandleKeyboardEvents(oEvent: KeyboardEvent) {
    switch (oEvent.key) {
      case 'Enter': {
        if(!!this.sUserName && !!this.sPassword)
        this.onSignIn();
        break;
      }
      default:
        break;
    }
  }

}
