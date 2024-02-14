import { FormGroup, FormControl } from "@angular/forms";
  
export const formGrp = new FormGroup({
    name: new FormControl<string>(''),
    titel: new FormControl<string>(''),
    bildLink: new FormControl<string>(''),
    beschreibung: new FormControl<string>('')
});

export interface FormDataValues{
    name: string,
    titel: string,
    bildLink: string,
    beschreibung: string
}

export const bilderSammlung = [
    {
        titel: 'Wähle ein Bild aus',
        link: ''
    },
    {
        titel: 'Giraffe',
        link: 'assets/blider/giraffe.jpg'
    },
    {
        titel: 'Eis',
        link: 'assets/blider/eis.jpg'
    },
    {
        titel: 'Fußball',
        link: 'assets/blider/fussball.jpg'
    },
    {
        titel: 'Hund',
        link: 'assets/blider/hund.jpg'
    },
    {
        titel: 'Katze',
        link: 'assets/blider/katze.jpg'
    },
    {
        titel: 'Kochen',
        link: 'assets/blider/kochen.jpg'
    },
    {
        titel: 'Konsolen',
        link: 'assets/blider/konsolen.jpg'
    },
    {
        titel: 'Maus',
        link: 'assets/blider/maus.jpg'
    },
    {
        titel: 'Pferd',
        link: 'assets/blider/pferd.jpg'
    },
    {
        titel: 'Programmieren',
        link: 'assets/blider/programmieren.jpg'
    },
    {
        titel: 'Wald',
        link: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]