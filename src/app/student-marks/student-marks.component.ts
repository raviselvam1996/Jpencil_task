import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Params, Router} from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit{
  datas:any;
  dataid:any;
  studentNames:any;


  ngOnInit(): void {
    this.studentNameList()
  }


  constructor(private fb:FormBuilder,private http:HttpClient,private activatedroute:ActivatedRoute,private service:StudentService, private router:Router){}

  studentMarksForm=this.fb.group({
    studentName:["",[Validators.required]],
    
    english:['',[Validators.required]],
    maths:['',[Validators.required]],
    science:['',[Validators.required]]

  })

  // registerStudentMarks(){
  //   let studentMarks = this.studentMarksForm.value;
  //   let english = studentMarks.english;
  //   let maths = studentMarks.maths;
  //   let science = studentMarks.science;
  //   console.log(this.studentMarksForm.value);
    
    
  //  let patchUrl = `http://139.59.87.204/jpencil/student/api/student_marks_create.php?student_id=JS0001&english=${english}&maths=${maths}&science=${science}`

  //  this.http.get(patchUrl).subscribe();
  // }


  // studentsList(){
  //   let patchUrl = `http://139.59.87.204/jpencil/student/api/student_list.php`
  //    this.activatedroute.paramMap.subscribe((param:Params)=>{
  //      this.dataid=param['get']('student_name');
  //      console.log('data name is',this.dataid);
  //    })
  // }

  addMarks(){
    this.http.post('http://localhost:3000/marks',this.studentMarksForm.value).subscribe();
    this.studentMarksForm.reset();
    this.service.openSnackBar("Marks Registered successfully","Ok")
    this.router.navigate(['/data-table'])
  }

  studentNameList(){
    this.http.get("http://localhost:3000/posts").subscribe((res) =>{
      this.studentNames=res;
      console.log(res);
     
        }); 
      

 
    
   
  }

  


}
