import { Component, OnInit } from '@angular/core';
import { childModel } from 'src/Model/ChildModel';
import { vaccineModel } from 'src/Model/VaccineModel';
import { ChildDetailsService } from '../service/childservice.service';
import { HttpClient } from '@angular/common/http';
import { VaccineserviceService } from '../service/vaccineservice.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private childservice: ChildDetailsService, private http: HttpClient, private vaccineservice: VaccineserviceService, private activatedRoute: ActivatedRoute, ) { 
  
  }

  childData!: childModel[];
  vaccineData!: vaccineModel[];

  selectedName: string | undefined;
  filteredNames: string[] = [];
  selectedVaccine:string | undefined;
  filteredVacName:string[]=[];

  ngOnInit(): void {
    this.getChildDetails();
    this.getVaccineDetails();
  }


  setFields(name: string) {
    this.childservice.fetchChildDetails(name).subscribe((data) => {
      console.log(name);
      console.log(data);
      this.childData = data;
    });
  }

  getChildDetails() {
    this.childservice.getChildDetails().subscribe(res => {
      this.childData = res;
      this.filteredNames = this.childData.map(child => child.name);
      console.log(this.filteredNames);
    })
  }

  getVaccineDetails() {
    this.vaccineservice.getVaccineDetails().subscribe(res => {
      this.vaccineData = res;
      this.filteredVacName = this.vaccineData.map(vaccine =>vaccine.vacName);
      console.log(this.filteredVacName);
    })
  }

  onNameSelected() {
    if (this.selectedName) {
      this.setFields(this.selectedName);
      this.setVacFields(this.selectedName)
    }
  }

  onVacSelected(){
    if(this.selectedVaccine){
      this.setVacFields(this.selectedVaccine);
    }
  }

  setVacFields(name:string){
    this.vaccineservice.fetchVaccineDetails(name).subscribe((data) => {
      console.log(name);
      console.log(data);
      this.vaccineData = data;
      console.log(this.vaccineData);
    });

  }

}
