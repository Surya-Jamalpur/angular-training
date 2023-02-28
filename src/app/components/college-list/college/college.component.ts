import { Component, Input } from "@angular/core";

@Component({
    selector:'app-college',
    templateUrl:'./college.component.html',
    styles:[`
    .college {
            background: #eaeaea;
    padding: 10px 15px;
    border-radius: 8px;
    border: solid 1px #9d9d9d;
    margin: 10px 0 0px 0

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
    constructor(){}
    showDetails(){

}
editCollege(){

}
deleteCollege(){

}
}