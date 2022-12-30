import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from 'src/app/cart-store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private router: Router,
              private store: Store) {
                this.countProducts$ = store.select(selectCountProducts);
                this.totalPrice$ = store.select(selectTotalPrice);
              }

  ngOnInit(): void {
  }

  openProducts() {
    this.router.navigate(['']);
  }

  openCart() {
    this.router.navigate(['cart']);
  }
}
