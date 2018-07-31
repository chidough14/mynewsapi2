<template>
  <div class="container">
    <h2>Latest Headline news</h2>

    <button class="btn btn-success" @click="showBusiness">Show business listings</button>
    <button class="btn btn-info" @click="showEntertainment">Show Entertainment listings</button>
    <button class="btn btn-primary" @click="showSports">Show sports listings</button>


    <div class="card" style="width: 18rem;" v-for="list in getBusinessListings" :key="list.id" v-if="showBus">
      <img class="card-img-top" :src="list.urlToImage" alt="Card image cap">
      <div class="card-body">
        <router-link :to="{name: 'singleList', params: {url: list.url, author: list.author}}" ><p class="card-text">{{ list.title }}</p></router-link>
      </div>
    </div>

    <div class="card" style="width: 18rem;" v-for="elist in getEntertainmentListing" :key="elist.id" v-if="showEnt">
      <img class="card-img-top" :src="elist.urlToImage" alt="Card image cap">
      <div class="card-body">
        <router-link :to="{name: 'singleList', params: {url: elist.url, author: elist.author}}" ><p class="card-text">{{ elist.title }}</p></router-link>
      </div>
    </div>

    <div class="card" style="width: 18rem;" v-for="splist in getSportListing" :key="splist.id" v-if="showSp">
      <img class="card-img-top" :src="splist.urlToImage" alt="Card image cap">
      <div class="card-body">
        <router-link :to="{name: 'singleList', params: {url: splist.url, author: splist.author}}" ><p class="card-text">{{ splist.title }}</p></router-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      showBus : false,
      showEnt: false,
      showSp: false
    }
  },
  created(){
    this.$store.dispatch('getBusinessListings')
    this.$store.dispatch('getEntertainmentListing')
    this.$store.dispatch('getSportListing')
  },
  computed: {
    getBusinessListings(){
      return this.$store.getters.getBusinessListings
    },
    getEntertainmentListing(){
       return this.$store.getters.getEntertainmentListing
    },
    getSportListing(){
      return this.$store.getters.getSportListing
    }
  },
  methods: {
    showEntertainment(){
      this.showSp = false
      this.showBus= false
      this.showEnt = true
    },
    showBusiness(){
      this.showSp = false
      this.showEnt = false
      this.showBus= true
    },
    showSports(){
      this.showEnt = false
      this.showBus= false
      this.showSp = true
    }
  }
}
</script>

