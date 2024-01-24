import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChildDetailsService } from '../service/childservice.service';
import { childModel } from 'src/Model/ChildModel';


@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
  childForm!: FormGroup;
  childModelObj: childModel = new childModel();

  childData!: childModel[];

  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private childservice:ChildDetailsService) { }

  ngOnInit(): void {
    this.childForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      tob: ['', Validators.required],
      sex: ['', Validators.required],
      motherName: ['', Validators.required],
      contactNo1: ['', Validators.required],
      fatherName: ['', Validators.required],
      contactNo2: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.getChildDetails();
  }

  getChildDetails() {
    this.childservice.getChildDetails().subscribe(res => {
      this.childData = res;
    });
  }

  onClickAdd() {
    this.showAdd = true;
    this.showUpdate = false;
    this.childForm.reset();
  }

  addChildDetails() {
    console.log(this.childForm.value);
   
    this.childModelObj.name = this.childForm.value.name;
    this.childModelObj.dob = this.childForm.value.dob;
    this.childModelObj.tob = this.childForm.value.tob;
    this.childModelObj.sex = this.childForm.value.sex;
    this.childModelObj.motherName = this.childForm.value.motherName;
    this.childModelObj.contactNo1 = this.childForm.value.contactNo1;
    this.childModelObj.fatherName = this.childForm.value.fatherName;
    this.childModelObj.contactNo2 = this.childForm.value.contactNo2;
    this.childModelObj.address = this.childForm.value.address;

    this.childservice.addChildDetails(this.childModelObj).subscribe(res => {
      console.log(res);
      alert("Child Details Added Successfully");
      let ref =document.getElementById('cancel')
      ref?.click();
      this.childForm.reset();
      this.getChildDetails();
    });
  }

  deleteChildDetails(id: number) {
    this.childservice.deleteChildDetails(id).subscribe(res => {
      console.log(res);
      alert("Child Details Deleted Successfully");
      this.getChildDetails();
    });
  }

  editChildDetails(child:any) {
    this.childModelObj.id = child.id;
    this.childForm.controls['name'].setValue(child.name);
    this.childForm.controls['dob'].setValue(child.dob);
    this.childForm.controls['tob'].setValue(child.tob);
    this.childForm.controls['sex'].setValue(child.sex);
    this.childForm.controls['motherName'].setValue(child.motherName);
    this.childForm.controls['contactNo1'].setValue(child.contactNo1);
    this.childForm.controls['fatherName'].setValue(child.fatherName);
    this.childForm.controls['contactNo2'].setValue(child.contactNo2);
    this.childForm.controls['address'].setValue(child.address);

    
    this.showAdd = false;
    this.showUpdate = true;
  }

  updateChildDetails() {
    this.childModelObj.name = this.childForm.value.name;
    this.childModelObj.dob = this.childForm.value.dob;
    this.childModelObj.tob = this.childForm.value.tob;
    this.childModelObj.sex = this.childForm.value.sex;
    this.childModelObj.motherName = this.childForm.value.motherName;
    this.childModelObj.contactNo1 = this.childForm.value.contactNo1;
    this.childModelObj.fatherName = this.childForm.value.fatherName;
    this.childModelObj.contactNo2 = this.childForm.value.contactNo2;
    this.childModelObj.address = this.childForm.value.address;

    this.childservice.updateChildDetails(this.childModelObj,this.childModelObj.id).subscribe(res => {
      console.log(res);
      alert("Child Details Updated Successfully");
      this.childForm.reset();
      this.getChildDetails();
    });
  }
}
