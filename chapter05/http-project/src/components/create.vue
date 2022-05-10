<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>Create User</h3>
    </template>
    <a-row>
      <a-col>
        <user-form v-model="userData" />
      </a-col>
    </a-row>
    <template #actions>
      <a-row>
      <a-button size="small" @click="createUser">
        <template #icon><save-outlined /></template>
        Create User
      </a-button>
      <a-button danger size="small" @click="changeComponent('list', 0)">
        <template #icon><close-outlined /></template>
        Cancel
      </a-button>
      </a-row>
    </template>
  </a-card>
</template>

<script>
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue'
import UserForm from './userForm'
import changeComponent from '../mixin/changeComponent'
import { postHttp } from '../http/axiosApi'

export default {
  components: { UserForm, SaveOutlined, CloseOutlined },
  mixins: [changeComponent],
  data: () => ({
    userData: {
      name: '',
      email: '',
      birthday: '',
      country: '',
      phone: ''
    }
  }),
  methods: {
    async createUser () {
      await postHttp(`${window.location.href}api/users`, {
        data: { ...this.userData }
      })
      this.changeComponent('list', 0)
    }
  }
}
</script>

<style scoped>
.ant-btn{
  margin-left: 5px;
}
</style>
