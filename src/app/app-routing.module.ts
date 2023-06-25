import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BookAvailabilityComponent } from './book-availability/book-availability.component';

const routes: Routes = [
  {path:'', redirectTo :'/login', pathMatch: "full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"book-list",component:BookListComponent},
  {path:"search",component:SearchComponent},
  {path:"home",component:HomeComponent},
  {path:"book-availability",component:BookAvailabilityComponent},
  {path:"cart",component:CartComponent},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
