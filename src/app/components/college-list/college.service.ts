import { Injectable } from '@angular/core';
import { college } from 'src/app/models/college.model';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
     collegeList:college[]= [
   {
      "id":0,
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
      "id":1,
      "name":"Some Name College of Science",
      "location":"Hyderabad, India",
      "phone":5544112233,
      "email":"jsurya352@gmail.com",
      "courses":[
         "Biolozy",
         "Physics",
         "computers"
      ]
   }
]
  constructor() { }
}

