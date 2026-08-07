import { Component, HostBinding, HostListener, Input, OnDestroy, signal } from '@angular/core';

@Component({
    selector: 'app-section-intermission',
    standalone: true,
    imports: [],
    templateUrl: './section-intermission.html',
    styleUrl: './section-intermission.scss',
})
export class SectionIntermission implements OnDestroy {
    @Input() direction: 'left' | 'right' = 'left';

    @HostBinding('style.display') display = 'block';

    readonly frames = [
        './assets/arrows/arrow-left-1.svg',
        './assets/arrows/arrow-left-2.svg',
        './assets/arrows/arrow-left-3.svg',
    ];

    private frameIndex = signal(0);
    readonly currentFrame = signal(this.frames[0]);

    private timeoutId: ReturnType<typeof setTimeout> | null = null;

    @HostListener('mouseenter')
    onMouseEnter() {
        if (this.frameIndex() !== 0) return;

        this.setFrame(1);

        this.timeoutId = setTimeout(() => {
            this.setFrame(2);
            this.timeoutId = null;
        }, 150);
    }

    ngOnDestroy() {
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }
    }

    private setFrame(index: number) {
        this.frameIndex.set(index);
        this.currentFrame.set(this.frames[index]);
    }
}