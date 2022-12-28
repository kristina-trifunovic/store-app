import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/cart-store/cart.actions';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {
  products: Product[] = [
    {id: 0, name: 'Makeup REVOLUTION Crni gel ajlajner 3g sa četkicom', description: 'Gel ajlajner u crnoj boji, kremaste visokopigmentovane formule. Pakovanje sadrži mini četkicu sa kosim vrhom, koja omogućava precizno iscrtavanje. Boja se brzo suši, ne razmazuje, ostavlja mat efekat.', price: 1049.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/5057566176460_6.jpg'},
    {id: 1, name: 'REVOLUTION MAKEUP Reloaded Iconic 1.0', description: 'Iconic 1.0 paleta poseduje 15 nijansi, 3 mat i 12 šimer senki sa metalik finišom, za sve ljubitelje trendy makeup izgleda.', price: 795.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/5057566223324_1_1.jpg'},
    {id: 2, name: 'Paleta senki i pigmenta REVOLUTION MAKEUP Reloaded Iconic 2.0 16.5g', description: 'Iconic 2.0 ReLoaded paleta pigmenata za šminkanje sadrži 15 nijansi svilenkaste teksture. Visokopigmentovana formula omogućava jednostavno blendovanje do ujednačenog završnog izgleda. Bež, zlatni, braon i bronazani i bakarni tonovi mat i metalik finiša čine paletu pogodnom za kreiranje unikatnog makeup-a u intenzivnim nijansama.', price: 795.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/5057566223331_4.jpg'},
    {id: 3, name: 'Revolution Pro 24h ash brown olovka za obrve', description: 'Dvostrana olovka Day&Night Brow Pen namenjena definisanju i nezi obrva. Sa jedne strane nalazi se specijalno oblikovan inovativni aplikator sa mikro zupcima, za popunjavanje obrva i kreiranje prirodnog izgleda.', price: 1149.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/5057566125741_4.jpg'},
    {id: 4, name: 'Revolution Makeup Paleta senki i pigmenata Reloaded Palette Marvellous Mattes 16,5g', description: 'Marvellous Mattes Re-Loaded paleta senki za oči sadrži 15 nijansi mat finiša.', price: 795.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/500820_0_1.jpg'},
    {id: 5, name: 'REVOLUTION PRO Ultimate Eye Look Diamonds and Pearls 3.2g', description: 'Diamonds & Pearls luksuzna mini paleta iz Ultimate Eye Look kolekcije, sadrži 4 senke za oči intenzivne pigmentacije. Predstavlja kombinaciju nude i braon mat nijansi kao i zlatnih i nude šimerastog finiša.', price: 1699.99, image: 'https://shop.lilly.rs/media/catalog/product/cache/e9fe89bb0d3d5e05736d64f06cc6558c/5/0/5057566259606_5.jpg'}
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public addProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
