import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: [
      {nombre: 'Marte', precio: 19.90, unidad: 1},
      {nombre: 'Plutón', precio: 9.90, unidad: 1},
    ] 
  },
  mutations: {
    setUnidades (state, n) {
      console.log(n)
      state.carrito[0].unidad + n;
      console.log(state.carrito[0].unidad);
    }
  },
  getters: {
    getCarrito: state => {
      return state.carrito;
    },
    getTotal: state => {
      let total = 0;
      state.carrito.forEach(item => {
        total += item.precio*item.unidad;
      });
      return total.toFixed(2);
    }
  },
  actions: {
  },
  modules: {
  }
})
