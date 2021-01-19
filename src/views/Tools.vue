<template>
  <div id="tools">
    <h2>{{ $t('tools') }}</h2>
    <p>
      {{ $t('tool.description') }}
    </p>
    <div class="tools-container">
      <router-link
        v-for="i in toolCount"
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
export default {
  data () {
    return {
      toolCount: [0]
    }
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
  max-width: 580px;
  min-width: 200px;
  padding: 20px;
  margin: 10px;
  flex-grow: 1;
  background: lightgray;
}

.tools-item:hover{
  background: gray;
}
</style>
