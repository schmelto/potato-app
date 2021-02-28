import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { RecipePage } from '../modal/recipe.page';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  potatos;

  constructor(public modalController: ModalController, private router: Router) {
  }
  async presentModal() {
    if (this.potatos >= 0) {
    const modal = await this.modalController.create({
      component: RecipePage,
      componentProps: { 
        potatos: this.potatos, // pass this value to modal
      }
    });
    return await modal.present();
  }
  }

}
