import { LowerCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//current user
currentUser="";

//current acno
currentAcno="";
  constructor() {
  this.getDetails();
  }

  //saveDetails()- To store data into local storage.

  saveDetails(){
    if(this.userDetails){
      localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
  }

  getDetails(){
    if(this.userDetails){
      this.userDetails=JSON.parse(localStorage.getItem('DataBase')||'')
    }
    if(this.currentAcno){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||'')
    }
    if(this.currentUser){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser')||'')
    }
  }
  //database
userDetails:any={
  1000:{acno:1000,username:'Sreerag',password:1000,balance:1000,transaction:[]},
  1001:{acno:1001,username:'Dipin',password:1001,balance:2000,transaction:[]},
  1002:{acno:1002,username:'Jerit',password:1002,balance:900,transaction:[]},
  1003:{acno:1003,username:'Anand',password:1003,balance:3000,transaction:[]},
  1004:{acno:1004,username:'Akash',password:1004,balance:6000,transaction:[]},
  1005:{acno:1005,username:'Adwaith',password:1005,balance:4000,transaction:[]},
  1006:{acno:1006,username:'Vishnu',password:1006,balance:900,transaction:[]},
  
}
register(acno:any,username:any,password:any){
  let userDetails=this.userDetails
  if(acno in userDetails){
    return false;
  }
  else{
    userDetails[acno]={
      acno:acno,
      username:username,
      password:password,
      balance:0,
      transaction:[]
    }
    console.log(userDetails);
    this.saveDetails();
    return true;
  }
}

login(acno:any,pswd:any){
  let userDetails=this.userDetails
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      this.currentUser=this.userDetails[acno]['username']
      this.currentAcno=userDetails[acno]['acno']
      this.saveDetails();
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}
deposit(acno:any,pswd:any,amt:any){
  let userDetails=this.userDetails;
  var amount=parseInt(amt)
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      userDetails[acno]['balance']+=amount;
      this.userDetails[acno]['transaction'].push({
        Type:'Credit',
        Amount:amount
      })
      console.log(userDetails);
      this.saveDetails();
      return this.userDetails[acno]['balance']
    }
    else{
      alert('password incorrect');
      return false;
    }
  }
  else{
    alert('invalid userDetails');
    return false;
  }
}
withdraw(acno:any,pswd:any,amt:any){
  let userDetails=this.userDetails;
  var amount=parseInt(amt)
  if(acno in userDetails){
    if(userDetails[acno]['password']){
      if(userDetails[acno]['balance']>=amount){
        userDetails[acno]['balance']-=amount;
        this.userDetails[acno]['transaction'].push({
          Type:'Debit',
          Amount:amount
        })
        console.log(userDetails);
        this.saveDetails();
        return userDetails[acno]['balance']
      }
      else{
        alert('Insufficient funds')
        return false;
      }
    }
    else{
      alert('password incorrect')
      return false;
    }
  }
  else{
    alert('invalid userDetails')
    return false;
  }
}
getTransaction(acno:any){
return this.userDetails[acno]['transaction']
}
}

      