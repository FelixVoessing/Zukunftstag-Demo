import { FormGroup, FormControl } from "@angular/forms";

export const bilderSammlung = [
    {
        titel: '',
        link: ''
    },
    {
        titel: 'Giraffe',
        link: 'assets/blider/giraffe.jpg'
    },
    {
        titel: 'Eis',
        link: 'assets/blider/eis.jpg'
    }
]
  
export const formGrp = new FormGroup({
    name: new FormControl<string>(''),
    titel: new FormControl<string>(''),
    bildLink: new FormControl<string>(''),
    beschreibung: new FormControl<string>('')
});
