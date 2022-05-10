<template>
<div id="app">
  <button @click="display=!display">Toggle</button>
  <!-- <transition enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceOutLeft">
    <img v-if="display" alt="Vue logo" src="./assets/logo.png">
  </transition> -->

  <!-- <transition enter-active-class="animate__animated animate__rotateIn"
   leave-active-class="animate__animated animate__rotateOut" @after-enter="onEnter" @after-leave="onLeave">
    <img v-if="display" alt="Vue logo" src="./assets/logo.png">
  </transition>
  <h1>The image {{ status }}</h1> -->

  <!-- <transition
  appear
  appear-active-class="animate__animated animate__jackInTheBox"
  enter-active-class="animate__animated animate__jackInTheBox"
  leave-active-class="animate__animated animate__rollOut">
    <img v-if="display" alt="Vue logo" src="./assets/logo.png">
  </transition> -->

  <!-- <transition-group tag="ul" enter-active-class="animate__animated animate__zoomIn">
    <li v-for="i in count" :key="i" style="float:left;">
      <img src="https://picsum.photos/100" />
    </li>
  </transition-group>
  <hr style="clear:both;" />
  <button @click="count=count+1">Increase</button> -->

  <!-- <custom-transition>
    <img v-if="display" alt="Vue logo" src="./assets/logo.png">
  </custom-transition> -->

  <transition name="rotate" mode="out-in">
     <img v-if="display" key="up" alt="Vue logo" src="./assets/logo.png">
     <img v-else key="down" alt="Vue logo" src="./assets/logo.png" style="transform:rotate(180deg);">
  </transition>
  
</div>
  
</template>

<script>
import CustomTransition from './components/CustomTransition.vue'

export default {
  name: 'App',
  components: { CustomTransition },
  data: () => ({
    display: true,
    status: 'appeared',
    count: 0
  }),
  methods: {
    onEnter () {
      this.status = 'appeared'
    },
    onLeave () {
      this.status = 'disappeared'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rotate-enter-active,
.rotate-leave-active{
  transition: transform .8s ease-in-out;
}

.rotate-enter,
.rotate-leave-active{
  transform:rotate(-180deg);
  transition:transform .8s ease-in-out;
}
</style>
