import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';



const routes: Routes = [
   { path: '/login', component: LoginComponent,}
];

@NgModule({
  declarations: [
    NgModule,
    LoginComponent,
    FormsModule,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class ProductModule {
}
