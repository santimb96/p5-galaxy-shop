<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-lg-9 col-md-12 col-sm-12">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 d-flex justify-content-center mb-2" v-for="producto in items"
               :key="producto">
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                  src="../assets/planetas/marte.jpg"
                  class="img-fluid rounded m-3"
                  alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">{{ producto.nombre }}</h1>
                <h5 class="text-center">{{ producto.precio }} €</h5>
                <p class="card-text text-center">
                  {{ producto.descripcion }}
                </p>
                <div class="text-center">
                  <a class="btn btn-text producto" v-on:click="setValues(producto)"><i class="fa fa-shopping-cart"></i> Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-lg-3 bg-text mb-lg-2 carrito overflow-auto" v-if="display">
        <button v-on:click="show()" class="sm-only btn btn-danger m-1"><i class="fa fa-times"></i></button>
        <CarritoComponent/>

      </div>
      <div v-else>
      <button v-on:click="show()" style="position: fixed; bottom: 0; font-size: 3vh" class="sm-only btn btn-text text-center"><i class="fas fa-cart-plus"></i></button>
      </div>
    </div>

  </div>
</template>

<script>
import {useStore} from "vuex";
import CarritoComponent from "./CarritoComponent.vue";

export default {
  data() {
    return {
      store: useStore(),
      display: true
    }
  },
  computed: {
    total() {
      return this.store.getters.getTotal;
    }
  },
  methods: {
    setValues(producto) {
      this.store.commit('setUnidades', producto);
    },
    show: function() {
        console.log(this.display);
        this.display = !this.display;
    }
  },
  setup() {
    const store = useStore();
    const carrito = store.getters.getCarrito;
    const items = store.getters.getItems;
    return {
      carrito,
      items
    };
  },
  components: {CarritoComponent},
};
</script>