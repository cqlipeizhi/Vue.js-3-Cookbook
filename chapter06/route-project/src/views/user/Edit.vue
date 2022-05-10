<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>Update User</h3>
    </template>
    <a-row>
      <a-col>
        <user-form v-model="userData" />
      </a-col>
    </a-row>
    <template #actions>
      <a-row>
        <a-button type="primary" size="small" @click="updateUser">
          <template #icon><save-outlined /></template>
          Update User
        </a-button>
        <a-button
          danger
          size="small"
          @click="changeRoute('list')"
        >
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
import { getHttp, patchHttp } from '../../http/fetchApi'

export default {
  data: () => ({
    userData: {
      name: '',
      email: '',
      birthday: '',
      country: '',
      phone: ''
    }
  }),
  mixins: [changeRoute],
  computed: {
    userId () {
      return this.$route.params.id
    }
  },
  components: { UserForm, SaveOutlined, CloseOutlined },
  methods: {
    async getUserById () {
      const { data } = await getHttp(
        `api/users/${this.userId}`
      )
      this.userData = data
    },
    async updateUser () {
      await patchHttp(`api/users/${this.userData.id}`, {
        data: { ...this.userData }
      })
      this.changeRoute('list')
    }
  },
  async beforeMount () {
    await this.getUserById()
  }
}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
