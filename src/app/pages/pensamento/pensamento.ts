import { Component, Input } from '@angular/core';
import { PensamentoModel } from '../../models/pensamentoModel';
import { RouterLink } from '@angular/router';

@Component( {
    selector: 'app-pensamento',
    standalone: true,
    imports: [ RouterLink ],
    templateUrl: './pensamento.html',
    styleUrl: './pensamento.css',
} )
export class PensamentoComponent {

    @Input() pensamento: PensamentoModel = {

        conteudo: 'I love Angular',
        autoria: 'Nay',
        modelo: 'modelo3'
    }

    larguraPensamento (): string {
        if ( this.pensamento.conteudo.length >= 256 ) {
            return `pensamento ${ this.pensamento.modelo } ff-roboto-mono pensamento-g`
        }
        return `pensamento ${ this.pensamento.modelo } ff-roboto-mono pensamento-p`
    }

    img (): string {
        return `/imagens/${ this.pensamento.modelo }.png`
    }
}
