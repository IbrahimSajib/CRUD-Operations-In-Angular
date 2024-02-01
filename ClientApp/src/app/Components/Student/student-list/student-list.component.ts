import { Component } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

students:Student[]=[];
constructor(private service:StudentService){}
ngOnInit(){
  this.service.getAllStudent().subscribe(x=>{
    this.students=x;
  })
}

}