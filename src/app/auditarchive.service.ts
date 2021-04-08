import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';



@Injectable({

  providedIn: 'root'

})



export class AuditarchiveService {

  constructor(private http : HttpClient) { }

  getAudits(userId:any,docId:any){
    let params = new HttpParams()
      .set('userId',userId)
      .set('docId',docId)
    let url1="http://localhost:3000/getallaudits";
    return this.http.get<any>(url1,{params});
  }

  getDarchive(DocId:any){
    let params = new HttpParams()
    .set('DocId',DocId)

    let url1="http://localhost:3000/getalldarchive";
    return this.http.get<any>(url1,{params});
  }

  changeExDate(docId:string,exipireDate:string){
    let params = new HttpParams()
    .set('docId',docId)
    .set('exipireDate',exipireDate)
   

    let url1="http://localhost:3000/setAchiveDate";
    return this.http.post<any>(url1,exipireDate,{params})
  }

  
}
