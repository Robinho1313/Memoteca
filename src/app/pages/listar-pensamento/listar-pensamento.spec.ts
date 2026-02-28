import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamento } from './listar-pensamento';
import { provideRouter } from '@angular/router';

describe( 'ListarPensamento', () => {
    let component: ListarPensamento;
    let fixture: ComponentFixture<ListarPensamento>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ ListarPensamento ],
            providers: [
                provideRouter( [] ) // provê roteamento vazio para testes
            ]
        } )
            .compileComponents();

        fixture = TestBed.createComponent( ListarPensamento );
        component = fixture.componentInstance;
        await fixture.whenStable();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
