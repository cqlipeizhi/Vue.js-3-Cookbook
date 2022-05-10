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
import UserForm from '@/components/userForm'
import changeRoute from '../../mixin/changeRoute'

export default {
  mixins: [changeRoute],
  computed: {
    userId() {
      return this.$route.params.id
    },
    userData() {
      return this.$store.getters.getUserData
    }
  },
  components: { UserForm, ArrowLeftOutlined, EditOutlined },
  methods: {
    async getUserById() {
      await this.$store.dispatch('fetchUserData', this.userId)
    }
  },
  async beforeMount() {
    this.getUserById()
  }
}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
