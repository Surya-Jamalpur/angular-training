import { Component } from '@angular/core';
import { college } from 'src/app/models/college.model';
import * as collegesData from 'src/app/data/collegeList.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})

export class CollegeListComponent {
  collegeList:college[]= [
   {
      "id":1,
      "name":"Surya College of Science",
      "location":"Hyderabad, India",
      "phone":5544112233,
      "email":"jsurya352@gmail.com",
      "courses":[
         "Biolozy",
         "Physics",
         "computers"
      ]
   },
   {
      "id":2,
      "name":"Some Name College of Science",
      "location":"Hyderabad, India",
      "phone":5544112233,
      "email":"jsurya352@gmail.com",
      "courses":[
         "Biolozy",
         "Physics",
         "computers"
      ]
   },
   // {
   //    "id":3,
   //    "name":"Indian College",
   //    "location":"Hyderabad, India",
   //    "phone":5544112233,
   //    "email":"jsurya352@gmail.com",
   //    "courses":[
   //       "Biolozy",
   //       "Physics",
   //       "computers"
   //    ]
   // }
]
constructor(
   private router:Router
){
  console.log(this.collegeList);
}
goToAddEditCollege(){
   //to do
this.router.navigate(['/collegeList/add']);
}

}
