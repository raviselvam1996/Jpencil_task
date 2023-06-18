import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: 'Ok') {
    this._snackBar.open(message, action ,{
      verticalPosition:'bottom',
      horizontalPosition:'right'
    });
   }



}
