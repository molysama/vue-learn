
import axios from 'axios'

export default {
  getProducts (callback) {
    
    axios.get('/product/all').then(res => {
      callback(res.data)
    })
  },
  
  buyProducts (products, successHandle, errorHandle) {
    
    axios.post('/product/buy', products)
      .then(res => {
        successHandle(res)
      })
      .catch(error => errorHandle(error))
  }
}