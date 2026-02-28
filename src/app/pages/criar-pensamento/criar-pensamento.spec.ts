import { describe, it, expect, beforeEach } from 'vitest';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamento } from './criar-pensamento';
import { RouterTestingModule } from '@angular/router/testing';

describe( 'CriarPensamento', () => {
    let component: CriarPensamento;
    let fixture: ComponentFixture<CriarPensamento>;

    beforeEach( async () => {
        await TestBed.configureTestingModule( {
            imports: [ CriarPensamento, RouterTestingModule ]
        } )
            .compileComponents();

        fixture = TestBed.createComponent( CriarPensamento );
        component = fixture.componentInstance;
        await fixture.whenStable();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
