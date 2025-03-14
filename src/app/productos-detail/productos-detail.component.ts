import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts, products } from '../products/products.mock';
import { CurrencyPipe, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-productos-detail',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgStyle],
  templateUrl: './productos-detail.component.html',
  styleUrl: './productos-detail.component.css'
})
export class ProductosDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  loading = true;
  products = products;
  product: IProducts|undefined = undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        (params['id']);
        this.product = this.products.find(product => product.id === +params['id']);
        this.loading = false;
      })
    }, 1500);
  }
}
