import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { AddRecordsComponent } from './components/add-records/add-records.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecordListComponent } from './components/record-list/record-list.component';

const routes: Routes = [
  { path:  '', redirectTo: '/sign-in', pathMatch: 'full' },
  // {path: 'home', component: HomepageComponent, children: [
      
  //     { path: 'sign-up', component: SignUpComponent }
  //   ] 
  // },
  { path: 'sign-in', component: SignInComponent },
  { path: 'add-record', component: AddRecordsComponent },
  { path: 'homepage', component: HomepageComponent, children: [
      { path: 'add-record', component: AddRecordsComponent },
      { path: 'show-records', component: RecordListComponent },
      { path: 'update/:id', component: AddRecordsComponent }
    ]
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
