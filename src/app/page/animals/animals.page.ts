import { Component, OnInit } from '@angular/core';
import { Animal } from '../../class/animal';
import { AnimalService } from '../../service/animal.service';
import { ModalController } from '@ionic/angular';
import { AnimalFormComponent } from '../../component/animal-form/animal-form.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})

export class AnimalsPage implements OnInit {
  items: any[] = []

  constructor(private animalService: AnimalService, private modal: ModalController) {
    this.loadAnimals();
  }

  ngOnInit() {
  }

  loadAnimals(){
    this.items = this.animalService.readAnimals();
    for (const item of this.items){
      item.icon = '../assets/icon/' + item.name + '.png'
    }
  }

  addAnimal(animal: Animal){
    this.animalService.addOne(animal);
  }

  async openFormModal(){
    const formModal = await this.modal.create({
      component: AnimalFormComponent
    })   
    formModal.onDidDismiss().then(() => {
      this.loadAnimals();
    })
    return await formModal.present();
  }

}