import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //API URL
  private apiUrl = 'http://localhost:36859/api/Students';
  //private apiUrl = 'http://localhost:5164/api/Students';

  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl)
  }

  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.apiUrl}/${id}`)
  }

  postStudent(data:Student):Observable<Student>{
    return this.http.post<Student>(this.apiUrl,data)
  }


  putStudent(id:number,data:Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiUrl}/${id}`,data)
  }

  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}