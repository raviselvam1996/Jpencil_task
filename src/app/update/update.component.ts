import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:any;
  datas:any
person:Record[]=[];
record = new Record();
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute , private service:StudentService){}
  ngOnInit(): void {

    
   this.id= this.activatedRoute.snapshot.paramMap.get('id');
   this.service.getStudent(this.id).subscribe((res:any) => {
    this.datas = res;
    console.log(this.datas.studentName);
    this.record.studentName=this.datas.studentName;
    this.record.english=this.datas.english;
    this.record.maths = this.datas.maths;
    this.record.science = this.datas.science;

    

   })
  }


  updateStudent(){
    this.service.editstudentmarks(this.id,this.record).subscribe();
   }

}
