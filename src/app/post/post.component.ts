import { Component, Input, OnInit } from '@angular/core';
import { FormDataValues } from '../helpers';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  @Input()
  data!: FormDataValues; 

  name = '';
  titel = '';
  bildLink = '';
  beschreibung = '';

  constructor(){}
  

  /*
  Aufgabe 2
  Glückwunsch, du hast Übung 2 gefunden.
  
  Die Werte scheinen falsch zugeordnet zu sein ...
  Anscheinend nimmt der Titel gerade die Daten von dem Bildlink,
  der Bildlink versucht die Beschreibung anzuzeigen und
  die Beschreibung benutzt die Daten, die eigentlich in den Titel gehören.

  Immerhin wird der Name richtig angezeigt.
  
  Übung: 
  Versuche, die Daten den richtigen Feldern zuzuordnen!
  Du kannst dich an der Schreibweise für den Name orientieren.

  Alles, was zum Lösen der Übung bearbeiten musst, befindet sich in dem durch +----+ eingerahmten Bereich.
  Sobald ihr den Post repariert habt, könnt ihr zu Übung 2 weiter gehen.
  Viel Erfolg!
  */
  
  ngOnInit(): void {
//+--------------------------------------------+

    this.name = this.data.name;

    this.titel = this.data.bildLink;
    this.bildLink = this.data.beschreibung;
    this.beschreibung = this.data.titel;

//+--------------------------------------------+
  }
}
