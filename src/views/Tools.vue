<template>
  <div id="tools">
    <h2>Tools</h2>
    <p>
      Self-made pratical small tools for life and work. Third-party code are
      used.
    </p>
    <div class="tools-container">
      <router-link
        v-for="tool in tools"
        :key="tool.key"
        :to="'/tools/' + tool.key"
      >
        <div class="tools-item">
          <h3>{{ tool.title }}</h3>
          <p>{{ tool.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tools: [
        {
          title: 'Magento 2 Configurable Variation Generator',
          description: 'A simple variation generator for Magento 2 CSV data upload between configurable product and simple product.',
          key: 'magento-2-configurable-variation-generator'
        }
      ]
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
