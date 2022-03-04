<template>
  <div class="container-fluid bg-dark ">
    <div class="row">
      <div class="col-lg-9 mb-2">
        <div class="container-fluid bg-text h-100">
          <div class="row">
            <div class="col-12">
              <div class="mt-2">
                <button v-on:click="back" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>
              </div>
              <form class="d-flex flex-column m-4">
               <label>Nombre <input type="text" placeholder="Nombre" class="w-100 mb-4" v-model="nombre"/></label>
                <label>Número de tarjeta<input type="text" placeholder="Número de tarjeta" class="w-100 mb-4" v-model="numero"/></label>
                <label>Fecha de expiración<input type="date" class="w-100 mb-4" v-model="fecha"/></label>
                <label>CVC<input type="text" placeholder="CVC" class="w-100 mb-4" v-model="cvc"/></label>
                <button class="btn btn-success" v-on:click="pagar();">Pagar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 bg-text mb-2" style="height: 50vw;">
        <CarritoComponent/>
      </div>
    </div>
  </div>
</template>
<script>
import CarritoComponent from "./CarritoComponent.vue";
import PagadoComponent from "./PagadoComponent.vue";
import {useStore} from "vuex";

export default {
  components: {CarritoComponent, PagadoComponent},
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
        fecha: new Date(this.fecha).toLocaleDateString(),
        numero: this.numero,
        cvc: this.cvc,
        carrito: this.store.getters.getCarrito
      }

      this.store.commit('pagarCompra', compra);
      return this.$router.push({path: 'pagado'});
    },
    back(){
      return this.$router.push({path: 'shop'});
    }
  }
};
</script>
