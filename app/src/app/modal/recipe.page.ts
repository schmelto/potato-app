import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  potatos; // get this value from modal props

  salt;
  suggar;
  pepper;
  mustard;
  vinegar;
  onion;
  oil;
  broth;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

    // calculate recipe based on potatos
    this.salt = this.potatos * 0.014;
    this.suggar = this.potatos * 0.007;
    this.pepper = this.potatos * 0.00025;
    this.mustard = this.potatos * 0.015;
    this.vinegar = this.potatos * 0.05;
    this.onion = this.potatos * 0.1;
    this.oil = this.potatos * 0.05;
    this.broth = this.potatos * 0.25;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
