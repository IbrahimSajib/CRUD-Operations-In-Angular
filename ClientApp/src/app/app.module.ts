import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './Components/Student/delete-student/delete-student.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { StudentDetailsComponent } from './Components/Student/student-details/student-details.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
