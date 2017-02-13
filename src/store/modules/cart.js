
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
      () => commit(types.CHECK_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null 
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
  
  [types.CHECKOUT_REQUEST] (state) {
    
    state.added = []
    state.checkoutStatus = null 
  },
  
  [types.CHECKOUT_SUCCESS] (state) {
    
    state.checkoutStatus = 'successful'
  },
  
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