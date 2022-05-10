<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/secure">Secure</router-link>
      <router-view />
    </div> -->
    <Counter v-model="amount" />
    <CounterByTen v-model="amount" />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import { Vue, Options } from 'vue-class-component'
import Counter from './components/Counter.vue'
import CounterByTen from './components/CounterByTen.vue'

@Options({
  components: {
    Counter,
    CounterByTen
  }
})
export default class App extends Vue {
  amount: number = 0
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
