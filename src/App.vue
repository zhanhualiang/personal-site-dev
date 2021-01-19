<template>
  <div id="header">
    <div id="title">
      <h1>{{ $t('personal-info.name') }}</h1>
      <p>{{ $t('funny-words') }}</p>
    </div>
    <div id="nav">
      <router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/tools">{{ $t('tools') }}</router-link>
      <a href="#" @click.prevent="toogleLocale">EN/中文</a>
    </div>
  </div>

  <hr />
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/Footer'
import newI18n from '@/i18n'

export default {
  setup () {

  },
  components: {
    Footer
  },
  data () {
    return { langs: ['en', 'cn'] }
  },
  methods: {
    toogleLocale () {
      newI18n.getLocale() === 'en' ? newI18n.setLocale('cn') : newI18n.setLocale('en')
      const currentLocale = newI18n.getLocale()
      localStorage.setItem('currentLocal', currentLocale)
    }
  },
  mounted () {
    const currentLocale = localStorage.getItem('currentLocal')
    if (currentLocale) {
      newI18n.setLocale(currentLocale)
    }
  }
}
</script>

<style>
#header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
}

#nav {
  margin-top: 20px;
  margin-right: 30px;
  font-size: 20px;
}

#nav a {
  padding: 5px 10px;
}

.current-tab {
  color: white;
  background-color: black;
}
</style>
