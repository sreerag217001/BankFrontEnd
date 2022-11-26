import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  //database
userDetails:any={
  1000:{acno:1000,username:'Sreerag',password:1000,balance:1000},
  1001:{acno:1001,username:'Dipin',password:1001,balance:2000},
  1002:{acno:1002,username:'Jerit',password:1002,balance:900},
  1003:{acno:1003,username:'Anand',password:1003,balance:3000},
  1004:{acno:1004,username:'Akash',password:1004,balance:6000},
  1005:{acno:1005,username:'Adwaith',password:1005,balance:4000},
  1006:{acno:1006,username:'Vishnu',password:1006,balance:900},
  
}
register(acno:any,username:any,password:any){
  let userDeatails=this.userDetails
  if(acno in userDeatails){
    return false;
  }
  else{
    userDeatails[acno]={
      acno:acno,
      username:username,
      password:password,
      balance:0,
    }
    console.log(userDeatails);
    return true;
  }
}

login(acno:any,pswd:any){
  let userDeatails=this.userDetails
  if(acno in userDeatails){
    if(pswd==userDeatails[acno]['password']){
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
  let userDeatails=this.userDetails;
  var amount=parseInt(amt)
  if(acno in userDeatails){
    if(pswd==userDeatails[acno]['password']){
      userDeatails[acno]['balance']+=amount;
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
  }
}
}
      