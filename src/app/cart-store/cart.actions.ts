import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Product } from "../model/product.model";

export const addProduct = createAction('Add Product', props<Product>());
export const removeProduct = createAction('Remove Product', props<Product>());
export const clearCart = createAction('Clear Cart');