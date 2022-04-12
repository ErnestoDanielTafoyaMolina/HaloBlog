import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServicesService} from './services/services.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged: boolean
  constructor(private miRouter: Router, public usuarioService : ServicesService) {
    const userInfo =JSON.parse(localStorage.getItem('user'))
    this.usuarioService.usuariologgeado = userInfo


    if(userInfo != null){
      this.miRouter.navigate(['tabs','tab1'])
    }else{
      this.miRouter.navigate(['loggin'])
    }
  }
}
