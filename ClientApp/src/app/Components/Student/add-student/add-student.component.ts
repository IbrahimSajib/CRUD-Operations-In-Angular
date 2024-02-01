import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
student:Student=new Student();

constructor(private service:StudentService,private router:Router){}

onSubmitForm(){
  console.log(this.student);
  this.service.postStudent(this.student).subscribe(x=>{
    this.router.navigate(['/student-list']);
    console.log("Data Added Successfully")
  })
}

}