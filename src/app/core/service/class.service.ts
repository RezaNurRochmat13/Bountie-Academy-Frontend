import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private GET_CLASS_URL = environment.API_URL + "classes";
  
constructor(private httpClientModule: HttpClient) { }
  
  public getAllClass(): Observable<any> {
    return this.httpClientModule.get(this.GET_CLASS_URL);
  }

}
