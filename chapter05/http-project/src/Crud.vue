<template>
  <div id="app">
      <a-row>
          <a-col>
              <component :is="component" @change-component="changeComponent" />
          </a-col>
      </a-row>
  </div>
</template>

<script>
import { computed } from 'vue'
import List from './components/list'
import Create from './components/create'
import View from './components/view'
import Update from './components/update'

export default {
  data: () => ({
    componentIs: 'list',
    userId: 0
  }),
  provide () {
    return {
      userId: computed(() => this.userId)
    }
  },
  computed: {
    component () {
      switch (this.componentIs) {
        case 'list':
          return List
        case 'create':
          return Create
        case 'view':
          return View
        case 'edit':
          return Update
        default:
          return undefined
      }
    }
  },
  methods: {
    changeComponent (payload) {
      this.componentIs = payload.component
      this.userId = Number(payload.userId)
      console.log('changeComponent')
      console.log(this.userId)
    }
  }
}
</script>
