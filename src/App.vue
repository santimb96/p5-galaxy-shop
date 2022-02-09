<template>
  <NavbarComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'

export default {
  components: {FooterComponent, NavbarComponent},
}
</script>
