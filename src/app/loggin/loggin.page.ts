import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService}from '../services/services.service'

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {
  username:string;
  password:string;
  constructor(private miRouter:Router,private HaloService : ServicesService) { }


  ngOnInit() {
  }
  createAcount(){
    this.miRouter.navigate(['./create-account']);
  }
  pswdBu(){
    this.miRouter.navigate(['./prev']);
  }
}
