import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AnimalService } from '../../service/animal.service'
import { Animal } from 'src/app/class/animal';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  animal: Animal;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) {
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.animal = this.animalService.getAnimals(params.get('name'))
      }
    )
  }

  ngOnInit() {
  }

}
