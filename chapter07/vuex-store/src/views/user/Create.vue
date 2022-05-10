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
        <a-button danger size="small" @click="changeRoute('list')">
          <template #icon><close-outlined /></template>
          Cancel
        </a-button>
      </a-row>
    </template>
  </a-card>
</template>

<script>
import { SaveOutlined, CloseOutlined } from '@ant-design/icons-vue'
import UserForm from '@/components/userForm'
import changeRoute from '../../mixin/changeRoute'

export default {
  components: { UserForm, SaveOutlined, CloseOutlined },
  mixins: [changeRoute],
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
    async createUser() {
      await this.$store.dispatch('createUser', this.userData)
      this.changeRoute('list')
    }
  }
}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
