<template>
  <div class="container">
    <h2>Latest Headline news</h2>

    <button class="btn btn-success" @click="showBusiness">Show business listings</button>
    <button class="btn btn-info" @click="showEntertainment">Show Entertainment listings</button>
    <button class="btn btn-primary" @click="showSports">Show sports listings</button>
    <button class="btn btn-warning" @click="showHealth">Show health listings</button>
    <button class="btn btn-warning" @click="showTech">Show Technology listings</button>


    <div class="row">
      <div class="col-sm"  v-for="list in getBusinessListings" :key="list.id" v-if="showBus">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="list.urlToImage" alt="Card image cap">
          <div class="card-body">
            <router-link :to="{name: 'singleList', params: {url: list.url, author: list.author}}" ><p class="card-text">{{ list.title }}</p></router-link>
          </div>
        </div>
      </div>
      <div class="col-sm"  v-for="elist in getEntertainmentListing" :key="elist.id" v-if="showEnt">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="elist.urlToImage" alt="Card image cap">
          <div class="card-body">
            <router-link :to="{name: 'singleList', params: {url: elist.url, author: elist.author}}" ><p class="card-text">{{ elist.title }}</p></router-link>
          </div>
        </div>
      </div>
      <div class="col-sm" v-for="splist in getSportListing" :key="splist.id" v-if="showSp">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="splist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: splist.url, author: splist.author}}" ><p class="card-text">{{ splist.title }}</p></router-link>
            </div>
        </div>
      </div>

      <div class="col-sm" v-for="hsplist in getHealthListing" :key="hsplist.id" v-if="showHth">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="hsplist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: hsplist.url, author: hsplist.author}}" ><p class="card-text">{{ hsplist.title }}</p></router-link>
            </div>
        </div>
      </div>

      <div class="col-sm" v-for="Tlist in getTechListing" :key="Tlist.id" v-if="showT">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="Tlist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: Tlist.url, author: Tlist.author}}" ><p class="card-text">{{ Tlist.title }}</p></router-link>
            </div>
        </div>
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
      showSp: false,
      showHth: false,
      showT: false
    }
  },
  created(){
    this.$store.dispatch('getBusinessListings')
    this.$store.dispatch('getEntertainmentListing')
    this.$store.dispatch('getSportListing')
    this.$store.dispatch('getHealthListing')
    this.$store.dispatch('getTechListing')
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
    },
    getHealthListing(){
       return this.$store.getters.getHealthListing
    },
    getTechListing(){
      return this.$store.getters.getTechListing
    }
  },
  methods: {
    showEntertainment(){
      this.showHth = false
      this.showSp = false
      this.showBus= false
      this.showT = false
      this.showEnt = true
    },
    showBusiness(){
      this.showHth = false
      this.showSp = false
      this.showEnt = false
      this.showT = false
      this.showBus= true
    },
    showSports(){
      this.showHth = false
      this.showEnt = false
      this.showBus= false
      this.showT = false
      this.showSp = true
    },
    showHealth(){
      this.showEnt = false
      this.showBus= false
      this.showSp = false
      this.showT = false
      this.showHth = true
    },
    showTech(){
      this.showT = true
      this.showEnt = false
      this.showBus= false
      this.showSp = false
      this.showHth = false
    }
  }
}
</script>

