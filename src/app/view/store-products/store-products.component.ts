import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  products: Product[] = [];
  pageListProducts?: Product[];
  

  constructor(private store: Store,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.list
      let pageEvent: PageEvent = {pageIndex: 0, pageSize: 5, length: this.products.length};
      this.emitPageEvent(pageEvent);
    });
  }

  public addProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }

  emitPageEvent(event: PageEvent) {
    let start = event.pageIndex === 0 ? 0 : event.pageIndex * 5 + 1;
    let end = event.pageSize + start;
    this.pageListProducts = this.products?.slice(start, end);
  }
}
