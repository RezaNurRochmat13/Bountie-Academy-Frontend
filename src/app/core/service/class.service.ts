import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private GET_CLASS_URL = environment.API_URL + "classes";
  private GET_SINGLE_CLASS_URL = environment.API_URL + "class/";
  private POST_CLASS_URL = environment.API_URL + "class";
  private PUT_CLASS_URL = environment.API_URL + "class/";
  private DELETE_CLASS_URL = environment.API_URL + "class/";

constructor(private httpClientModule: HttpClient) { }
  
  public getAllClass(): Observable<any> {
    return this.httpClientModule.get(this.GET_CLASS_URL);
  }

  public createNewClass(body: any): Observable<any> {
    return this.httpClientModule.post(this.POST_CLASS_URL, body);
  }

  public getSingleClass(classId: string): Observable<any> {
    return this.httpClientModule.get(this.GET_SINGLE_CLASS_URL + classId);
  }

  public updateClass(classId: string, body: any): Observable<any> {
    return this.httpClientModule.put(this.PUT_CLASS_URL + classId, body);
  }

  public deleteClass(classId: string): Observable<any> {
    return this.httpClientModule.delete(this.DELETE_CLASS_URL + classId);
  }

}
