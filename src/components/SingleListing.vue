<template>
  <div class="container">
    <object width="700" height="600" :data="url"></object>
    <p>Author: {{ $route.params.author }}</p>
    <p>Title: {{ $route.params.title }}</p>
    <p>Description: {{ $route.params.description }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url: ''
    }
  },
  created(){
    this.url = this.$route.params.url
  }
}
</script>

