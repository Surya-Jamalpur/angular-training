import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app.routing.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/students/student/student.component'
import { NavListComponent } from './components/nav-list/nav-list.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { CollegeListComponent } from './components/college-list/college-list.component';
import { CollegeComponent } from './components/college-list/college/college.component';
import { AddCollegeComponent } from './components/college-list/add-college/add-college.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    StudentsComponent,
    StudentComponent,
    NavListComponent,
    StudentDetailsComponent,
    CollegeListComponent,
    CollegeComponent,
    AddCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

