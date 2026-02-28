import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PensamentoModel } from '../models/pensamentoModel';
import { Observable } from 'rxjs';
//import { Pensamento } from '../pages/pensamento/pensamento';

@Injectable( {
    providedIn: 'root',
} )
export class Services {

    private readonly API = "http://localhost:3000/pensamentos"

    // constructor ( private http: HttpClient ) { }
    private http = inject( HttpClient );

    listar (): Observable<PensamentoModel[]> {
        return this.http.get<PensamentoModel[]>( this.API )
    }

    criar ( pensamento: PensamentoModel ): Observable<void> {
        return this.http.post<void>( this.API, pensamento );
    }

    excluir ( id: string ): Observable<PensamentoModel> {
        return this.http.delete<PensamentoModel>( `${ this.API }/${ id }` );
    }

    buscaPorId ( id: string ): Observable<PensamentoModel> {
        return this.http.get<PensamentoModel>( `${ this.API }/${ id }` )
    }

    editar ( pensamento: PensamentoModel ): Observable<PensamentoModel> {
        const url = `${ this.API }/${ pensamento.id }`
        return this.http.put<PensamentoModel>( url, pensamento )
    }


}
