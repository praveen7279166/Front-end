import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { AddRecordsComponent } from './components/add-records/add-records.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { RecordListComponent } from './components/record-list/record-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SignUpComponent,
    SignInComponent,
    AddRecordsComponent,
    RecordListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
