
import Mock from 'mockjs'

const products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

Mock.setup({
  timeout: 300-500
})

Mock.mock('/product/all', products)
Mock.mock('/product/buy', 'success')
Mock.mock('/product/add', [])

export default Mock