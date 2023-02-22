import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  constructor(){}
   public selecetdStudent:{ 
        Name?:string,
        Email?:string,
        phone?:number} = {};

listOfStudents:any[]=[
  {
    Name :'Surya',
Email :'jsurya352@gmail.com',
phone :9966527352
  },
  {
    Name :'Mark',
Email :'Mark@gmail.com',
phone :9966527352
  },
  {
    Name :'Jims',
Email :'Jims@gmail.com',
phone :9966527352
  },
  {
    Name :'Surya',
Email :'jsurya352@gmail.com',
phone :9966527352
  }
]
test(studnt:any){
  this.selecetdStudent = studnt;
}
}
