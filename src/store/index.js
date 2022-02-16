import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: [
      {id:1, nombre: 'Marte', precio: 19.90, unidad: 1},
      {id:2, nombre: 'Plutón', precio: 9.90, unidad: 1},
    ] 
  },
  mutations: {
    setUnidades (state, id, unidad) {
      //console.log(n)
      state.carrito.forEach(carrito => {
        if (carrito.id === id){
          carrito.unidad = unidad;
        }
      });
      //state.carrito[0].unidad = unidad;
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
