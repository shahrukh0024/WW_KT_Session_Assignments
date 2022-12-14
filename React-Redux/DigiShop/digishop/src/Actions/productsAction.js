export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
}
export function setAddToCart(itemID, qty) {
  console.log(qty);
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
      qty
    },
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

export function loadCurrentItem(product) {
  return {
    type: "LOAD_CURRENT_ITEM",
    payload: product,
  };
}

export function saveShippingAddress(data) {
  return {
    type: "CART_SAVE_SHIPPING_ADDRESS",
    payload: data,
  };
}

export function setFilter(category) {
  return {
    type: "APPLY_FILTER",
    payload: {
      category: category,
    },
  };
}

export function setSorting(sortType) {
  return {
    type: "APPLY_SORT",
    payload: {
      sortType: sortType,
    },
  };
}

export function adjustGridViewToListView() {
  return {
    type: "ADJUST_GRID_TO_LIST",
  };
}

export function adjustListViewToGridView() {
  return {
    type: "ADJUST_LIST_TO_GRID",
  };
}

export function setRecentlyViewedProducts(prodId) {
  return {
    type: "SET_RECENTLY_VIEWED_PRODUCTS",
    payload:{
      id:prodId
    },
  };
}

export function setRecommendedProducts(prodId) {
  return {
    type: "SET_RECOMMENDED_PRODUCTS",
    payload:{
      id:prodId
    },
  };
}


