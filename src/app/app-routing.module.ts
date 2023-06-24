import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'student-form',component:StudentFormComponent},
  {path:'student-marks',component:StudentMarksComponent},
  {path:'data-table',component:DataTableComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',redirectTo:'data-table',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
