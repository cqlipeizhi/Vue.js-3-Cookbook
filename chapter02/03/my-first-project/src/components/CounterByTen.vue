<template>
  <div>
    <legend>{{ formattedNumber }}</legend>
    <button @click="increase">Increase By Ten</button>
    <button @click="decrease">Decrease By Ten</button>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
// import DefaultNumber from '../mixins/defaultNumber'
import NumberWatcher from '../mixins/numberWatcher'

export default class CounterByTen extends mixins(NumberWatcher) {
  // valueNumber: number = 0;

  get formattedNumber () {
    return `Your total number is: ${this.valueNumber}`
  }

  increase () {
    console.log(['CounterByTen:increase: ' + this.valueNumber])
    this.valueNumber += 10
  }

  decrease () {
    console.log(['CounterByTen:decrease: ' + this.valueNumber])
    this.valueNumber -= 10
  }
}
</script>
