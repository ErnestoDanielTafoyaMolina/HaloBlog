import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prev',
  templateUrl: './prev.page.html',
  styleUrls: ['./prev.page.scss'],
})
export class PrevPage implements OnInit {

  constructor(public miRouter:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.miRouter.navigate(['/create-account'])
  }
  goPrev(){
    this.miRouter.navigate(['/loggin'])
  }

}
