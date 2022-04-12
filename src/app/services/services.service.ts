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
  tPost:string;
  userlist:any[]
  postlist:any[]
  public usuariologgeado: any[]
  constructor(private http:HttpClient, private miRouter:Router) {

    this.postlist = []
    this.http.get('http://192.168.100.5:3000/api/post/getPost').subscribe(
      (res:any)=>{
        //Aqui solo se ejecuta si respondió correctamente
        this.postlist = res

      },
      err=>{
        //Aqui solo se ejecuta si no respondió correctamente
        this.postlist = []
      }
    )

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
    this.http.post('http://192.168.100.5:3000/api/users/createUser',newUser).subscribe(
      (rest:any)=>{
        alert("user created")
        this.miRouter.navigate(['./loggin']);
      },
      err=>{
        alert("no se pudo agregar al usuario")
      }
    )
  }

  updateUser(){
    let newUser={
      tImage: this.tImage
    }
    this.http.post('http://192.168.100.5:3000/api/users/updateUser',newUser).subscribe(
      (rest:any)=>{
        alert("user updated")
        this.miRouter.navigate(['tabs','tab1'])
      },err=>{
        alert("user haven't been updated")
      }
    )
  }

  loggin(){
    let credentials={
      tEmail:this.tEmail,
      tPassword:this.tPassword
    }

    this.http.post('http://192.168.100.5:3000/api/users/logginUser',credentials).subscribe
    (res=>{
      localStorage.setItem('user',JSON.stringify(res))
      alert("correct loggin")
      this.miRouter.navigate(['tabs','tab1']);
    },error=>{
      console.log("error");
      alert("incorret user or password")
    })

  }
  getUser(){
    this.userlist=[]
    this.http.get('http://192.168.100.5:3000/api/users/getUser').subscribe(
      (res:any)=>{
        this.userlist=res
        console.log(this.userlist)
      },
      err=>{
        this.userlist=[]
      }
    )
  }
  createPost(){
    let newPost={
      tPost: this.tPost
    }
    this.http.post('http://192.168.100.5:3000/api/post/createPost',newPost).subscribe(
      (rest:any)=>{
        alert("post created")
        this.miRouter.navigate(['tabs','tab1'])
      },
      err=>{
        alert("no se pudo agregar el post")
      }
    )
  }



}
