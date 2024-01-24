import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { childModel } from 'src/Model/ChildModel';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChildDetailsService {
  baseUrl = "http://localhost:3000/child-details";

  constructor(private http: HttpClient) { }

  getChildDetails() {
    return this.http.get<childModel[]>(this.baseUrl);
  }

  addChildDetails(data: any) {
    return this.http.post<childModel>(this.baseUrl, data);
  }

  deleteChildDetails(id: number) {
    return this.http.delete<childModel>(this.baseUrl + '/' + id);
  }

  updateChildDetails(data: any,id:number) {
    return this.http.put<childModel>(this.baseUrl + '/' + id, data);
  }

  fetchChildDetails(name: string) {
    return this.http.get<childModel[]>(this.baseUrl + '?name=' + name);
   
  }

  getChildNames() {
    return this.http.get<childModel[]>(this.baseUrl).pipe(
      map((data: any) => data['child-details'].map((child: any) => child.name))
    );
  }

  
}

