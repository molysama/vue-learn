
import Vue from 'vue'
import AOS from 'aos'


let aos = {
  bind(el, binding, vnode) {
    // add listener
    AOS.init({
      duration: 1200
    });
  },

  // // When the bound element is inserted into the DOM...
  // inserted(el, binding) {
  // },

  update(el, binding) {
    AOS.refresh();
  },

  unbind(el, binding) {
    // window.stroll.unbind(el);
  }
}

export default aos