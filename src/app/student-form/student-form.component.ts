import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  

  constructor(private fb:FormBuilder,private http:HttpClient,private service:StudentService, private router:Router){}
  datas:any

  studentForm=this.fb.group({
    studentName:["",[Validators.required,, Validators.pattern('[a-zA-Z@$,#?""]+')]],
    dob:['',[Validators.required]],
    gender:[''],
    course:['']

  })

  // registerStudent(){
  //      let studentData = this.studentForm.value;
  //      let studentName = studentData.studentName;
  //      let dob = studentData.dob;
  //      let gender = studentData.gender;
  //      let course = studentData.course;
  //      console.log(this.studentForm.value);
       

      
  //      let patchUrl = `http://139.59.87.204/jpencil/student/api/student_create.php?student_name=${studentName}&dob=${dob}&gender=${gender}&course=${course}`
   
  //      console.log(patchUrl);
       
  //      this.http.get(patchUrl).subscribe();
  //      this.service.openSnackBar("Registred successfully","Ok")

  // }

 studentRegister(){
  console.log(this.studentForm.value.studentName);
  
  this.http.post('http://localhost:3000/posts',this.studentForm.value).subscribe();
  this.studentForm.reset();
  this.service.openSnackBar("Registered successfully","Ok")
  this.router.navigate(['/student-marks'])
  

 }

  

}
