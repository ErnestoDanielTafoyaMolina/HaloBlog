import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServicesService} from '../services/services.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public myRouter:Router,private Haloservice:ServicesService) {}

  loggOff(){
   localStorage.removeItem('userRutas');
    this.myRouter.navigate(['/loggin']);
  }

}
