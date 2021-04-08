import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http : HttpClient) { }

  getProfile(){
    let url1="http://localhost:3000/getallprofile";
    return this.http.get<any>(url1);
  }

  getSchools(){
    let url1="http://localhost:3000/getAllSchools";
    return this.http.get<any>(url1);
  }


}
