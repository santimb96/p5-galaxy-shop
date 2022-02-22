<template>
  <div class="container-fluid">

    <div v-if="total !== '0.00'" id="cardCompra">
      <h5 class="d-flex justify-content-center mt-5">Tu compra</h5>
    <div
        class="col-12 d-flex justify-content-center align-items-center"
        v-for="item in carrito"
        :key="item"
    >
      <div class="card-body">
        <div class="row d-flex align-items-center">
          <div class="col-4">
            <p class="card-title">{{ item.nombre }}</p>
          </div>
          <div class="col-3">
            <p class="card-title">
              <small>{{ item.precio }}€</small>
            </p>
          </div>
          <div class="col-3">
            <input
                type="number"
                min="1"
                style="width: 3rem"
                v-model="item.unidad"
            />
          </div>
          <div class="col-2">
            <button class="btn btn-secondary" v-on:click="borrarItem(item)"><i class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-end pe-3">
      <div class="row">
        <div class="col-5 d-flex justify-content-center">
          <p><b>Total</b></p>
        </div>
        <div class="col-7">
          <p> {{ total }} € </p>
        </div>
      </div>

      <div class="text-center">
        <router-link class="btn btn-secondary producto m-3" to="/pago">Comprar</router-link>
        <router-view/>
      </div>
    </div>
    </div>

    <div v-else class="d-flex justify-content-center">
      <h5 class="p-4">No tienes productos</h5>
    </div>

  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  data() {
    return {
      store: useStore(),
    }
  },
  computed: {
    total() {
      return this.store.getters.getTotal;
    },
    carrito() {
      return this.store.getters.getCarrito;
    },
  },
  methods: {
    setValues(producto) {
      this.store.commit('setUnidades', producto);
    },
    borrarItem(producto) {
      this.store.commit('borrarProducto', producto);
    },

  }/*,
  setup() {
    const store = useStore();
    const carrito = store.getters.getCarrito;

    return {
      carrito
    };
  },*/
};

</script>
