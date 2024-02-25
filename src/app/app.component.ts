import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, filter, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { oRecordInfo } from './types/record-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public bShowless: boolean = true;
  public sData: string = "StrictPropertyInitialzer is a flag introduced in typescript 2.7. It's up to everybody to choose if you want to enable all these flags and strictly follow all rules or turn off some validation. It makes completely no sense to follow all the rules every time. If your code gets too verbose and downsides and are bigger than advantages you should definetly turn it off. I am not telling that this is the best practice in all cases but its definetly viable option in most cases";
  public sClickedTheme: string = '';

  startDate: any;

  sName: string = '';

  sReason: string = '';

  nDate: Date;

  oUserData: oRecordInfo[] = [];

  public bIsAuthenticated: boolean = false;

  public oNewFormControl: UntypedFormControl = new UntypedFormControl('');

  public oNewFormControl2: UntypedFormControl = new UntypedFormControl('');

  myContext = {$implicit: 'World', localSk: 'Svet'};

  constructor(private http: HttpClient, private oCD: ChangeDetectorRef, private router: Router, public AuthSrvc: AuthenticationService) {}
  ngOnInit(): void {

    // this.oNewFormControl.valueChanges.pipe(debounceTime(2000), distinctUntilChanged(),
    //   switchMap((oData) => {
    //     console.log(oData);
    //     return this.fnGetData(oData)
    //     .pipe(
    //       map((oData: ResultDataObject) => oData.products.filter((productAt) => productAt.title.toLowerCase().includes(this.oNewFormControl.value.toLowerCase())))
    //       )
    //   })
    // )
    //  .subscribe((oFilteredData) => {
    //   console.log(oFilteredData);
    // });

    // this.oNewFormControl2.valueChanges.pipe(debounceTime(500), distinctUntilChanged(),
    //   switchMap((oData) => {
    //     console.log(oData);
    //     return from(this.fnGetData(oData)) 
    //     .pipe(
    //       map((oData: ResultDataObject) => oData.products.filter((productAt) => productAt.title.toLowerCase().includes(this.oNewFormControl.value.toLowerCase())))
    //       )
    // }))
    //  .subscribe((oFilteredData) => {
    //   console.log(oFilteredData);
    // });

    // this.http.get('https://www.instagram.com/developer/').subscribe((res: any) => {
    //   console.log(res);
    // })
  }
  
  // public fnGetData(searchStr: string): Promise<any> {
  //   return new Promise((resolve) => {
  //     if (searchStr.length <= 2) {
  //       setTimeout(() => {
  //         this.http.get('https://dummyjson.com/products').subscribe((data) => {
  //           resolve(data);
  //         })
  //       }, 3000);
  //     }
  //     else {
  //       this.http.get('https://dummyjson.com/products').subscribe((data) => resolve(data));
  //     }
  //   })
  // }

  // public fnGetData(searchStr: string): Observable<any> {
  //   return  this.http.get('https://dummyjson.com/products');
  // }

  // public fnChangeTheme(color: string): void {
  //   this.sClickedTheme = color;
  // }
}