import { Component, inject, OnInit } from '@angular/core';
import { PensamentoModel } from '../../models/pensamentoModel';
import { Services } from '../../core/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
    selector: 'app-excluir-pensamento',
    imports: [],
    templateUrl: './excluir-pensamento.html',
    styleUrls: [ './excluir-pensamento.css' ],
} )

export class ExcluirPensamento implements OnInit {
    private service = inject( Services );
    private router = inject( Router );
    private route = inject( ActivatedRoute );

    pensamento: PensamentoModel = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    excluirPensamento () {
        const id = this.pensamento.id;
        if ( id ) {
            this.service.excluir( id ).subscribe( {
                next: () => {
                    console.log( 'Pensamento excluído com sucesso!' );
                    this.router.navigate( [ '/listarPensamento' ] );
                },
                error: ( err ) => console.error( 'Erro ao excluir pensamento:', err )
            } );
        } else {
            console.error( 'ID indefinido, não é possível excluir' );
        }
    }

    ngOnInit (): void {
        const id = this.route.snapshot.paramMap.get( 'id' );
        console.log( 'ID recebido pela rota:', id );

        if ( id ) {
            this.service.buscaPorId( id ).subscribe( {
                next: ( pensamento ) => {
                    this.pensamento = pensamento;
                    console.log( 'Pensamento carregado:', pensamento );
                },
                error: ( err ) => console.error( 'Erro ao buscar pensamento:', err )
            } );
        }
    }

    cancelar () {
        this.router.navigate( [ '/listarPensamento' ] )
    }
}
