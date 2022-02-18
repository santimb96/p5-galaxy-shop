<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-9">
        <div class="container-fluid bg-text h-100">
          <div class="row">
            <div class="col-12">
              <form class="d-flex flex-column m-4">
               <label>Nombre <input type="text" placeholder="Nombre" class="w-100 mb-4" v-model="nombre"/></label>
                <label>Número de tarjeta<input type="text" placeholder="Número de tarjeta" class="w-100 mb-4" v-model="numero"/></label>
                <label>Fecha de expiración<input type="text" placeholder="Fecha de expiración" class="w-100 mb-4" v-model="fecha"/></label>
                <label>CVC<input type="text" placeholder="CVC" class="w-100 mb-4" v-model="cvc"/></label>
                <button class="btn btn-success" >Pagar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <CarritoComponent/>
      </div>
    </div>
  </div>
</template>
<script>
import CarritoComponent from "./CarritoComponent.vue";
import {useStore} from "vuex";

export default {
  components: {CarritoComponent},
  data(){
    return {
      store: useStore(),
      nombre:'',
      fecha:'',
      numero:'',
      cvc:''
    }
  },
  methods: {
    pagar(){
      let compra = {
        nombre: this.nombre,
        fecha: this.fecha,
        numero: this.numero,
        cvc: this.cvc,
        carrito: this.store.getters.getCarrito
      }

      this.store.commit('pagarCompra', compra);
    }
  }
};
</script>
