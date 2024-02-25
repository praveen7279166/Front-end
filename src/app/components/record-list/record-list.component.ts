import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication.service';
import { oRecordInfo } from 'src/app/types/record-type';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordListComponent implements OnInit {

  oUserData: oRecordInfo[] = [];

  constructor(private http: HttpClient, private authSrvc: AuthenticationService, private oCD: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    if(!this.authSrvc.fnGetAccTkn()) {
      this.router.navigate(["/sign-in"]);
    }
    else {
      this.fnFetchRecord();
    }
  }

  public fnDeleteRecordClick(sId: string): void {
    this.http.delete('http://ec2-3-109-55-221.ap-south-1.compute.amazonaws.com:443/api/delete/' + sId).subscribe((oRes: any) => {
      this.fnFetchRecord();
    })
  }
  

  fnFetchRecord(): void {
    this.http.get('http://ec2-3-109-55-221.ap-south-1.compute.amazonaws.com:443/api/fetch-records').pipe(map((oData: any): oRecordInfo[] => {
      let oFilteredData: oRecordInfo[] = [];
      if(oData.bSuccess) {
        oFilteredData = oData.tData.map((ele) => { return {sId: ele._id, nDate: ele.nDate, sReason: ele.sReason, bFullDay: ele.bIsFullDay, bIsLeaveTypeCL: ele.bIsLeaveTypeCL }});
      }
  
      return oFilteredData;
    }))
    .subscribe((UserData: oRecordInfo[]) => {
      if(UserData.length > 0)
        this.oUserData = [...UserData];
      else
        this.oUserData = [];
      
      this.oCD.detectChanges();
    });
  }

  fnToggle(): void {
    this.router.navigate(["/homepage/add-record"]);
  }

}
