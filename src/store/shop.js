
import axios from 'axios'

export default {
  getProducts (callback) {
    
    axios.get('/product/add').then(res => {
      callback()
    })
  },
  
  buyProducts (products, successHandle, errorHandle) {
    
    axios.post('/product/buy', products)
      .then(res => successHandle(res))
      .catch(error => errorHandle(error))
  }
}