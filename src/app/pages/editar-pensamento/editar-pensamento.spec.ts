import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPensamento } from './editar-pensamento';
import { provideRouter } from '@angular/router';

describe( 'EditarPensamento', () => {
    let component: EditarPensamento;
    let fixture: ComponentFixture<EditarPensamento>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ EditarPensamento ],
            providers: [
                provideRouter( [] ) // provê roteamento vazio para testes
            ]
        } )
            .compileComponents();

        fixture = TestBed.createComponent( EditarPensamento );
        component = fixture.componentInstance;
        await fixture.whenStable();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
