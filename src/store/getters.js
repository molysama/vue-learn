
export const cartProducts = state => {
  return state.cart.added.map(({id, quantity}) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.titleA,
      price: product.price,
      quantity
    }
  })
}