<template>
  <a-table :dataSource="userList" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button
          type="primary"
          size="small"
          @click="changeRoute('view', record.id)"
        >
          <template #icon><eye-outlined /></template>
        </a-button>
        <a-button
          type="primary"
          size="small"
          @click="changeRoute('edit', record.id)"
        >
          <template #icon><edit-outlined /></template>
        </a-button>
        <a-button danger size="small" @click="deleteUser(record.id)">
          <template #icon><delete-outlined /></template>
        </a-button>
      </template>
    </template>
  </a-table>
</template>
<script>
import changeRouteMixin from '@/mixin/changeRoute'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons-vue'

export default {
  components: { EditOutlined, DeleteOutlined, EyeOutlined },
  data: () => ({
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country'
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
      }
    ]
  }),
  mixins: [changeRouteMixin],
  computed: {
    userList() {
      return this.$store.getters.getUsersList
    }
  },
  methods: {
    async getAllUsers() {
      this.$store.dispatch('fetchUsersList')
    },
    async deleteUser(id) {
      this.$store.dispatch('removeUser', id)
      await this.getAllUsers()
    }
  },
  async beforeMount() {
    this.getAllUsers()
  }
}
</script>
