import {Product} from "../models/Product";

export type CartProduct = {
    /**
     * Number of products on cart
     */
    numberOfProducts: number;
    /**
     * Information about the product on cart
     */
    productData: Product;
};
