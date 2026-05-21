
import { Component, Input,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList  implements OnInit{
  @Input() students: any[] = [];

  ngOnInit(): void {
    console.log(this.students)
  }
  




}
