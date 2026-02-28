import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComponent } from './pensamento';
import { provideRouter } from '@angular/router';

describe( 'Pensamento', () => {
    let component: PensamentoComponent;
    let fixture: ComponentFixture<PensamentoComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ PensamentoComponent ],
            providers: [
                provideRouter( [] ) // provê roteamento vazio para testes
            ]
        } )
            .compileComponents();

        fixture = TestBed.createComponent( PensamentoComponent );
        component = fixture.componentInstance;
        await fixture.whenStable();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
