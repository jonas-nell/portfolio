import { Component } from '@angular/core';

interface Skill {
    name: string;
    icon: string;
}

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    skills: Skill[] = [
        {
            name: 'Angular',
            icon: '/assets/icons/angular-icon.svg',
        },
        {
            name: 'TypeScript',
            icon: '/assets/icons/typescript-icon.svg',
        },
        {
            name: 'JavaScript',
            icon: '/assets/icons/js-icon.svg',
        },
        {
            name: 'HTML',
            icon: '/assets/icons/html-icon.svg',
        },
        {
            name: 'CSS',
            icon: '/assets/icons/css-icon.svg',
        },
        {
            name: 'Supabase',
            icon: '/assets/icons/supabase-icon.svg',
        },
        {
            name: 'Git',
            icon: '/assets/icons/git-icon.svg',
        },
        {
            name: 'REST-API',
            icon: '/assets/icons/api-icon.svg',
        },
    ];
}
