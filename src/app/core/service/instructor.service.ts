import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private GET_ALL_INSTRUCTOR_URL = environment.API_URL + 'instructors';
  private POST_INSTRUCTOR_URL = environment.API_URL + 'instructor';
  private DETAIL_INSTRUCTOR_URL = environment.API_URL + 'instructor/';
  private UPDATE_INSTRUCTOR_URL = environment.API_URL + 'instructor/';
  private DELETE_INSTRUCTOR_URL = environment.API_URL + 'instructor/';

constructor(private httpClient: HttpClient) { }

  public createNewInstructor(body: any): Observable<any> {
    return this.httpClient.post(this.POST_INSTRUCTOR_URL, body);
  }

  public getAllInstructors(): Observable<any> {
    return this.httpClient.get(this.GET_ALL_INSTRUCTOR_URL);
  }

  public getSingleInstructor(instructorId: string): Observable<any> {
    return this.httpClient.get(this.DETAIL_INSTRUCTOR_URL + instructorId);
  }

  public updateInstructor(instructorId: string, body: any): Observable<any> {
    return this.httpClient.put(this.UPDATE_INSTRUCTOR_URL + instructorId, body);
  }

  public deleteInstructor(instructorId: string): Observable<any> {
    return this.httpClient.delete(this.DELETE_INSTRUCTOR_URL + instructorId);
  }

}
