export default {
  state:{
    // = data
      products: [],

  },
  getters:{
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },
    productIsInStock(){
      return (product) =>{
        return product.inventory > 0
      }
    }
  },
  mutations:{
    setProducts (state, products) {
      // update products
      state.products = products
    },
    pushProductToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },

    decrementProductInventory (state, product) {
      product.inventory--
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },
    actions:{
      fetchProducts({commit}) {
        return new Promise((resolve, reject) => {
          // make the call
          // call setProducts mutation
          shop.getProducts(products => {
            commit('setProducts', products)
            resolve()
          })
        })
      },

      addProductToCart({state, getters, commit}, product) {
        if (getters.productIsInStock(product)) {
          const cartItem = state.cart.find(item => item.id === product.id)
          if (!cartItem) {
            commit('pushProductToCart', product.id)
          } else {
            commit('incrementItemQuantity', cartItem)
          }
          commit('decrementProductInventory', product)
        }
      }
    }
  }
}
