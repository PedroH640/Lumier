import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio-component/inicio-component';
import { CadastroComponent } from './paginas/cadastro-component/cadastro-component';
import { LoginComponent } from './paginas/login-component/login-component';
import { CategoriasComponent } from './paginas/categorias-component/categorias-component';
import { PaginaprodutoComponent } from './paginas/paginaproduto-component/paginaproduto-component';
import { CarrinhoComponent } from './paginas/carrinho-component/carrinho-component';


export const routes: Routes = [

    {path: "inicio", component: InicioComponent},
    {path: "", pathMatch: 'full', redirectTo: 'inicio'},

    {path: "cadastro", component: CadastroComponent},
    
    {path: "login", component: LoginComponent},

    {path: 'categorias', component: CategoriasComponent},

    {path: 'produto', component: PaginaprodutoComponent},

    {path: 'carrinho', component: CarrinhoComponent},

];





