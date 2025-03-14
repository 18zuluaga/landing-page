import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductosDetailComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }
];
