<template>
  <div class="secure">
    <h1>This is an secure page</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'

type RouteNext = (to?: RouteLocationRaw | false | ((vm: Vue) => any) | void) => void;

export default class Home extends Vue {
  beforeRouteEnter (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: RouteNext
  ) {
    const securePassword = 'vuejs'
    const userPassword = prompt('What is the password?')

    if (userPassword === securePassword) {
      next()
    } else if (!userPassword) {
      next('/')
    }
  }

  beforeRouteLeave (to: RouteLocationNormalized, from: RouteLocationNormalized, next: RouteNext) {
    alert('Bye!')
    next()
  }
}
</script>
