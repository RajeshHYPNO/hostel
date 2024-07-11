import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  studentsList:any=[
    {
      sno:1,
      studentId:234567,
      firstName:'Rajesh',
      lastName:'Vangapuri',
      contactNumber:'+91 9876543210',
      hostelId:'7856',
      joinedDate:'12-12-2021',
    },
    {
      sno:2,
      studentId:234563,
      firstName:'Rakesh',
      lastName:'Vangapuri',
      contactNumber:'+91 9876543260',
      hostelId:'1234',
      joinedDate:'12-12-2024',
    }
  ]

}
