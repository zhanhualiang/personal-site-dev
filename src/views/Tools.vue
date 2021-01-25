<template>
  <div id="tools">
    <h2>{{ $t("tools") }}</h2>
    <p>
      {{ $t("tool.description") }}
    </p>
    <div class="tools-container">
      <router-link
        v-for="i in dynamicToolCount"
        :key="i"
        :to="'/tools/' + $t(`tool.content[${i}].key`)"
      >
        <div class="tools-item">
          <h3>{{ $t(`tool.content[${i}].title`) }}</h3>
          <p>{{ $t(`tool.content[${i}].description`) }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import jsonContent from '../locales/en.json'

export default {
  data () {
    return {
      msg: 'tool page'
    }
  },
  computed: {
    dynamicToolCount: function () {
      const toolCount = jsonContent.tool.content.length
      const toolArray = []
      for (var i = 0; i < toolCount; i++) {
        toolArray.push(i)
      }
      return toolArray
    }
  },
  mounted () {
    console.log('Tool page mounted.')
  }
}
</script>

<style scoped>
#tools {
  padding: 20px;
}

.tools-container {
  display: flex;
  flex-wrap: wrap;
}

.tools-container a {
  text-decoration: none;
}

.tools-item {
  width: 580px;
  height: 100px;
  min-width: 200px;
  min-height: 80px;
  padding: 20px;
  margin: 10px;
  flex-grow: 1;
  background: lightgray;
}

.tools-item:hover {
  background: gray;
}
</style>
