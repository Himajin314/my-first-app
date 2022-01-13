import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './member/login/login.component';
import { ProductModule } from './product/product.module';



const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
  // { path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
