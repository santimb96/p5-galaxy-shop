<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-lg-10">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2"
          >
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                src="../assets/rocketLeague.webp"
                class="img-fluid rounded m-3"
                alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">Viaje a la Luna</h1>
                <h5 class="text-center">19,95€</h5>
                <p class="card-text text-center">
                  Viaje a la luna por parte de adminerTravel
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-text producto">Comprar</a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2"
          >
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                src="../assets/rocketLeague.webp"
                class="img-fluid rounded m-3"
                alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">Viaje a la Luna</h1>
                <h5 class="text-center">19,95€</h5>
                <p class="card-text text-center">
                  Viaje a la luna por parte de adminerTravel
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-text producto">Comprar</a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2"
          >
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                src="../assets/rocketLeague.webp"
                class="img-fluid rounded m-3"
                alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">Viaje a la Luna</h1>
                <h5 class="text-center">19,95€</h5>
                <p class="card-text text-center">
                  Viaje a la luna por parte de adminerTravel
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-text producto">Comprar</a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2"
          >
            <div class="card bg-secondary text-white" style="width: 20rem">
              <img
                src="../assets/rocketLeague.webp"
                class="img-fluid rounded m-3"
                alt="space"
              />
              <div class="card-body">
                <h1 class="card-title text-center">Viaje a la Luna</h1>
                <h5 class="text-center">19,95€</h5>
                <p class="card-text text-center">
                  Viaje a la luna por parte de adminerTravel
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-text producto">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-2">
        <div class="card bg-text" style="height: 100%">
          <div class="row">

            <div
              class="col-12 d-flex justify-content-center"
              v-for="item in carrito"
              :key="item"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <p class="card-title">{{ item.nombre }}</p>
                  </div>
                  <div class="col-4">
                    <p class="card-title">
                      <small>{{ item.precio }}</small>
                    </p>
                  </div>
                  <div class="col-4">
                    <input
                      type="number"
                      style="width: 3rem"
                      v-model="numero"
                      v-bind="setValues"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="text-end pe-3">
              <p>{{ total }}</p>
              
            </div>
            <p>{{ numero }}</p>
            <!-- <p class="text-center">19,95€</p> -->
            <div class="text-center">
              <a href="#" class="btn btn-secondary producto">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";



export default {
  data () {
    return {
      numero: 0
    }
  },
  computed: {
      setValues () {
      const store = useStore();
      store.commit('setUnidades', this.numero);
      console.log(this.numero);
      }
  },
  methods: {
    setData: function (item) {
      console.log(item);
    }
  },
  setup() {
    const store = useStore();

    const carrito = store.getters.getCarrito;
    const total = store.getters.getTotal;

    return {
      carrito,
      total
    };
  },
};
</script>

<style></style>
