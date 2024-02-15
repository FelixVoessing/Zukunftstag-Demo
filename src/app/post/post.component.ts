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
  Ordne die Daten den richtigen Feldern zu!
  Du kannst dich an der Schreibweise für das Name-Feld orientieren.

  !! Alles, was zum Lösen der Übung bearbeiten musst, befindet sich in dem durch +----+ eingerahmten Bereich. !!

  Sobald du den Post repariert hast, kannst du zu Übung 3 weiter gehen.
  Viel Erfolg!
  */
  
  ngOnInit(): void {
//+--------------------------------------------+

    this.name = this.data.name;

    this.titel = this.data.titel;
    this.bildLink = this.data.bildLink;
    this.beschreibung = this.data.beschreibung;

//+--------------------------------------------+
  }
}
