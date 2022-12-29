import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/cart-store/cart.actions';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {
  products?: Product[];

  constructor(private store: Store,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => this.products = data.list);
  }

  public addProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
