import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
student:Student=new Student();
id!:number;
constructor(
private route:ActivatedRoute,
private router:Router,
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

deleteStudent(): void {
  this.service.deleteStudent(this.id).subscribe(
    data => {
      console.log('Deletion successful');
    },
    error => {
      console.log(error);
    }
  ).add(() => {
    this.router.navigate(['/student-list']);
  });
}

}
