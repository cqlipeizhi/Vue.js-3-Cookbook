<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>Update User</h3>
    </template>
    <a-row>
      <a-col>
        <user-form v-model="tmpUserData" />
      </a-col>
    </a-row>
    <template #actions>
      <a-row>
        <a-button type="primary" size="small" @click="updateUser">
          <template #icon><save-outlined /></template>
          Update User
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
  data: () => ({
    tmpUserData: {
      name: '',
      email: '',
      birthday: '',
      country: '',
      phone: ''
    }
  }),
  mixins: [changeRoute],
  computed: {
    userId() {
      return this.$route.params.id
    },
    userData() {
      return this.$store.getters.getUserData
    }
  },
  components: { UserForm, SaveOutlined, CloseOutlined },
  methods: {
    async getUserById() {
      await this.$store.dispatch('fetchUserData', this.userId)
    },
    async updateUser() {
      await this.$store.dispatch('updateUser', this.tmpUserData)
      this.changeRoute('list')
    }
  },
  async beforeMount() {
    await this.getUserById()
  },
  watch: {
    userData: {
      handler(newData) {
        this.tmpUserData = newData
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
