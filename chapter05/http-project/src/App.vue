<template>
  <!-- <RandomCat /> -->
  <h3>Response</h3>
  <pre>{{ response }}</pre>
  <hr />
  <h1>Create / Update User</h1>
  <label for="userData">User JSON:
    <textarea id="userData" v-model="userData" rows="10" cols="40" style="display:block;"></textarea>
  </label>
  <button style="margin:20px;" @click="createUser(JSON.parse(userData))">Create User</button>
  <button style="margin:20px;" @click="updateUser(JSON.parse(userData))">Update User</button>
  <h1>Delete User</h1>
  <label for="userData">
    User Id:
    <input type="number" step="1" v-model="userId">
    <button style="margin:20px;" @click="deleteUser(userId)">Delete User</button>
  </label>
  <h1>Get User ToDos</h1>
  <label for="userData">
    <input type="number" step="1" v-model="userId">
    <button style="margin:20px;" @click="getUserTodo(userId)">Fetch Data</button>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineAsyncComponent } from 'vue'

import { getHttp, postHttp, patchHttp, deleteHttp, getTodos } from './http/axiosApi'

@Options({
  components: {
    RandomCat: defineAsyncComponent(() => import('./components/RandomCat.vue'))
  },
  async beforeMount () {
    this.getAllUsers()
  }
})
export default class App extends Vue {
  response = ''
  userData = ''
  userId = ''
  userTodo = []

  async getAllUsers () {
    const { data } = await getHttp(`${window.location.href}api/users`)
    this.response = data
  }

  async createUser (data) {
    await postHttp(`${window.location.href}api/users`, { data })
    await this.getAllUsers()
  }

  async updateUser (data) {
    await patchHttp(`${window.location.href}api/users/${data.id}`, { data })
    await this.getAllUsers()
  }

  async deleteUser (id) {
    await deleteHttp(`${window.location.href}api/users/${id}`)
    await this.getAllUsers()
  }

  async getUserTodo (userId) {
    this.userTodo = await getTodos(userId)
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
