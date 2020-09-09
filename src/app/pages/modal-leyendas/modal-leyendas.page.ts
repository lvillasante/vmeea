import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-leyendas',
  templateUrl: './modal-leyendas.page.html',
  styleUrls: ['./modal-leyendas.page.scss'],
})
export class ModalLeyendasPage implements OnInit {

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  SalirModal(){
  	this.ModalCtrl.dismiss();
  }

}
