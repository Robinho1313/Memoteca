import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamento } from './excluir-pensamento';
import { provideRouter } from '@angular/router';

describe( 'ExcluirPensamento', () => {
    let component: ExcluirPensamento;
    let fixture: ComponentFixture<ExcluirPensamento>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ ExcluirPensamento ],
            providers: [
                provideRouter( [] ) // provê roteamento vazio para testes
            ]
        } )
            .compileComponents();

        fixture = TestBed.createComponent( ExcluirPensamento );
        component = fixture.componentInstance;
        await fixture.whenStable();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
