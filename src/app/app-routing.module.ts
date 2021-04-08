import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import {AuditpanelComponent} from './auditpanel/auditpanel.component';
import{ DocumentarchiveComponent,} from './documentarchive/documentarchive.component';

const routes: Routes = [
  {path: 'table', component : TableComponent},
  {path: 'Auditpanel', component : AuditpanelComponent},
 { path:'DocumentArchive', component: DocumentarchiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
