import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSignUpClick(): void {
    this.router.navigate(["home/sign-up"]);
  }

  public onSignInClick(): void {
    this.router.navigate(["home/sign-in"]);
  }

}
