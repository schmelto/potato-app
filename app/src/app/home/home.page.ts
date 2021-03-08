import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { RecipePage } from '../modal/recipe.page';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  potatoes;

  constructor(public modalController: ModalController, private router: Router, private app: AppComponent) {
   }

  async presentModal() {
    if (this.potatoes > 0 && this.potatoes != null) {
      const modal = await this.modalController.create({
        component: RecipePage,
        componentProps: { 
          potatoes: this.potatoes, // pass this value to modal
        }
      });
      return await modal.present();
    }
  }

  useLanguage(language: string): void {
    this.app.useLanguage(language);
  }

}
