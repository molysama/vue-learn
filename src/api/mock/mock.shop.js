
import * as API from '../urls'

const products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export const shop = [
  {
    path: API.product_all,
    data: products
  },
  {
    path: API.product_buy,
    data: 'success'
  },
  {
    path: API.product_add,
    data: []
  }
]