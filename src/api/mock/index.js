import Mock from 'mockjs'

import { nav } from './mock.nav.js'
import { shop } from './mock.shop.js'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

addToMock(nav)
addToMock(shop)

export default Mock







