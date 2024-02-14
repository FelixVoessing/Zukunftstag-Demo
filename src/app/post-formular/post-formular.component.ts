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
}

