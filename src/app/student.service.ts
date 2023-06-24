import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Record } from './record';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

 
  constructor(private _snackBar: MatSnackBar,private http:HttpClient) { }
  openSnackBar(message: string, action: 'Ok') {
    this._snackBar.open(message, action ,{
      verticalPosition:'bottom',
      horizontalPosition:'right'
    });
   }

   delete(id:any){
    return this.http.delete("http://localhost:3000/marks/"+id);
   }

   editstudentmarks(id:any,value:Record){
    return this.http.put("http://localhost:3000/marks/"+id,value);
   }

   getStudent(id:any){
    return this.http.get("http://localhost:3000/marks/"+id);
   }



}
