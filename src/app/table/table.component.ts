import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public profile : any = [];

  constructor(private _tableService: TableService) { }

  ngOnInit(): void {

    this._tableService.getProfile()
      .subscribe((data) => {
        this.profile = data;
      },
        err => {
          console.log(err);
        }
      );
  }

}
