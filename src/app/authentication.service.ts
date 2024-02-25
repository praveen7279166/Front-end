import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private sAcsTkn: string = '';

  private sRfshTkn: string = '';

  public bSignedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  fnSignUp(sUserName: string, sPassword: string): void {
    this.http.post('http://ec2-3-109-55-221.ap-south-1.compute.amazonaws.com:443/auth/sign-up',{sUserName: sUserName, sPassword: sPassword})
    .subscribe(res => {console.log(res)});
  }

  fnSignIn(sUserName: string, sPassword: string): void {
    this.http.post('http://ec2-3-109-55-221.ap-south-1.compute.amazonaws.com:443/auth/sign-in',{sUserName: sUserName, sPassword: sPassword})
    .subscribe((res: any) => {
      if(res.bSuccess) {
        const expiresInSec: any = res.expiresIn;
        this.sAcsTkn = res.sAccessToken;
        this.sRfshTkn = res.sRefreshTkn;
        this.bSignedIn = true;

        setTimeout(() => {
          this.bSignedIn = false;
          this.sAcsTkn = '';
          this.router.navigate([""]);
        }, expiresInSec * 1000);
        this.router.navigate(["/homepage/add-record"]);
      }
    });
  }

  public fnGetAccTkn(): string {
    return this.sAcsTkn;
  }
}
