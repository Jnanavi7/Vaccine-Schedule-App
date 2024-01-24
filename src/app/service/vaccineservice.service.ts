import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vaccineModel } from 'src/Model/VaccineModel';
@Injectable({
  providedIn: 'root'
})
export class VaccineserviceService {
  baseUrl="http://localhost:3000/vaccine-details";

  constructor(private http:HttpClient) { }

  getVaccineDetails() {
    return this.http.get<vaccineModel[]>(this.baseUrl);
  }

  addVaccineDetails(data: any) {
    return this.http.post<vaccineModel>(this.baseUrl, data);
  }

  deleteVaccineDetails(id: number) {
    return this.http.delete<vaccineModel>(this.baseUrl + '/' + id);
  }

  updateVaccineDetails(data: any,id:number) {
    return this.http.put<vaccineModel>(this.baseUrl + '/' + id, data);
  }

  fetchVaccineDetails(name: string) {
    return this.http.get<vaccineModel[]>(this.baseUrl + '?vacName=' + name);
   
  }
}
