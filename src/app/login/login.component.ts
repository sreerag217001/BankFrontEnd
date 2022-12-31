import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //string interpolation- {{aim}} in html file
  aim="your perfect banking partner";
  //property binding- [placeholder]="account" in html file.
  account="Enter your account here";
acno='';
pswd='';
  //(3rd execution).
  
  //class- Collection of properties and methods
//properties/variable
//userdefined methods- (4th execution).
loginForm=this.fb.group({//group
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
})

//dependency injection
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {} //(1st execution).
  //It automatically invokes when the object is create.


  ngOnInit(): void {//(2nd execution).
    //lifecycle hook of Angular
    //used For initial process of component
  }
  
acnoChange(event:any){
  console.log(event);
      this.acno=event.target.value;//1000
      console.log(this.acno);//1000
}
pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(this.pswd);
}
// login(a:any,p:any){
//   // alert('login clicked');
//    var acno=a.value; //1000
//    var pswd=p.value; //1000
//    var userDetails=this.userDetails;
//    if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('login successfull');
//     }
//     else{
//       alert('invalid password');
//     }
//    }
//    else{
//     alert('invalid userDeatils');
//    }
// }
login(){
  // alert('login clicked');
   var acno=this.loginForm.value.acno; //1000
   var pswd=this.loginForm.value.pswd; //1000
   var userDetails=this.ds.userDetails;
   if(this.loginForm.valid){

  this.ds.login(acno,pswd)
  .subscribe((result:any)=>{
    localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
    localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
    localStorage.setItem('token',JSON.stringify(result.token));
   alert(result.message);
   this.router.navigateByUrl('dashboard')
  },
  result=>{
    alert(result.error.message)
  }
  )
}
}}
  
