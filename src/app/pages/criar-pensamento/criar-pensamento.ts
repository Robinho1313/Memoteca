import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    private formBuilder = inject( FormBuilder );

    pensamento: PensamentoModel = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    formulario = this.formBuilder.group( {
        conteudo: [ '', [ Validators.required, Validators.minLength( 3 ), Validators.pattern( /\S+/ ) ] ],
        autoria: [ '', Validators.required ],
        modelo: [ 'modelo1', [ Validators.required, Validators.pattern( /\S+/ ) ] ]
    } )

    get conteudo () {
        return this.formulario.get( 'conteudo' );
    }

    get autoria () {
        return this.formulario.get( 'autoria' );
    }
    // get modelo () {
    //     return this.formulario.get( 'modelo' );
    // }

    //formulario?: FormGroup;
    //formulario!: FormGroup;
    //  formulario: FormGroup = new FormGroup( {} );

    // criarPensamento () {
    //     this.service.criar( this.pensamento ).subscribe( {
    //         next: () => {
    //             console.log( 'Pensamento criado com sucesso!' );
    //             this.router.navigate( [ '/listarPensamento' ] ); // navega só depois do POST
    //         },
    //         error: ( err ) => console.error( 'Erro ao criar pensamento:', err )
    //     } )
    // }


    criarPensamento () {
        if ( this.formulario.valid ) {

            const novoPensamento: PensamentoModel = {
                conteudo: this.formulario.value.conteudo ?? '',
                autoria: this.formulario.value.autoria ?? '',
                modelo: this.formulario.value.modelo ?? ''
            };

            this.service.criar( novoPensamento ).subscribe( {
                next: () => {
                    console.log( 'Pensamento criado com sucesso!' );
                    this.router.navigate( [ '/listarPensamento' ] );
                },
                error: ( err ) => console.error( 'Erro ao criar pensamento:', err )
            } );

        } else {
            this.formulario.markAllAsTouched();
        }
    }
    enviar () {
        if ( this.formulario.valid ) {
            console.log( this.formulario.value );
        } else {
            this.formulario.markAllAsTouched();
        }
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
