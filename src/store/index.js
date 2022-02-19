import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: [
      {id:1, nombre: 'Marte', precio: 19.90, descripcion: "Viaje encantador",unidad: 1},
      {id:2, nombre: 'Plutón', precio: 9.90, descripcion: "Viaje encantador", unidad: 1},
    ] ,

    items: [
      {id:1, nombre: 'Marte', precio: 19.90, descripcion: "Viaje encantador",unidad: 1},
      {id:2, nombre: 'Plutón', precio: 9.90, descripcion: "Viaje encantador", unidad: 1},
      {id:3, nombre: 'Luna', precio: 5.90, descripcion: "Viaje encantador",unidad: 1},
      {id:4, nombre: 'Mercurio', precio: 19.90, descripcion: "Viaje encantador",unidad: 1},
      {id:5, nombre: 'Venus', precio: 9.90, descripcion: "Viaje encantador", unidad: 1},
      {id:6, nombre: 'Júpiter', precio: 5.90, descripcion: "Viaje encantador",unidad: 1},
      {id:7, nombre: 'Saturno', precio: 19.90, descripcion: "Viaje encantador", unidad: 1},
      {id:8, nombre: 'Urano', precio: 19.90, descripcion: "Viaje encantador",unidad: 1},
      {id:9, nombre: 'Neptuno', precio: 9.90, descripcion: "Viaje encantador", unidad: 1},
    ],
    compra:[{nombre: "Santi", fecha: '3/2/1996', numero: "3123424", cvc: "357", carrito: [
        {id:1, nombre: 'Marte', precio: 19.90, descripcion: "Viaje encantador",unidad: 1},
        {id:2, nombre: 'Plutón', precio: 9.90, descripcion: "Viaje encantador", unidad: 1}
      ]}]
  },
  mutations: {
    setUnidades (state, producto) {
      const encontrado = state.carrito.find(item => item.id === producto.id);

      if(typeof encontrado === "undefined"){
        state.carrito.push(producto);
      } else {
        encontrado.unidad++
      }
      //console.log(state.carrito[1]);
    },
    borrarProducto(state,producto){
      state.carrito = state.carrito.filter(item => item.id !== producto.id);
    },
    pagarCompra(state, datos){
      state.compra.push(datos);
    }
  },
  getters: {
    getItems: state => {
      return state.items;
    },
    getCarrito: state => {
      return state.carrito;
    },
    getTotal: state => {
      let total = 0;
      state.carrito.forEach(item => {
        total += item.precio*item.unidad;
      });
      return total.toFixed(2);
    },
    getCompra:state =>{
      return state.compra;
    }
  },
  actions: {
  },
  modules: {
  }
})
