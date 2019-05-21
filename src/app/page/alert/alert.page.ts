import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  message: string;

  constructor(private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertcontroller.create({
      header: 'Avertissement',
      subHeader: 'Attention',
      cssClass: 'alert',
      message: "Ce Message s'affiche",
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'bg-secondary',
        handler: () => {this.message = 'Annulation'}
      },
      {
        text: 'Valider',
        cssClass: 'bg-primary',
        handler: () => {this.message = 'Bonjour'}
      }]
    });
    await alert.present();
  }
}