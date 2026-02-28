import { Routes } from '@angular/router';
import { CriarPensamento } from './pages/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './pages/listar-pensamento/listar-pensamento';
import { ExcluirPensamento } from './pages/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './pages/editar-pensamento/editar-pensamento';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criarPensamento',
        component: CriarPensamento
    },
    {
        path: 'listarPensamento',
        component: ListarPensamento
    },
    {
        path: 'excluirPensamento/:id',
        component: ExcluirPensamento
    },
    {
        path: 'editarPensamento/:id',
        component: EditarPensamento
    }
];