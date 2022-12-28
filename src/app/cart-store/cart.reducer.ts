import { createReducer, on } from "@ngrx/store";
import { Product } from "../model/product.model";
import { addProduct, clearCart, removeProduct } from "./cart.actions";

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  on(clearCart, _ => []),
  on(addProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    // const entriesClone: Product[] = entries;
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Product[] = JSON.parse(JSON.stringify(entries));
    // const entriesClone: Product[] = entries;
    const found = entriesClone.find(e => e.id == product.id);
    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
)