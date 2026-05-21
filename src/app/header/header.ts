import { Component } from '@angular/core';
import { StudentForm } from '../student-form/student-form';
import { StudentList } from '../student-list/student-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [StudentForm,StudentList,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  studentList: any[] = [];
  createTabActive=true;
  listTabActive=false;

  listTab(){
    this.listTabActive=true;
    this.createTabActive=false;

    
  }
  CreateTab(){
    this.createTabActive=true;
    this.listTabActive=false;


  }

  

}
