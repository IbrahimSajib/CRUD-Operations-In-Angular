import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student:Student=new Student();
  id!:number;
  constructor(
  private route:ActivatedRoute,
  private service:StudentService
  ){}
  
  ngOnInit():void{
    this.id=this.route.snapshot.params['id']
    this.service.getStudentById(this.id).subscribe(
      data=>{
        this.student=data;
      },
      error=>{
        console.log(error)
      }
    )
  }
}
