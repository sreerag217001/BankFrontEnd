import { Component, OnInit } from '@angular/core';
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


//dependency injection
  constructor(private ds:DataService,private router:Router) {} //(1st execution).
  //It automatically invokes when the object is create.


  ngOnInit(): void {//(2nd execution).
    //For initial process of component
    //lifecycle hook of Angular
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
   var acno=this.acno; //1000
   var pswd=this.pswd; //1000
   var userDetails=this.ds.userDetails;

   const result=this.ds.login(acno,pswd)
   if(result){
    alert('login successfull');
    this.router.navigateByUrl('dashboard');
   }
   else{
    alert('login failed');
    }
   }
  }
  //  if(acno in userDetails){
  //   if(pswd==userDetails[acno]['password']){
     
  //   }
  //   else{
  //     alert('invalid password');
  //   }
  //  }
  //  else{
  //   alert('invalid userDeatails');
  //  }

