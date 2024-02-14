import { Component } from '@angular/core';
import { FormDataValues } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  zeigeNeuesPostFormular = false;
  postsData: FormDataValues[] = [
    {
      name: 'Felix',
      titel: 'Giraffen sind cool',
      bildLink: 'assets/blider/giraffe.jpg',
      beschreibung: 'Heute habe ich, in den Tiefen meiner Bildergalerie, dieses Foto von einer Giraffe gefunden.'
    }
  ]

  loeschePost(index: number){
    this.postsData.splice(index, 1);
  }

  neuerPost(){
    this.zeigeNeuesPostFormular = true;
  }
  
  onFormSubmitted(formularDaten: FormDataValues){
    this.postsData.push(formularDaten);
    this.zeigeNeuesPostFormular = false;
  }

}
