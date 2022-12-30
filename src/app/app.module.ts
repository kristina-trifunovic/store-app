import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './view/header/header.component';
import { StoreProductsComponent } from './view/store-products/store-products.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart-store/cart.reducer';
import { CartComponent } from './view/cart/cart.component';
import { DecimalPipe } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreProductsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot({ cartEntries: cartReducer}) // cartEntries is our state, cartReducer is from cart.reducer.ts
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
