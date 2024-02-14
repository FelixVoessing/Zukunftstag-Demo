import { Component } from '@angular/core';
import { bilderSammlung, formGrp } from '../helpers';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-formular',
  templateUrl: './post-formular.component.html',
  styleUrl: './post-formular.component.css'
})

export class PostFormularComponent {
  bilder = bilderSammlung;
  formGruppe = formGrp;
  
  @Output()
  formSubmitEmitter = new EventEmitter<any>();

  onSubmit(){
    this.formSubmitEmitter.emit(this.formGruppe.value);
  }
/*
  Lösungen:
  Übung 1:

    this.name = this.data.name;
    this.titel = this.data.titel;
    this.bildLink = this.data.bildLink;
    this.beschreibung = this.data.beschreibung;
  
  Übung 2:
    
    ,{
      titel: 'Hier steht dein Titel',
      link: 'Hier steht dein Link'
    }
*/
}

