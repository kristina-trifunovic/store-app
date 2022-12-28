import { Component, ɵisObservable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from 'src/app/cart-store/cart.actions';
import { selectAllProductsCount } from 'src/app/cart-store/cart.selectors';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartEntries$: Observable<any>;
  cartProducts$: Observable<any>;

  constructor(private store: Store) {
    this.cartEntries$ = new Observable();
    this.cartProducts$ = store.select(selectAllProductsCount);
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }

}
