export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
}
export function setAddToCart(itemID,qty) {
  return {
    type: "ADD_TO_CART",
    payload: {
      id:itemID,
      qty, 
    }
  };
}

export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id: itemID,
      qty,
    },
  };
};

export function loadCurrentItem(product){
  return{
    type:"LOAD_CURRENT_ITEM",
    payload:product
  }
}

export function saveShippingAddress(data){
  return{
      type: "CART_SAVE_SHIPPING_ADDRESS",
      payload: data,
  }
};