<template>
  <!-- <MaterialCardBox>
    <template v-slot:header>
      <strong>Card Title</strong>
      <span>Card Sub-Title</span>
    </template>
    <template v-slot:media>
      <img src="https://via.placeholder.com/350x150" />
    </template>
    <p>Main Section</p>
    <template v-slot:action>
      <button>Action Button</button>
      <button>Action Button</button>
    </template>
  </MaterialCardBox> -->
  <MaterialCardBox header="Hello World!" subHeader="Hi!" showMedia imgSrc="https://picsum.photos/300/200" showActions>
        <p><StarRating ref="starRating" /></p>
        <p>Welcome to...</p>
        <template v-slot:action>
      <MaterialButton background-color="#26a69a" text-color="#fff" @click="resetVote">Reset</MaterialButton>
      <MaterialButton background-color="#027be3" text-color="#fff" @click="forceVote">Rate 5 Stars</MaterialButton>
    </template>
  </MaterialCardBox>
</template>

<script>
// import MaterialCardBox from './components/MaterialCardBox'
// import MaterialButton from './components/MaterialButton'
// import StarRating from './components/StarRating'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    StarRating: defineAsyncComponent(() => import('./components/StarRating.vue')),
    MaterialButton: defineAsyncComponent(() => import('./components/MaterialButton.vue')),
    MaterialCardBox: defineAsyncComponent(() => import('./components/MaterialCardBox.vue'))
  },
  methods: {
    resetVote () {
      this.$refs.starRating.rank = 0
      this.$refs.starRating.voted = false
    },
    forceVote () {
      this.$refs.starRating.rank = 5
      this.$refs.starRating.voted = true
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
