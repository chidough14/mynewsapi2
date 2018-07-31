<template>
  <div>
    <object width="400" height="400" :data="url"></object>
    {{ $route.params.author }}
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

