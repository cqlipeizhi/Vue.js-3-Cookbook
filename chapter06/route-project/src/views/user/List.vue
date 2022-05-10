<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>Users</h3>
    </template>
    <a-row>
      <a-col>
        <a-table :dataSource="userList" :columns="columns">
          <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">
                    <a-button type="primary" size="small" @click="changeRoute('view', record.id)">
                        <template #icon><eye-outlined /></template>
                    </a-button>
                    <a-button type="primary" size="small" @click="changeRoute('edit', record.id)">
                        <template #icon><edit-outlined /></template>
                    </a-button>
                    <a-button danger size="small" @click="deleteUser(record.id)">
                        <template #icon><delete-outlined /></template>
                    </a-button>
                </template>
            </template>
          </a-table>
      </a-col>
    </a-row>
    <template #actions>
      <a-row justify="start">
      <a-button type="primary" size="small" @click="changeRoute('create', 0)">
          <template #icon><plus-circle-outlined /></template>
          Create User
      </a-button>
      </a-row>
  </template>
  </a-card>
</template>

<script>
import { EditOutlined, DeleteOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons-vue'
import changeRouteMixin from '@/mixin/changeRoute'
import { getHttp, deleteHttp } from '../../http/fetchApi'

export default {
  components: { EditOutlined, DeleteOutlined, EyeOutlined, PlusCircleOutlined },
  mixins: [changeRouteMixin],
  data: () => ({
    userList: [],
    columns: [{
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
    }]
  }),
  methods: {
    async getAllUsers () {
      const { data } = await getHttp('api/users')
      this.userList = data
    },
    async deleteUser (id) {
      await deleteHttp(`api/users/${id}`)
      await this.getAllUsers()
    }
  },
  async beforeMount () {
    this.getAllUsers()
  }
}
</script>

<style scoped>
.ant-btn{
  margin-left:5px;
}
</style>
