import { Component, inject } from '@angular/core';
import { PensamentoModel } from '../../models/pensamentoModel';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../../core/services';
import { FormsModule } from '@angular/forms';

@Component( {
    selector: 'app-editar-pensamento',
    imports: [ FormsModule ],
    templateUrl: './editar-pensamento.html',
    styleUrl: './editar-pensamento.css',
} )
export class EditarPensamento {

    private service = inject( Services );
    private router = inject( Router );
    private route = inject( ActivatedRoute );

    pensamento: PensamentoModel = {

        conteudo: '',
        autoria: '',
        modelo: ''
    }

    ngOnInit (): void {

        const id = this.route.snapshot.paramMap.get( 'id' )
        if ( id ) {
            this.service.buscaPorId( id ).subscribe( ( pensamento ) => {
                this.pensamento = pensamento
            } )
        }
    }

    editarPensamento () {
        this.service.editar( this.pensamento ).subscribe( () => {
            this.router.navigate( [ '/listarPensamento' ] )
        } )
    }

    cancelar () {
        this.router.navigate( [ '/listarPensamento' ] )
    }

}
