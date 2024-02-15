import { Component } from '@angular/core';
import { bilderSammlung, formGrp } from '../helpers';
import { Output, EventEmitter,ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post-formular',
  templateUrl: './post-formular.component.html',
  styleUrl: './post-formular.component.css'
})

export class PostFormularComponent implements OnInit, OnDestroy{
  bilder = bilderSammlung;
  formGruppe = formGrp;
  
  @Output()
  formSubmitEmitter = new EventEmitter<any>();
  @Output()
  onClose = new EventEmitter();

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }
  ngOnDestroy(): void {
  this.elementRef.nativeElement.remove();  
  }

  onSubmit(){
    this.formSubmitEmitter.emit(this.formGruppe.value);
  }

  closeModal(){
    this.onClose.emit();
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

