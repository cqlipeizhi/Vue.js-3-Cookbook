<template>
    <div class="container">
        <a-row juctify="center" align="middle">
            <a-col>
                <a-card style="margin:20px;">
                    <template #title>
                        <h3>User Login</h3>
                    </template>
                    <a-row justify="center" align="middle">
                        <a-col>
                            <a-form-item label="Username">
                                <a-input v-model:value="username" placeholder="Username or e-mail" />
                            </a-form-item>
                        </a-col>
                        <a-col>
                            <a-form-item label="Password">
                                <a-input type="password" v-model:value="password" placeholder="Your password" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <template #actions>
                        <a-row>
                            <a-button type="primary" size="small" @click="userSignIn">
                                <template #icon><login-outlined /></template>
                                Sign-in</a-button>
                        </a-row>
                    </template>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { LoginOutlined } from '@ant-design/icons-vue'

export default {
  components: { LoginOutlined },
  data: () => ({
    username: '',
    password: '',
    error: false
  }),
  methods: {
    userSignIn () {
      if (this.username && this.password) {
        window.sessionStorage.setItem('auth', window.btoa(JSON.stringify({ username: this.username })))
        this.error = true
        this.$router.replace('/user')
      }
      this.error = true
      return false
    }
  }
}
</script>

<style scoped>
.container{
    height:100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
}

</style>
