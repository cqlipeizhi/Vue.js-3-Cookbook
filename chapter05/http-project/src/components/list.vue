<template>
  <a-card style="margin:20px;">
  <template #title>
      <h3>Users</h3>
  </template>
  <a-row>
      <a-col>
         <a-table :dataSource="userList" :columns="columns">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">
                    <a-button type="primary" size="small" @click="changeComponent('view', record.id)">
                        <template #icon><eye-outlined /></template>
                    </a-button>
                    <a-button type="primary" size="small" @click="changeComponent('edit', record.id)">
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
      <a-button type="primary" size="small" @click="changeComponent('create', 0)">
          <template #icon><plus-circle-outlined /></template>
          Create User
      </a-button>
      </a-row>
  </template>
  </a-card>
</template>

<script>
import { getHttp, deleteHttp } from '../http/axiosApi'
import changeComponent from '../mixin/changeComponent'
import { EditOutlined, DeleteOutlined, EyeOutlined, PlusCircleOutlined } from '@ant-design/icons-vue'

export default {
  components: { EditOutlined, DeleteOutlined, EyeOutlined, PlusCircleOutlined },
  mixins: [changeComponent],
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
      const { data } = await getHttp(`${window.location.href}api/users`)
      this.userList = data
    },
    async deleteUser (id) {
      await deleteHttp(`${window.location.href}api/users/${id}`)
      await this.getAllUsers()
    }
  },
  async beforeMount () {
    await this.getAllUsers()
  }
}
</script>

<style scoped>
.ant-btn{
    margin-left: 5px;
}
</style>
