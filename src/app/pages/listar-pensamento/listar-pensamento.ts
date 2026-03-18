import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento";
import { PensamentoModel } from '../../models/pensamentoModel';
import { Services } from '../../core/services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component( {
    selector: 'app-listar-pensamento',
    standalone: true,
    imports: [ RouterModule, PensamentoComponent, CommonModule ],
    templateUrl: './listar-pensamento.html',
    styleUrls: [ './listar-pensamento.css' ]
} )

/**
 * Tem-se três formas de consumir um service:
 * 
 * Opçao 1: Usar subscribe com o Service instanciado no construtor;
 * Opçao 2: Usar um service no construtor e uma variável tipo Observable;
 * Opçao 3: Usar uma variável Observable para receber o retorno do
 * método do tipo Observable que vem do Service. No caso não usa construtor 
 * porque o Service é injetado pelo método inject();
 * 
*/

//Opçao 3 (Recomendada)
export class ListarPensamento {

    private service = inject( Services );

    listaPensamentos$: Observable<PensamentoModel[]> = this.service.listar();

    ngOnInit () {

        this.listaPensamentos$.subscribe( lista => {
            console.log( "Valores do observable de pensamento:::::::: ", lista );
        } )
    }
}

//Opçao 1:
// export class ListarPensamento implements OnInit {

//     listaPensamentos: PensamentoModel[] = [];

//     constructor ( private service: Services ) { }

//     ngOnInit (): void {
//         this.service.listar().subscribe( ( listaPensamentos ) => {
//             this.listaPensamentos = listaPensamentos
//         } );
//     }
// }

//Opçao 2
// export class ListarPensamento {

//     listaPensamentos$: Observable<PensamentoModel[]>

//     constructor ( private service: Services ) {
//         this.listaPensamentos$ = this.service.listar();
//     }
// }


