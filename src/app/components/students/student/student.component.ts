import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'student',
    template:`
    <div class="studentDetails" 
    
    [ngClass]="studentInfo.Name == 'Mark' ? 'highlite' : ''"
    (click)=selectStudent(studentInfo)>
    Name : {{studentInfo.Name}} <br>
    
    </div>
    `,
    styles:[`
    .studentDetails {
        width:200px;
        padding:10px 15px;
        background:#9d9d9d;
        border-radius:5px;
        margin:0 0 5px 0;
        cursor:pointer;
    }
    .highlite {
        background:red;
        color:white;
    }`]
})

export class StudentComponent {
    @Input() studentInfo:{ 
        Name?:string,
        Email?:string,
        phone?:number} = {};
    @Output() selectedStudentInformation = new EventEmitter<String>();


    selectStudent = (student:any)=>{
        console.log(student);
        this.selectedStudentInformation.emit(student);
    }


}
