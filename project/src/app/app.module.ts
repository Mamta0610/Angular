import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProductComponent } from './user-product/user-product.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { Category2Component } from './category2/category2.component';
import { DeliveryAddComponent } from './delivery-add/delivery-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    UserProductComponent,
    AdminProductComponent,
    UserLoginComponent,
    CartComponent,
    OrderSuccessComponent,
    OrderHistoryComponent,
    HomeComponent, 
    CategoryComponent, Category2Component, DeliveryAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'userProducts',component:UserProductComponent},
      {path:'adminProducts',component:AdminProductComponent},
      {path:'login',component:UserLoginComponent},
      {path:'cart',component:CartComponent},
      {path:'orderSuccess',component:OrderSuccessComponent},
      {path:'orderHistory',component:OrderHistoryComponent},
      {path:'home',component:HomeComponent},
      {path:'echofriendly',component:CategoryComponent},
      {path:'pop',component:Category2Component},
      {path:'delivery',component:DeliveryAddComponent},
      {path:'',redirectTo:'/login',pathMatch:'full'}

    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
