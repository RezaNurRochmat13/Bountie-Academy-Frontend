import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private GET_ALL_STUDENT = environment.API_URL + 'students';
  private ROOT_STUDENT_URL = environment.API_URL + 'student';

constructor(private httpClient: HttpClient) { }

  public createNewStudent(body: any): Observable<any> {
    return this.httpClient.post(this.ROOT_STUDENT_URL, body);
  }

  public getAllStudents(): Observable<any> {
    return this.httpClient.get(this.GET_ALL_STUDENT);
  }

  public getSingleStudent(studentId: string): Observable<any> {
    return this.httpClient.get(this.ROOT_STUDENT_URL + '/' + studentId);
  }

  public updateStudent(studentId: string, body: any): Observable<any> {
    return this.httpClient.put(this.ROOT_STUDENT_URL + '/' + studentId, body);
  }

  public deleteStudent(studentId: string): Observable<any> {
    return this.httpClient.delete(this.ROOT_STUDENT_URL + '/' + studentId);
  }

}
