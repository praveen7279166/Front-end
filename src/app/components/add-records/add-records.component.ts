import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { HelperService } from 'src/app/services/helper.service';
import { oRecordInfo, eLeaveDuration, eLeaveType } from 'src/app/types/record-type';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.scss']
})
export class AddRecordsComponent implements OnInit {

  public readonly eLeaveDuration: any = eLeaveDuration;

  public readonly eLeaveType: any = eLeaveType;

  nDate: Date;
  
  oUserData: oRecordInfo[] = [];

  sName: string = '';

  sReason: string = '';

  eLeaveTypeOption: eLeaveType = eLeaveType.PL;

  eLeaveDur: eLeaveDuration = eLeaveDuration.FULL_DAY;

  public bAddRecord: boolean = true;

  constructor(private http: HttpClient, private oCD: ChangeDetectorRef, private authSrvc: AuthenticationService, private router: Router, private heperSrvc: HelperService) {}

  ngOnInit(): void {
    if(!this.authSrvc.fnGetAccTkn()) {
      this.router.navigate(['']);
    }
  }

  public fnAddNameClick(): void {
    this.heperSrvc.fnAddRecord({sReason: this.sReason, nDate: this.nDate, bIsFullDay: this.eLeaveDur === eLeaveDuration.FULL_DAY ? true : false, bIsLeaveTypeCL: this.eLeaveTypeOption === eLeaveType.CL ? true : false}).pipe(map((oData: any): oRecordInfo => {
      let oAddedLeave: oRecordInfo;
      if(oData.bSuccess) {
        const oOutputData: any = oData.tData;
        oAddedLeave = {sId: oOutputData._id, nDate: oOutputData.nDate, sReason: oOutputData.sReason, bFullDay: oOutputData.bIsFullDay, bIsLeaveTypeCL: oOutputData.bIsLeaveTypeCL };
      }

      return oAddedLeave;
    }))
    .subscribe((oAddedUser: oRecordInfo) => {
      this.oUserData.push(oAddedUser);
      this.oCD.detectChanges();
    });
  }

  fnToggle(): void {
    this.router.navigate(["/homepage/show-records"]);
  }
}
