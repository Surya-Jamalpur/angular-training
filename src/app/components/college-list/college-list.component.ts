import { Component } from '@angular/core';
import { college } from 'src/app/models/college.model';
import * as collegesData from 'src/app/data/collegeList.json'
import { Router } from '@angular/router';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})

export class CollegeListComponent {
 collegeList:college[] = []
constructor(
   private clgService: CollegeService,
   private router:Router
){
  console.log(this.clgService.collegeList);
  this.collegeList = this.clgService.collegeList;
}
goToAddEditCollege(){
   //to do
this.router.navigate(['/collegeList/add']);
}
showDetails(data:any){
   console.log(data);
}
}
