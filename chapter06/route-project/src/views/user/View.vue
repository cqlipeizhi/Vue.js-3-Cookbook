<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>View User</h3>
    </template>
    <a-row>
      <a-col>
        <user-form v-model="userData" disabled />
      </a-col>
    </a-row>
    <template #actions>
      <a-row>
        <a-button size="small" @click="changeRoute('list')">
          <template #icon><arrow-left-outlined /></template>
          Back
        </a-button>
        <a-button
          type="primary"
          size="small"
          @click="changeRoute('edit', userId)"
        >
          <template #icon><edit-outlined /></template>
          Edit User
        </a-button>
      </a-row>
    </template>
  </a-card>
</template>

<script>
import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons-vue'
import { getHttp } from '../../http/fetchApi'
import UserForm from '@/components/userForm'
import changeRoute from '../../mixin/changeRoute'

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
  components: { UserForm, ArrowLeftOutlined, EditOutlined },
  methods: {
    async getUserById () {
      const { data } = await getHttp(`api/users/${this.userId}`)
      this.userData = data
    }
  },
  async beforeMount () {
    this.getUserById()
  }
}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
