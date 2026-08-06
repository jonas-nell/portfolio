import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
