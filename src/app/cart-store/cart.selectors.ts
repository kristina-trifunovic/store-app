import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductCount } from "../model/product-count.model";
import { Product } from "../model/product.model";

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'), // this means that selector is applied to our cartEntries state from app.module file
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let totalPrice = 0;
    state.forEach(product => totalPrice += product.price)
    return totalPrice;
  }
);

export const selectAllProductsCount = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let countMap: Map<number, ProductCount> = new Map;
    state.forEach(p => {
      if (countMap.get(p.id)) {
        (countMap.get(p.id) as ProductCount).count++;
      } else {
        countMap.set(p.id, { product: p, count: 1 });
      }
    })
    return Array.from(countMap.values());
  }
)