export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
}
export function setProductInCart(product) {
  return {
    type: "SET_PRODUCT_IN_CART",
    payload: product
  };
}
