import { Component,OnInit ,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnInit {
  

  studentList: any[] = [];

  ngOnInit(): void {
    // alert("reform component initialized");
    console.log("reform component initialized")
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

      name: [
        '',
        [
          Validators.required, 
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required, 
          Validators.email
        ]
      ],

      course: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      dob: [
        '',
        [
          Validators.required, 
          
        ]
      ],

      fees: [
        '',
        [
          Validators.required, 
          
        ]
      ]

    });

  }

  onSubmit():void {
    if (this.form.valid) {
      console.log("form value:",this.form.value);
      this.studentList.push(this.form.value);

      console.log(this.studentList);
      
      this.form.reset();
    }
  }
}
