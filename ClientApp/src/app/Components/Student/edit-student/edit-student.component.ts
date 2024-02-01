import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student = new Student();
  id!: number;
  constructor(
    private service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Get Student Id form Route params
    this.id = this.route.snapshot.params['id'];
    //Get Student Details by id
    this.service.getStudentById(this.id).subscribe(
      (data: Student) => {
        this.student = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  //submit student update form
  onSubmitForm():void{
    //update student by id
    this.service.putStudent(this.id,this.student).subscribe(
      (data:Student)=>{
        this.student=data;
        //redirect to student list
        this.router.navigate(['/student-list'])
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}