export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART = 'INCREMENT_CART';
export const DECREMENT_CART = 'DECREMENT_CART';

export const addProductToCart = item => {
    return {
        type : ADD_PRODUCT,
        payload: item
    }
}
export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQty = productId => {
    return{
        type: INCREMENT_CART,
        payload: productId
    }
};

export const decrementCartQty = productId => {
  return {
      type: DECREMENT_CART,
      payload: productId
  }
};