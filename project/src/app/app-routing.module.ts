import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { UserProductComponent } from './user-product/user-product.component';
import { CategoryComponent } from './category/category.component';
import { Category2Component } from './category2/category2.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: UserProductComponent },
  { path: 'echofriendly', component: CategoryComponent },
  { path: 'pop', component: Category2Component },
  { path: 'orderHistory', component: OrderHistoryComponent },
  {path:'login',component:UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
