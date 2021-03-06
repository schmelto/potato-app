import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  
  potatoes; // get this value from modal props

  salt;
  sugar;
  pepper;
  mustard;
  vinegar;
  onion;
  oil;
  broth;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

    // calculate recipe based on potatoes
    this.salt = this.round_value(this.potatoes * 0.014);
    this.sugar = this.round_value(this.potatoes * 0.007);
    this.pepper = this.round_value(this.potatoes * 0.00025);
    this.mustard = this.round_value(this.potatoes * 0.015);
    this.vinegar = this.round_value(this.potatoes * 0.05);
    this.onion = this.round_value(this.potatoes * 0.1);
    this.oil = this.round_value(this.potatoes * 0.05);
    this.broth = this.round_value(this.potatoes * 0.25);
    
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  round_value(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

}
