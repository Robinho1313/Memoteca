import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensamentoModel } from '../../models/pensamentoModel';
import { Services } from '../../core/services';

@Component( {
    selector: 'app-criar-pensamento',
    standalone: true,
    imports: [ FormsModule, RouterModule, ReactiveFormsModule ],
    templateUrl: './criar-pensamento.html',
    styleUrl: './criar-pensamento.css',
} )
export class CriarPensamento {

    private service = inject( Services );
    private router = inject( Router );
    // private formBuilder = inject( FormBuilder );

    pensamento: PensamentoModel = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    //formulario?: FormGroup;
    //formulario!: FormGroup;
    //  formulario: FormGroup = new FormGroup( {} );

    criarPensamento () {
        this.service.criar( this.pensamento ).subscribe( {
            next: () => {
                console.log( 'Pensamento criado com sucesso!' );
                this.router.navigate( [ '/listarPensamento' ] ); // navega só depois do POST
            },
            error: ( err ) => console.error( 'Erro ao criar pensamento:', err )
        } )
    }

    cancelar () {
        // this.router.navigate( [ '/listarPensamento' ] );
        //ou
        //pode usar o routerLink
    }

    // ngOnInint () {
    //     this.formulario = this.formBuilder.group( {
    //         conteudo: [ 'Formulário reativo' ],
    //         autoria: [ '' ],
    //         modelo: [ 'modelo2' ]
    //     } )
    // }


}
