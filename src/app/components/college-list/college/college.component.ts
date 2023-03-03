import { Component, EventEmitter, Input, Output } from "@angular/core";
import { college } from "src/app/models/college.model";
import { CollegeService } from "../college.service";

@Component({
    selector:'app-college',
    templateUrl:'./college.component.html',
    styles:[`
    .college {
            background: #eaeaea;
    padding: 10px 15px;
    border-radius: 8px;
    border: solid 1px #9d9d9d;
    margin: 10px 0 0px 20px;
        width: 300px;

    }
    .clgName {
        font-size:20px;
        color:red;
    }
    .clgDetails {
        margin:10px 0px 10px 40px
    }
    .actions {
        display:flex;
        justify-content:space-between;
        list-style:none;
    }
    .actions li {
    }
    .actions li button {
        background:gray;
        color:#fff;
        padding:10px 15px;
        border-radius:8px;
        border:none;
        cursor:pointer
    }
    .actions li button:hover {
        background:green;
    }
    
    `]
})
export class CollegeComponent {
    @Input()College:any;
    @Input()CollegeIndex:any;
    // @Output() selectedStudentInformation = new EventEmitter<String>();
    @Output() onDetails = new EventEmitter<{}>();
    constructor(
        private clgService:CollegeService
    ){}

    showDetails(college:college){
        this.onDetails.emit(college);
    }

editCollege(College:any){

}
deleteCollege(CollegeIndex:any){
    for(let i =0;i<this.clgService.collegeList.length; i++){
        if(CollegeIndex === this.clgService.collegeList[i].id){
            this.clgService.collegeList.splice(CollegeIndex, 1);
        }
    }

}
}