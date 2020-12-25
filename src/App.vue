<template>
  <Header></Header>
  <Homepage></Homepage>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/homepage'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Homepage
  }
}
</script>

<style>
</style>
