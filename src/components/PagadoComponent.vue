<template>

  <div class="container-fluid bg-dark text-text">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center fs-2">¡GRACIAS POR TU COMPRA!</h1>
          </div>
          <div class="col-12  mb-3">
            <h2 class="text-center fs-4">Te acabamos de mandar un mail con el recibo</h2>
          </div>

          <div class="main toBottom" style="color: black">
            <div class="container mt-3">
              <div class="card animate__animated animate__fadeIn">
                <div class="card-header">
                  <strong>Fecha compra {{ currentDate }}</strong>
                </div>
                <div class="card-body">
                  <div class="row mb-4">
                    <div class="col-6 col-md-6">
                      <h6 class="mb-2"><strong>Datos de la tarjeta</strong></h6>
                      <div>{{ compra.nombre }}</div>
                      <div>{{ compra.numero }}</div>
                      <div>{{ compra.fecha }}</div>
                    </div>
                  </div>

                  <div class="table-responsive-sm">
                    <table class="table table-sm table-striped">
                      <thead>
                      <tr>
                        <th scope="col" width="2%" class="center">#</th>
                        <th scope="col" width="20%">Producto/Servicio</th>
                        <th scope="col" class="d-none d-sm-table-cell" width="50%">Descripción</th>

                        <th scope="col" width="10%" class="text-right">P. Unidad</th>
                        <th scope="col" width="8%" class="text-right">Unidad</th>
                        <th scope="col" width="10%" class="text-right">Total</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="item in compra.carrito" :key="item">
                        <td class="text-left">{{ item.id }}</td>
                        <td class="item_name">{{ item.nombre }}</td>
                        <td class="item_desc d-none d-sm-table-cell">{{  item.descripcion }}</td>

                        <td class="text-right">{{ item.precio }} €</td>
                        <td class="text-right">{{ item.unidad }}</td>
                        <td class="text-right">{{ (item.precio * item.unidad).toFixed(2) }} €</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-sm-5">
                    </div>

                    <div class="col-lg-4 col-sm-5 ml-auto">
                      <table class="table table-sm table-clear">
                        <tbody>
                        <tr>
                          <td class="left">
                            <strong>Total</strong>
                          </td>
                          <td class="text-right bg-light">
                            <strong>{{ total }} €</strong>
                          </td>
                        </tr>
                        </tbody>
                      </table>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  //name: "PagadoComponent",
  data() {
    return {
      store: useStore()
    }
  },
  computed: {
    currentDate(){
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      if(month < 10){
        return `${day}/0${month}/${year}`;
      }else{
        return `${day}/${month}/${year}`;
      }
    },
    total(){
      return this.store.getters.getTotal;
    }
  },
  setup() {
    const store = useStore();
    const compra = store.getters.getCompra[store.getters.getCompra.length - 1]; //cogemos el último!
    return {
      compra
    }
  }
}
</script>

<style scoped>

</style>