import { Component, EventEmitter, Output } from '@angular/core';
import { college } from 'src/app/models/college.model';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.scss']
})
export class AddCollegeComponent {
  constructor(private clgServive:CollegeService){}
    clgName:any = '';
    clgLocation:any = '';
    clgPhone:any = '';
    clgEmail:any = '';
    clgCources:any = '';

    @Output() onClgAdded = new EventEmitter<{}>();

  addCollege(){
    const reqObj:college ={
      name:this.clgName,
      location:this.clgLocation,
      phone:this.clgPhone,
      email:this.clgEmail,
      courses:this.clgCources
    }
    this.clgServive.collegeList.push(reqObj)
    console.log(this.clgServive.collegeList);
    debugger;
    this.onClgAdded.emit(reqObj);
  }

}
