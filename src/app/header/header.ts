import { Component, inject, signal } from '@angular/core';
import { Logo } from '../shared/logo/logo';
import { NavMenu } from '../nav-menu/nav-menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [Logo, NavMenu],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    menuOpen = signal(false);

    toggleMenu() {
        this.menuOpen.update((open) => !open);
        this.syncBodyScroll();
    }

    closeMenu() {
        this.menuOpen.set(false);
        this.syncBodyScroll();
    }

    private syncBodyScroll() {
        document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    }

    private translate = inject(TranslateService);

    changeLanguage(language: string) {
        this.translate.use(language);
    }

    isActiveLanguage(language: string): boolean {
        return this.translate.currentLang() === language;
    }
}
