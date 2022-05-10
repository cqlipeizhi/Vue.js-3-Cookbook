<script lang="ts">
import { mixins } from 'vue-class-component'
import DefaultNumber from '../mixins/defaultNumber'
// import NumberWatcher from '../mixins/numberWatcher'
import componentMount from '../decorators/componentMount'

@componentMount
export default class Counter extends mixins(DefaultNumber) {
  // valueNumber: number = 0;

  debug: boolean = true;

  get formattedNumber () {
    return `Your total number is: ${this.valueNumber}`
  }

  increase () {
    console.log('Counter:increase: ' + this.valueNumber)
    this.valueNumber += 1
  }

  decrease () {
    console.log('Counter:decrease: ' + this.valueNumber)
    this.valueNumber -= 1
  }
}
</script>

<template>
    <div>
        <fieldset>
            <legend>{{formattedNumber}}</legend>
            <button @click="increase">Increase</button>
            <button @click="decrease">Decrease</button>
        </fieldset>
    </div>
</template>
