<template>
  <div class="submit-form">
    <div v-if="!submitted">
        <h2>Login</h2>
        <div class="form-group">
        <label for="title">Email</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="login.email"
          name="title"
        />
      </div>
        <div class="form-group">
        <label for="title">Password</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="login.password"
          name="title"
        />
      </div>

    <button @click="loginNow" class="btn btn-success">Login</button>
  <br><br> <test app-id="211241647437180" v-model="model" @sdk-init="handleSdkInit" >
  </test>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import UserService from '../services/UserService'
import { namespace } from 'vuex-class'
const user = namespace('user')

@Component
export default class Login extends Vue {
  private login: any = {
    email: '',
    password: ''
  };

  private submitted = false;
  name: ''
  email: ''
  personalID: ''
  picture: ''
  private FB = {}
  private model = {}
  private scope = {}

  handleSdkInit ({ FB, scope }) {
    this.FB = FB
    this.scope = scope
  }

  loginNow () {
    var data = {
      email: this.login.email,
      password: this.login.password
    }

    UserService.login(data)
      .then((response) => {
        if (response.data === 'User found') {
          this.$router.push({ name: 'list', params: { email: this.login.email, password: this.login.password } })
          // this.submitted = true
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getUserData () {
    this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
      user => {
        this.personalID = user.id
        this.email = user.email
        this.name = user.name
        this.picture = user.picture.data.url
      }
    )
  }

  @user.State
  public name!: string

  @user.Getter
  public nameUpperCase!: string

  @user.Action
  public updateName!: (newName: string) => void
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

function sdkLoaded(payload: any) {
  throw new Error('Function not implemented.');
}

function payload(payload: any) {
  throw new Error('Function not implemented.');
}

function onLogin() {
  throw new Error('Function not implemented.');
}

function onLogout() {
  throw new Error('Function not implemented.');
}

function sdkLoaded(payload: any) {
  throw new Error('Function not implemented.');
}

function payload(payload: any) {
  throw new Error('Function not implemented.');
}

function onLogin() {
  throw new Error('Function not implemented.');
}

function onLogout() {
  throw new Error('Function not implemented.');
}

function sdkLoaded(payload: any) {
  throw new Error('Function not implemented.');
}

function payload(payload: any) {
  throw new Error('Function not implemented.');
}

function onLogin() {
  throw new Error('Function not implemented.');
}

function onLogout() {
  throw new Error('Function not implemented.');
}

function sdkLoaded(payload: any) {
  throw new Error('Function not implemented.');
}

function payload(payload: any) {
  throw new Error('Function not implemented.');
}

function onLogin() {
  throw new Error('Function not implemented.');
}

function onLogout() {
  throw new Error('Function not implemented.');
}
