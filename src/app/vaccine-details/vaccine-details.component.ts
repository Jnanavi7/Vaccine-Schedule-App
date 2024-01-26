import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { childModel } from 'src/Model/ChildModel';
import { ChildDetailsService } from '../service/childservice.service';
import { vaccineModel } from 'src/Model/VaccineModel';
import { VaccineserviceService } from '../service/vaccineservice.service';

@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css'],
})
export class VaccineDetailsComponent implements OnInit {
  childData!: childModel[];
  vaccineData!: vaccineModel[];
  vaccineForm!: FormGroup;
  vaccineModelObj: vaccineModel = new vaccineModel();

  selectedAge!: string;
  selectedVac!: string;
  selectedDose!: string;
  selectedVacStatus!: string;
  selectedChild!: string;

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private childservice: ChildDetailsService,
    private vaccineservice: VaccineserviceService
  ) {}
  ngOnInit(): void {
    this.vaccineForm = this.formbuilder.group({
      selectName: ['', Validators.required],
      age: ['', Validators.required],
      vacName: ['', Validators.required],
      dosage: ['', Validators.required],
      vacStatus: ['', Validators.required],
    });
    this.getVaccineDetails();
    this.getChildDetails();
  }

  getChildDetails() {
    this.childservice.getChildDetails().subscribe((res) => {
      this.childData = res;
    });
  }

  getVaccineDetails() {
    this.vaccineservice.getVaccineDetails().subscribe((res) => {
      this.vaccineData = res;
    });
  }
  onclickAdd() {
    this.showAdd = true;
    this.showUpdate = false;
    this.vaccineForm.reset();
  }
  addVaccineDetails() {
    this.vaccineModelObj.selectName = this.vaccineForm.value.selectName;
    this.vaccineModelObj.age = this.vaccineForm.value.age;
    this.vaccineModelObj.vacName = this.vaccineForm.value.vacName;
    this.vaccineModelObj.dosage = this.vaccineForm.value.dosage;
    this.vaccineModelObj.vacStatus = this.vaccineForm.value.vacStatus;

    this.vaccineservice
      .addVaccineDetails(this.vaccineModelObj)
      .subscribe((res) => {
        alert('Vaccine Details Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.vaccineForm.reset();
        this.getVaccineDetails();
      });
  }

  editVaccineDetails(vaccine: any) {
    this.vaccineModelObj.id = vaccine.id;
    this.vaccineForm.controls['selectName'].setValue(vaccine.selectName);
    this.vaccineForm.controls['age'].setValue(vaccine.age);
    this.vaccineForm.controls['vacName'].setValue(vaccine.vacName);
    this.vaccineForm.controls['dosage'].setValue(vaccine.dosage);
    this.vaccineForm.controls['vacStatus'].setValue(vaccine.vacStatus);

    this.showAdd = false;
    this.showUpdate = true;
  }

  updateVaccineDetails() {
    this.vaccineModelObj.selectName = this.vaccineForm.value.selectName;
    this.vaccineModelObj.age = this.vaccineForm.value.age;
    this.vaccineModelObj.vacName = this.vaccineForm.value.vacName;
    this.vaccineModelObj.dosage = this.vaccineForm.value.dosage;
    this.vaccineModelObj.vacStatus = this.vaccineForm.value.vacStatus;

    this.vaccineservice
      .updateVaccineDetails(this.vaccineModelObj, this.vaccineModelObj.id)
      .subscribe((res) => {
        alert('Vaccine Details Updated Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.vaccineForm.reset();
      });
  }

  deleteVaccineDetails(id: number) {
    this.vaccineservice.deleteVaccineDetails(id).subscribe((res) => {
      alert('Vaccine Details Deleted Successfully');
      this.getVaccineDetails();
    });
  }

  onChangeEvent(event: any) {
    this.selectedAge = event.target.value;
  }

  onVacSelect(event: any) {
    this.selectedVac = event.target.value;
  }

  onDoseSelect(event: any) {
    this.selectedDose = event.target.value;
  }

  onVacStatusCheck(event: any) {
    this.selectedVacStatus = event.target.value;
  }

  onChildSelect(event: any) {
    this.selectedChild = event.target.value;
  }
}
