import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService}from '../services/services.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  constructor(public miRouter:Router, private HaloService : ServicesService) { }

  ngOnInit() {
  }
  goPrev(){
    this.miRouter.navigate(['/prev']);
  }
  goBack(){
    this.miRouter.navigate(['/loggin'])
  }
}
