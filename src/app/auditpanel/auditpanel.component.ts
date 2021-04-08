import { Component, OnInit } from '@angular/core';
import {AuditarchiveService} from '../auditarchive.service'
import { FormBuilder } from '@angular/forms'


@Component({

  selector: 'app-auditpanel',
  templateUrl: './auditpanel.component.html',
  styleUrls: ['./auditpanel.component.css']

})


export class AuditpanelComponent implements OnInit 
{

  constructor(private _auditarchive:AuditarchiveService, private fb:FormBuilder ) { }
  public Audits : any = [];
  searchForm=this.fb.group({
    userId:[''],
    docId:['']
  })

  ngOnInit(): void {
    this._auditarchive.getAudits(this.searchForm.value.userId,this.searchForm.value.docId)
      .subscribe((data) => {
        this.Audits = data;
      },
        err => {
          console.log(err);
        }
      );

  }

  searchName(){
    this.ngOnInit();
  }

  clearsearch(){
    this.searchForm.value.userId='';
    this.searchForm.value.docId='';
    this.ngOnInit();
  }

}
