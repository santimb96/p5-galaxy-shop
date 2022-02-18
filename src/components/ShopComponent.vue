<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2" v-for="producto in items"
               :key="producto">
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                  src="../assets/rocketLeague.webp"
                  class="img-fluid rounded m-3"
                  alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">{{ producto.nombre }}</h1>
                <h5 class="text-center">{{ producto.precio }}</h5>
                <p class="card-text text-center">
                  {{ producto.descripcion }}
                </p>
                <div class="text-center">
                  <a class="btn btn-text producto" v-on:click="setValues(producto)">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-lg-3">
        <CarritoComponent/>

        <!--            <div class="card bg-text" style="height: 100%">
                      <div class="row">

                        <div
                            class="col-12 d-flex justify-content-center"
                            v-for="item in carrito"
                            :key="item"
                        >
                          <div class="card-body">
                            <div class="row">
                              <div class="col-6">
                                <p class="card-title">{{ item.nombre }}</p>
                              </div>
                              <div class="col-6">
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
                              <button class="btn btn-block btn-blue" v-on:click='setValue(item.id, item.unidad)'>Actualizar
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="text-end pe-3">
                          <p>{{ total }}</p>

                        </div>
                        <div class="text-center">
                          <a href="#" class="btn btn-secondary producto">Comprar</a>
                        </div>
                      </div>
                    </div>-->
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
      store: useStore()
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
    }
  },
  setup() {
    const store = useStore();

    const carrito = store.getters.getCarrito;
    const items = store.getters.getItems;
    //const total =

    return {
      carrito,
      //total,
      items
    };
  },
  components: {CarritoComponent},
};
</script>
