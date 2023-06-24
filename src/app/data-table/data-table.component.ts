import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { StudentService } from '../student.service';
import { Record } from '../record';







@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  displayedColumns: string[] = ['studentName', 'english', 'maths', 'science','delete','edit'];
  
  datas:any;
  dataid:any;
 student:Record[]=[];
 record = new Record();

  constructor(private http:HttpClient,private activatedroute:ActivatedRoute,private service:StudentService){}

  studentData(){
    let patchUrl = "http://139.59.87.204/jpencil/student/api/student_list_marks.php"


    this.http.get(patchUrl).subscribe((res) => {
      this.datas=res;

    })
  }

  ngOnInit(): void {
    this.listStudents()
  }

  
  // studentsList(){
  //   let patchUrl = `http://139.59.87.204/jpencil/student/api/student_list_marks.php`
  //    this.activatedroute.paramMap.subscribe((param:Params)=>{
  //      this.dataid=param['get']('english');
  //      console.log('data name is',this.dataid);
  //    })
  // }

  listStudents(){
    this.http.get('http://localhost:3000/marks').subscribe((res) => {
      this.datas=res
      console.log(this.datas);
      
    })
  }
  deleteMarks(sid:any){
    this.service.delete(sid).subscribe();
  }

}
