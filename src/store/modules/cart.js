
import shop from '../shop.js'
import * as types from '../mutation-types'

const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  checkoutStatus: state => state.checkoutStatus
}

const actions = {
  checkout ({commit, state}, products) {
    
    // 对象扩展，将state.added属性拷贝给savedCartItems
    const savedCartItems = [...state.added]
    
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations负责修改state
const mutations = {
  
  // mutation: 添加到购物车
  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null 
    
    /**
     * 匹配购物车中的该商品id 不存在就添加到购物车 存在的话+1
    */
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  
  // 
  [types.CHECKOUT_REQUEST] (state) {
    
    state.added = []
    state.checkoutStatus = null 
  },
  
  //mutation: 确认成功
  [types.CHECKOUT_SUCCESS] (state) {
    
    state.checkoutStatus = 'successful'
  },
  
  //mutation: 确认失败
  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    
    state.added = savedCartItems 
    state.checkoutStatus = 'failed'
  }
  
}

export default {
  state,
  getters,
  actions,
  mutations
}