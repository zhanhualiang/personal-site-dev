<template>
  <div id="header">
    <h1>Zhanhua Liang</h1>
    <p>Some call me Zhanhua, some call me Liang, and some call me "Cheng".</p>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <hr>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer'

export default {
  components: {
    Footer
  }
}
</script>

<style>

</style>
