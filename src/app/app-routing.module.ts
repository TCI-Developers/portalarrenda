import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { NotascreditoComponent } from './componentes/notascredito/notascredito.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { SegurosComponent } from './componentes/seguros/seguros.component';
import { EcuentaComponent } from './componentes/ecuenta/ecuenta.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{path: 'ecuenta', component: EcuentaComponent, canActivate: [AuthGuard]},
{path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
{path: 'pagos', component: PagosComponent, canActivate: [AuthGuard]},
{path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard]},
{path: 'seguros', component: SegurosComponent, canActivate: [AuthGuard]},
{path: 'factura', component: FacturaComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent},
{path: 'notas', component: NotascreditoComponent, canActivate: [AuthGuard]},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
