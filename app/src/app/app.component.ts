import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedLanguage: string = 'en';

  languages = [
    { id: 1, value: 'de', name: 'DE' },
    { id: 2, value: 'en', name: 'EN' },
    // here you can enter some more languages. Note that you have to add coresponding i18n files.
  ];

  constructor(private translate: TranslateService) {
      translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(data) {
    this.selectedLanguage = data.detail.value;
    this.translate.use(this.selectedLanguage);
  }

}
