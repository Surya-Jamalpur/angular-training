import { Component, Input } from "@angular/core";

@Component({
    selector:'app-student-details',
    templateUrl:'./student-details.component.html'
})
export class StudentDetailsComponent {
@Input() selectedStudent:{ 
        Name?:string,
        Email?:string,
        phone?:number} = {};
}