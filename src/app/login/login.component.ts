import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  userData:any=[
    {
      name:'rajesh',
      password:'1234',
      role:'student'
    },
    {
      name:'avinash',
      password:'1234',
      role:'admin'
    }
  ]

  constructor(
    private formbuilder:FormBuilder,
    private router:Router
  )
  {
    this.loginForm = this.formbuilder.group({
      userName:[''],
      password:['']
    })
  }

  submitForm(){
    console.log(this.loginForm.value);
    let user = this.userData.find((user:any)=>user.name==this.loginForm.value.userName && user.password==this.loginForm.value.password);
    console.log(user,'selected user')
    if(user){
      if(user.role=='admin'){
        this.router.navigate(['/admin'])
      }
      else if(user.role=='student'){
        this.router.navigate(['/student'])
      }
    }
    else{
      alert('Invalid user detalis')
    }
  }

  ngOnInit(): void {
    
  }
}
