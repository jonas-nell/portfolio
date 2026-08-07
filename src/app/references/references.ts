import { Component } from '@angular/core';

interface Reference {
    name: string;
    role: string;
    quote: string;
}

@Component({
    selector: 'app-references',
    imports: [],
    templateUrl: './references.html',
    styleUrl: './references.scss',
})
export class References {

    references: Reference[] = [
        {
            name: 'Max Mustermann',
            role: 'Noob',
            quote: 'blablablablabla',
        },
        {
            name: 'Erika Musterfrau',
            role: 'Bitch',
            quote: 'blablablabla',
        }
    ]
}
