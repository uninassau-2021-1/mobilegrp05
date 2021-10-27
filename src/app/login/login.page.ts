import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public http:HttpClient,public platform:Platform) { }

  private usuario;
  private senha;

  Login() {
    console.log(this.usuario);
    console.log(this.senha);
    //var dadosParaEnviar = {usuario: "thiago", senha:"123"}
    var url = "http://localhost:3000/login?usuario=thiago&senha=123";
    //this.http.get(url)

    this.http.get(url).subscribe(data => {
      console.log(data);
    });
    
  }

}
