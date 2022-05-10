<template>
  <a-card style="margin: 20px">
    <template #title>
      <h3>Users</h3>
    </template>
    <a-row>
      <a-col>
        <UserTableList />
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
import { PlusCircleOutlined } from '@ant-design/icons-vue'
import changeRouteMixin from '@/mixin/changeRoute'
import UserTableList from '@/components/userList'

export default {
  components: {
    UserTableList,
    PlusCircleOutlined
  },
  mixins: [changeRouteMixin],
  data: () => ({
    userList: [],
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
  })

}
</script>

<style scoped>
.ant-btn {
  margin-left: 5px;
}
</style>
