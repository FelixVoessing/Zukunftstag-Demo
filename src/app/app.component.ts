import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  zeigeNeuesPostFormular = true;
  
  onFormSubmitted(formularDaten: string){
    console.log(formularDaten);
    this.zeigeNeuesPostFormular = false;
  }

}
