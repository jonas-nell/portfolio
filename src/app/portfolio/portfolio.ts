import { Component } from '@angular/core';

interface Project {
    id: number;
    name: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    technologies: string[];
    description: string;
}

@Component({
    selector: 'app-portfolio',
    imports: [],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.scss',
})
export class Portfolio {
    projects: Project[] = [
        {
            id: 1,
            name: 'El Pollo Loco',
            image: '/assets/img/el-pollo-loco.png',
            liveUrl: 'https://jonasnell.developerakademie.net/el_pollo_loco/',
            githubUrl: 'https://github.com/jonas-nell/el-pollo-loco',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            description: 'A 2D jump-and-run browser game featuring object-oriented Javascript, collision detection, animations and sound.'
        },
    ]
}
