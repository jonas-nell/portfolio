import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    imports: [],
    templateUrl: './nav-menu.html',
    styleUrl: './nav-menu.scss',
})
export class NavMenu {
    @Output() close = new EventEmitter<void>();

    onLinkClick(){
        this.close.emit();
    }
}
