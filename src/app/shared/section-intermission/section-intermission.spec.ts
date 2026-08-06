import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntermission } from './section-intermission';

describe('SectionIntermission', () => {
    let component: SectionIntermission;
    let fixture: ComponentFixture<SectionIntermission>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectionIntermission],
        }).compileComponents();

        fixture = TestBed.createComponent(SectionIntermission);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
