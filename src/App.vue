<template>
  <div id="header">
    <div id="title">
      <h1>Zhanhua Liang</h1>
      <p>Some call me Zhanhua, some call me Liang, and some call me "Cheng".</p>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tools">Tools</router-link>
    </div>
  </div>

  <hr />
  <router-view />
  <Footer />
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
#header{
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
}

#nav{
  margin-top: 20px;
  margin-right: 30px;
  font-size: 20px;
}
</style>
