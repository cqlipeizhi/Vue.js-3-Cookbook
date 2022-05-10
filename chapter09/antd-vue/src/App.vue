<template>
  <div id="app">
    <layout>
      <a-form
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <h1>User Registration</h1>
        <p>Main user registration form</p>
        <a-card title="Personal Information">
          <a-form-item label="Name">
            <a-input v-model="form.name" />
          </a-form-item>
          <a-form-item label="Enail">
            <a-input v-model="form.email" />
          </a-form-item>
          <a-form-item label="Phone">
            <a-input v-model="form.phone" />
          </a-form-item>
          <a-form-item label="Cellphone">
            <a-input v-model="form.cellphone" />
          </a-form-item>
          
        </a-card>
        <a-card title="Address" style="margin-top:16px;">
          <a-form-item label="Address">
            <a-input v-model="form.address" />
          </a-form-item>
          <a-form-item label="Zipcode">
            <a-input v-model="form.zipcode" />
          </a-form-item>
          <a-form-item label="Country">
            <a-input v-model="form.country" />
          </a-form-item>
        </a-card>
        <a-card title="user Information" style="margin-top:16px;">
          <a-form-item label="username">
            <a-input v-model="form.username" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password type="password" visibility-toggle v-model="form.password" />
          </a-form-item>
        </a-card>
        <a-form-item :wrapper-col="{span:14,offset:4}">
          <a-button type="primary">Create</a-button>
          <a-button style="margin-left:10px;">Cancel</a-button>
        </a-form-item>
      </a-form>
    </layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  },
  data: () => ({
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    form: {
      name: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      cellphone: '',
      address: '',
      zipcode: '',
      country: ''
    }
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
