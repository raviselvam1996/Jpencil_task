import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentMarksComponent,
    DataTableComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatIconModule,MatRadioModule,MatSelectModule,MatButtonModule,
    MatTableModule,MatPaginatorModule,HttpClientModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,
    MatSnackBarModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
