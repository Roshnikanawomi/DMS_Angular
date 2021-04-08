import { Component, OnInit, ViewChild } from '@angular/core';
import {AuditarchiveService} from '../auditarchive.service'
import{FormBuilder} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-documentarchive',
  templateUrl: './documentarchive.component.html',
  styleUrls: ['./documentarchive.component.css']
})


export class DocumentarchiveComponent implements OnInit {

  constructor(private _auditarchive:AuditarchiveService, private fb:FormBuilder ) { }
  public Darchive :any =[];

  today=new Date();

  currenDoc : string =''
  
  searchForm=this.fb.group({
    docId:['']
  })


  registrationForm=this.fb.group({
    NewExpireDate:[''],
  })

  ngOnInit(): void {
    this._auditarchive.getDarchive(this.searchForm.value.docId)
      .subscribe((data) => {
        this.Darchive = data;
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
    this.searchForm.value.DocId='';
    this.ngOnInit();
  }

  assigndoc(docId: string){
    this.currenDoc=docId
  }

  @ViewChild('modelclose') modalClose: any;

  restore(){

    this.modalClose.nativeElement.click();
    this._auditarchive.changeExDate(this.currenDoc,this.registrationForm.value.NewExpireDate)
      .subscribe(
        response =>{
          console.log('success',response)
          this.ngOnInit();
        },
        error => console.error('Error',error)
      )

      this.ngOnInit();
  }


}
