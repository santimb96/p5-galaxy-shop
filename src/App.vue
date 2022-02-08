<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent'

export default {
  components: {FooterComponent},
  render () {
    return <FooterComponent />
  }
}
</script>

<style>

</style>
