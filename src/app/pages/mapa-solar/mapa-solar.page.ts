import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalSolarPage } from '../modal-solar/modal-solar.page';
import { ModalLeyendasPage } from '../modal-leyendas/modal-leyendas.page';

//Openlayers
import Map from "ol/Map.js";
import View from "ol/View.js";
import {
  defaults as defaultControls,
  Attribution,
  FullScreen,
  ScaleLine,
  ZoomToExtent
} from "ol/control.js";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction.js";
import { fromLonLat } from "ol/proj.js";
import TileLayer from "ol/layer/Tile.js";
import TileWMS from "ol/source/TileWMS.js";
import XYZ from "ol/source/XYZ.js";
import OSM from "ol/source/OSM.js";
//--

@Component({
  selector: 'app-mapa-solar',
  templateUrl: './mapa-solar.page.html',
  styleUrls: ['./mapa-solar.page.scss'],
})
export class MapaSolarPage implements OnInit, OnDestroy {
  mapSolar: Map;
  constructor(private ModalCtrl: ModalController, private loadingCTRL: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async abrirModalSolar(){

  		const modal = await this.ModalCtrl.create({
  			component: ModalSolarPage,
		    cssClass: 'solar-class-modal',
		    componentProps: {
		      'firstName': 'Douglas',
		      'lastName': 'Adams',
		      'middleInitial': 'N'
		    }
  		});

  		await modal.present();
  }

  async abrirModalLeyendas(){

      const modal = await this.ModalCtrl.create({
        component: ModalLeyendasPage,
        cssClass: 'eolicoLeyendas-class-modal',
        componentProps: {
          'firstName': 'Douglas',
          'lastName': 'Adams',
          'middleInitial': 'N'
        }
      });

      await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingCTRL.create({
      message: 'Espere por favor',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    //this.openlayersMapSolar();
  }
  ionViewDidEnter() {
    this.openlayersMapSolar();
  }
  openlayersMapSolar() {
    
     let attribution = new Attribution({
      collapsible: true
    });
    let wmsSource = new TileWMS({
      url: 'https://cors-anywhere.herokuapp.com/http://sigvmeea.minenergias.gob.bo/geoserver/geonode/wms',
      //url: 'http://sigvmeea.minenergias.gob.bo/geoserver/wms',
      params: { 'LAYERS': 'geonode:Bolivia_GHI_kwhm2yr_annual','TILED': true },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });
    let wmsLayer = new TileLayer({
      source: wmsSource
    });
    this.mapSolar = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),       
        wmsLayer,
      ],
      controls: defaultControls({attribution: false}).extend([
        new FullScreen(),
        new ScaleLine(),
        attribution
      ]),
      //interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      target: 'mapsolar',
      view: new View({
        //center: fromLonLat([-64.720891, -17.279531]),
        //center: [-64.720891, -17.279531],
        center: [-64.02832, -17.07779],
        zoom: 5.3,
        projection: 'EPSG:4326'
      })
    }); 
  }
  ngOnDestroy() {
    //this.mapSolar.remove();
    //this.mapSolar.renderSync();
  }

}
