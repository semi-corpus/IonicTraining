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
      header: 'Hey, there',
      subHeader: 'We will need your name',
      cssClass: 'alert',
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'bg-secondary',
        handler: () => {this.message = 'Annulation'}
      },
      {
        text: 'Valider',
        cssClass: 'bg-primary',
        handler: (data) => {this.message = `Bonjour, ${data.nom}`}
      }],
      inputs: [{
        name: 'nom',
        type: 'text',
        placeholder: 'Entrez un nom ...'
      }]
    });
    await alert.present();
  }
}