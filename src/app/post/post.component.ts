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
  
  ngOnInit(): void {
    this.name = this.data.name;
    this.titel = this.data.titel;
    this.bildLink = this.data.bildLink;
    this.beschreibung = this.data.beschreibung;
  }
}
