import { Component } from '@angular/core';
import { Logo } from "../shared/logo/logo";

@Component({
    selector: 'app-footer',
    imports: [Logo],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
})
export class Footer {}
