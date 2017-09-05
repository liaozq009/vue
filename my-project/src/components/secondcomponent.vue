<template>
  <div id="secondcomponent">
    <a> {{ author }} </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        author: 'secondcomponent',
        articles: []
      }
    }
  }
</script>

<style>
</style>