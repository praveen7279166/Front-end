import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordType } from '../types/record-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http: HttpClient) { }

  public fnAddRecord(oRecord: RecordType): Observable<any> {
    return this.http.post('http://ec2-3-109-55-221.ap-south-1.compute.amazonaws.com:443/api/add', oRecord);
  }
}
