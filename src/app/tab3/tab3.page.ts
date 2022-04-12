import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServicesService} from '../services/services.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tName:string;
  tNickName:string;
  nAge:number;
  tEmail:string;

  constructor(public myRouter:Router,private Haloservice:ServicesService) {
    const userInfo =JSON.parse(localStorage.getItem('user'))
    this.tName=userInfo.tName;
    this.tNickName=userInfo.tNickName;
    this.nAge=userInfo.nAge;
    this.tEmail=userInfo.tEmail;
  }

  loggOff(){
   localStorage.removeItem('user');
    this.myRouter.navigate(['/loggin']);
  }

}
