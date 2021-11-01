import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public http:HttpClient,public platform:Platform, private route: Router) { }

  private usuario: string = "";
  private senha: string = "";

  Login() {
    console.log(this.usuario);
    console.log(this.senha);
    //var dadosParaEnviar = {usuario: "thiago", senha:"123"}
    //var url = "http://localhost:3000/login?usuario=thiago&senha=123";
    //this.http.get(url)


    this.http.get(`http://localhost:3000/login?usuario=${this.usuario}&senha=${this.senha}`).subscribe((response) => {
      if(!response[0]) {
        alert("Senha Incorreta!");
      }else {
        this.route.navigate(['/tabs']);
      };
    });

  }

}
