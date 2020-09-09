import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-eolica',
  templateUrl: './modal-eolica.page.html',
  styleUrls: ['./modal-eolica.page.scss'],
})
export class ModalEolicaPage implements OnInit {

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  SalirModal(){
  	this.ModalCtrl.dismiss();
  }

}
