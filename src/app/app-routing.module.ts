import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ValidartokenGuard } from './guards/validartoken.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path:'merca',
    loadChildren:() => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'carrito',
    loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule),
    canActivate:[ValidartokenGuard],
    canLoad:[ValidartokenGuard]
  },

  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[AdminGuard],
    canLoad:[AdminGuard]
  }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
