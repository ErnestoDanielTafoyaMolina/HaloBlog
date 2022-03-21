import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {
  username:string
  password:string
  constructor(private miRouter:Router) { }
  iniciarSesion(){
    if (this.username == 'Ricardo' && this.password == '1234'){
      let inforuser = {
        nombre : 'ricardo',
        rol : 'admin',
        email : '200223@utags.edu.mx'
      }

      localStorage.setItem('userRutas',JSON.stringify(inforuser))
      this.miRouter.navigate(['tabs','tab1'])
      console.log("correcto")
  }else{
    alert('las credenciales son incorrectas')
  }
}

  ngOnInit() {
  }

}
