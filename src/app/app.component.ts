import { Component } from '@angular/core';
import { FormDataValues } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  zeigeNeuesPostFormular = false;
  allePosts: FormDataValues[] = [
    {
      name: 'Ausildung bei Mettenemeier',
      titel: 'Ausbildung zum Anwendungsentwickler',
      bildLink: 'https://app.connectoor.de/Jobdetailsite/loadVacimage?i=535f3cb8b4aee58deab815f4e63f8f93.jpg&v=64cb6290ddb2333b638b4595',
      beschreibung: 'Du beendest demnächst die Schule oder hast festgestellt, \ndass ein Studium doch nichts für dich ist und du lieber aktiv in ein Unternehmen einsteigen willst? \nDann informiere dich gerne über unsere technischen und kaufmännischen Ausbildungsberufe. \nhttps://www.mettenmeier.de/karriere/ausbildung_stellenangebote/'
    },
    {
      name: 'Felix',
      titel: 'Videospielkonsolen',
      bildLink: 'assets/blider/konsolen.jpg',
      beschreibung: 'Hallo, ich bin Felix. \nSeit August 2023 bin ich in der Ausbildung zum Fachinformatiker für Anwendungsentwicklung. \nHier lerne ich das Programmieren mit Kotlin und Angular. Kotlin ist eine Sprache in der man Apps für das Handy entwickeln kann und Angular für Webseiten. \nIn meiner Freizeit unternehme ich gerne etwas mit meinen Freunden oder spiele Videospiele.'
    }
  ]

  loeschePost(index: number){
    this.allePosts.splice(index, 1);
  }

  neuerPost(){
    this.zeigeNeuesPostFormular = true;
  }
  
  formularAbgeschickt(formularDaten: FormDataValues){
    this.allePosts.push(formularDaten);
    this.closeForm();
  }

  closeForm(){
    this.zeigeNeuesPostFormular = false;
  }

}
