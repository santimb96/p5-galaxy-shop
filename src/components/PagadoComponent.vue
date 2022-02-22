<template>

  <div class="container-fluid bg-dark text-text">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h1>¡GRACIAS POR TU COMPRA!</h1>
          </div>
          <div class="col-12 d-flex justify-content-center mb-3">
            <h2>Te acabamos de mandar un mail con el recibo</h2>
          </div>
            <table class="table text-text text-center">
              <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col">Producto</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ compra.nombre }}</td>
                <td>{{ compra.fecha }}</td>
                <td v-for="item in compra.carrito" :key="item">
                  <ul class="list-group ">
                    <li class="list-group-item">Nombre: {{ item.nombre }}</li>
                    <li class="list-group-item">Precio: {{ item.precio }}</li>
                    <li class="list-group-item">Unidades: {{ item.unidad}}</li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  //name: "PagadoComponent",
  setup() {
    const store = useStore();
    const compra = store.getters.getCompra[0];
    console.log(compra);
    return {
      compra
    }
  }
}
</script>

<style scoped>

</style>