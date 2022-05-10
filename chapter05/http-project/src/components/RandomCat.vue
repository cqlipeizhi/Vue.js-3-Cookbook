<template>
    <MaterialCardBox header="Cat as a Service" sub-header="Random Cat Image" show-media show-actions>
        <template v-slot:media>
            <img v-if="kittyImage" alt="Meow" :src="kittyImage" style="width:300px;">
            <p v-else style="text-align:center">
                <i class="material-icons">cached</i>
            </p>
        </template>
        <template v-slot:action>
            <MaterialButton background-color="#4ba3c7" text-color="#fff" @click="newCatImage">
                <i class="material-icons">pets</i>
                Cat Image
            </MaterialButton>
            <MaterialButton background-color="#005b9f" text-color="#fff" @click="newCatGif">
                <i class="material-icons">pets</i>
                Cat GIF
            </MaterialButton>
        </template>
    </MaterialCardBox>
</template>

<script>
import { getHttp } from '../http/axiosApi'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  components: {
    MaterialButton: defineAsyncComponent(() => import('./MaterialButton.vue')),
    MaterialCardBox: defineAsyncComponent(() => import('./MaterialCardBox.vue'))
  },
  data: () => ({
    kittyImage: ''
  }),
  methods: {
    async getImage (url) {
      const { data } = await getHttp(url)
      return URL.createObjectURL(data)
    },
    async newCatImage () {
      this.kittyImage = await this.getImage('https://cataas.com/cat')
    },
    async newCatGif () {
      this.kittyImage = await this.getImage('https://cataas.com/cat/gif')
    }
  },
  async beforeMount () {
    await this.newCatImage()
  }
})
</script>

<style scoped>
@import '../style/materialIcons.css';
body{
    font-size:14px;
}
</style>
