import { getProducts, addProduct, deleteProduct } from "../api/productsApi.js";
import { displayProducts } from "./displayProducts.js";

const loadProducts = async () => {
    try {
        const products = await getProducts();
        console.log(products);
        displayProducts(products);
    } catch (error) {
        console.error(error);
    }
}

loadProducts();

const onDeleteProduct = async (id) => {
    try {
        await deleteProduct(id);
    } catch (error) {
        console.error(error);
    }
}

export const onAddProduct = async (product) => {
    try {
        await addProduct(product);
    } catch (error) {
        console.error(error);
    }
    loadProducts();
}
window.onDeleteProduct = onDeleteProduct;
