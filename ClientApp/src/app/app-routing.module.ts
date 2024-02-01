import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './Components/Student/delete-student/delete-student.component';
import { StudentDetailsComponent } from './Components/Student/student-details/student-details.component';

const routes: Routes = [
  {path:'student-list',component:StudentListComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'edit-student/:id',component:EditStudentComponent},
  {path:'delete-student/:id',component:DeleteStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
