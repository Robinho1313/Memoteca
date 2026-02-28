import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./shared/cabecalho/cabecalho";
import { Rodape } from "./shared/rodape/rodape";

@Component( {
    selector: 'app-root',
    standalone: true,
    imports: [ Cabecalho, Rodape, RouterOutlet ],
    templateUrl: './app.html',
    styleUrl: './app.css'
} )
export class App {
    protected readonly title = signal( 'memoteca' );
}
