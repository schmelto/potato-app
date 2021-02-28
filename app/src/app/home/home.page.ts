import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { RecipePage } from '../modal/recipe.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  potatos: number;

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    console.log(this.potatos);
    const modal = await this.modalController.create({
      component: RecipePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
