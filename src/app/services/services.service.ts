import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  tName:string;
  tLastName:string;
  nAge:number;
  tNickName:string;
  tEmail:string;
  tPassword:string;
  tImage:string;
  public usuariologgeado: any[]
  constructor(private http:HttpClient, private miRouter:Router) {

   }

   createUser(){
    let newUser={
      tName: this.tName,
      tLastName: this.tLastName,
      nAge: this.nAge,
      tNickName: this.tNickName,
      tEmail: this.tEmail,
      tPassword: this.tPassword,
      tImage: this.tImage
    }
    this.http.post('http://localhost:3000/api/users/createUser',newUser).subscribe(
      (rest:any)=>{
        alert("user created")
        this.miRouter.navigate(['./loggin']);
      },
      err=>{
        alert("no se pudo agregar al usuario")
      }
    )
  }

  loggin(){
    let credentials={
      tEmail:this.tEmail,
      tPassword:this.tPassword
    }

    this.http.post('http://localhost:3000/api/users/logginUser',credentials).subscribe
    (res=>{
      localStorage.setItem('user',JSON.stringify(res))
      alert("correct loggin")
      this.miRouter.navigate(['tabs','tab1']);
    },error=>{
      console.log("error");
      alert("incorret user or password")
    })

  }

}
