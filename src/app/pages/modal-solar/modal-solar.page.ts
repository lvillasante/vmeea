import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-solar',
  templateUrl: './modal-solar.page.html',
  styleUrls: ['./modal-solar.page.scss'],
})
export class ModalSolarPage implements OnInit {

  constructor(private ModalCtrl: ModalController) { }

  ngOnInit() {
  }

  SalirModal(){
  	this.ModalCtrl.dismiss();
  }

}
