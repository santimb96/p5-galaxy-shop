<template>
  <div class="container-fluid bg-text" style="height: 50vw;">
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
          <div class="col-2">
            <p class="card-title">
              <small>{{ item.precio }}</small>
            </p>
          </div>
          <div class="col-4">
            <input
                type="number"
                style="width: 3rem"
                v-model="item.unidad"
            />
          </div>
          <div class="col-2">
            <button class="btn btn-secondary" v-on:click="borrarItem(item)">x</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="total !== '0.00'" class="text-end pe-3">
      <p>{{ total }}</p>
      <div class="text-center">
        <router-link class="btn btn-secondary producto m-3" to="/pago">Comprar</router-link>
        <router-view/>
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
      store: useStore()
    }
  },
  computed: {
    total() {
      return this.store.getters.getTotal;
    },
    carrito() {
      return this.store.getters.getCarrito;
    }
  },
  methods: {
    setValues(producto) {
      this.store.commit('setUnidades', producto);
    },
    borrarItem(producto) {
      this.store.commit('borrarProducto', producto);
    }
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
