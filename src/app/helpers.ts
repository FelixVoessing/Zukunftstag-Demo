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

/* 
Aufgabe 3

Gute Arbeit!
Die Posts funktionieren jetzt, wie sie sollen!

Erstell doch mal einen Post für dich selbst.
Klicke auf den "Neuer Post" Knopf, schreib was in die Felder, wähle ein Bild aus und schick es ab.

Ich hoffe dir, gefallen die Bilder.
Ich hatte mal eine riesige Sammlung von Bildern, in der jeder ein Bild finden konnte, das ihm gefallen hat.
Leider ist mir die Sammlung verloren gegangen ...

Übung:
Such dir im Internet ein Bild raus, das dir gefällt und füge es ganz unten in der Bildersammlung hinzu.
Um ein Bild hinzuzufügen, hast du 2 Möglichkeiten.

1.  Du kannst den Link, des Bildes im Internet kopieren und, diesen Link dann in der Sammlung eintragen.
    Orientiere dich für diesen Ansatz an dem letzten Bild in der Bildersammlung, "Wald".

2.  Du kannst das Bild herunterladen und unter assets/bilder ablegen. Dies ist etwas schwieriger als 1.
    Orientiere dich für diesen Ansatz an den anderen Bildern in der Bildersammlung, wie "Eis" oder "Katze".

Viel Erfolg!

Wenn du fertig bist und deine Bilder hinzugefügt hast, erstelle einen Post mit deinem Bild.
Funktioniert alles so wie du möchtest? Perfekt!
Nutze jetzt die Suchfunktion der Entwicklungsumgebung um nach "Schlusswort" zu suchen.
*/

export const bilderSammlung = [
    {
        titel: 'Wähle ein Bild aus',
        link: ''
    },
    {
        titel: 'Eis',
        link: 'assets/blider/eis.jpg'
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
        titel: 'Konsolen',
        link: 'assets/blider/konsolen.jpg'
    },
    {
        titel: 'Maus',
        link: 'assets/blider/maus.jpg'
    },
    {
        titel: 'Wald',
        link: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]