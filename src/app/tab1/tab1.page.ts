import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ViacepProvider } from './viacep';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private cep;
	private endereco = {};
  constructor(public navCtrl: NavController, private viacep: ViacepProvider ) {}
	getEndereco(){
		this.viacep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}

}
