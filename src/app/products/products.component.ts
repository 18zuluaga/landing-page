import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from './products.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = products
}
