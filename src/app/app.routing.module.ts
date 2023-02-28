import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { StudentsComponent } from "./components/students/students.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { CollegeListComponent } from "./components/college-list/college-list.component";
import { AddCollegeComponent } from "./components/college-list/add-college/add-college.component";

const routes:Routes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
        
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'students',
        component:StudentsComponent
    },
    {
        path:'collegeList',
        component:CollegeListComponent
    },
    {
        path:'collegeList/add',
        component:AddCollegeComponent
    },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }