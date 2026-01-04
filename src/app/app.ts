import { Component } from '@angular/core';
import { Navigation } from './shared/components/navigation/navigation';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [Navigation, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {}
