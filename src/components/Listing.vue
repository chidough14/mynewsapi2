<template>
  <div class="container">
    <h2>Latest Nigeria Headline news</h2>
    <table class="table">
      <tr>
        <td><button class="btn btn-success" @click="showBusiness">Show business listings</button></td>
        <td><button class="btn btn-info" @click="showEntertainment">Show Entertainment listings</button></td>
        <td><button class="btn btn-primary" @click="showSports">Show sports listings</button></td>
      </tr>

      <tr>
        <td><button class="btn btn-warning" @click="showHealth">Show health listings</button></td>
        <td><button class="btn btn-danger" @click="showTech">Show Technology listings</button></td>
        <td><button class="btn btn-default" @click="showScience">Show Science listings</button></td>
      </tr>
    </table>

    <div class="row">
      <div class="col-sm"  v-for="list in getBusinessListings" :key="list.id" v-if="showBus">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="list.urlToImage" alt="Card image cap">
          <div class="card-body">
            <router-link :to="{name: 'singleList', params: {url: list.url, author: list.author, title: list.title, description: list.description}}" >
              <p class="card-text">{{ list.title }}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm"  v-for="elist in getEntertainmentListing" :key="elist.id" v-if="showEnt">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="elist.urlToImage" alt="Card image cap">
          <div class="card-body">
            <router-link :to="{name: 'singleList', params: {url: elist.url, author: elist.author, title: elist.title, description: elist.description}}" >
              <p class="card-text">{{ elist.title }}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-sm" v-for="splist in getSportListing" :key="splist.id" v-if="showSp">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="splist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: splist.url, author: splist.author, title: splist.title, description: splist.description}}" >
                <p class="card-text">{{ splist.title }}</p>
              </router-link>
            </div>
        </div>
      </div>

      <div class="col-sm" v-for="hsplist in getHealthListing" :key="hsplist.id" v-if="showHth">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="hsplist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: hsplist.url, author: hsplist.author, title: hsplist.title, description: hsplist.description}}">
                <p class="card-text">{{ hsplist.title }}</p>
              </router-link>
            </div>
        </div>
      </div>

      <div class="col-sm" v-for="Tlist in getTechListing" :key="Tlist.id" v-if="showT">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="Tlist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: Tlist.url, author: Tlist.author, title: Tlist.title, description: Tlist.description}}" >
                <p class="card-text">{{ Tlist.title }}</p>
              </router-link>
            </div>
        </div>
      </div>

      <div class="col-sm" v-for="Slist in getScienceListing" :key="Slist.id" v-if="showSc">
        <div class="card" style="width: 18rem;" >
            <img class="card-img-top" :src="Slist.urlToImage" alt="Card image cap">
            <div class="card-body">
              <router-link :to="{name: 'singleList', params: {url: Slist.url, author: Slist.author, title: Slist.title, description: Slist.description}}" >
                <p class="card-text">{{ Slist.title }}</p>
              </router-link>
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
      showT: false,
      showSc: false
    }
  },
  created(){
    this.$store.dispatch('getBusinessListings')
    this.$store.dispatch('getEntertainmentListing')
    this.$store.dispatch('getSportListing')
    this.$store.dispatch('getHealthListing')
    this.$store.dispatch('getTechListing')
    this.$store.dispatch('getScienceListing')
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
    },
    getScienceListing(){
      return this.$store.getters.getScienceListing
    }
  },
  methods: {
    showEntertainment(){
      this.showHth = false
      this.showSp = false
      this.showBus= false
      this.showT = false
      this.showSc = false
      this.showEnt = true
    },
    showBusiness(){
      this.showHth = false
      this.showSp = false
      this.showEnt = false
      this.showT = false
      this.showSc = false
      this.showBus= true
    },
    showSports(){
      this.showHth = false
      this.showEnt = false
      this.showBus= false
      this.showT = false
      this.showSc = false
      this.showSp = true
    },
    showHealth(){
      this.showEnt = false
      this.showBus= false
      this.showSp = false
      this.showT = false
      this.showSc = false
      this.showHth = true
    },
    showTech(){
      this.showEnt = false
      this.showBus= false
      this.showSp = false
      this.showSc = false
      this.showHth = false
      this.showT = true
    },
    showScience(){
      this.showT = false
      this.showEnt = false
      this.showBus= false
      this.showSp = false
      this.showHth = false
      this.showSc = true
    }
  }
}
</script>

