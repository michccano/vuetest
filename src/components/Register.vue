<template>
  <div class="submit-form">
    <div v-if="!submitted">
        <h2>Registration</h2>
      <div class="form-group">
        <label for="title">Email</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="registration.email"
          name="title"
        />
      </div>
        <div class="form-group">
        <label for="title">Password</label>
        <input
          type="password"
          class="form-control"
          id="title"
          required
          v-model="registration.password"
          name="title"
        />
      </div>

    <button @click="gotoNext" class="btn btn-success">Next</button>
          <br><br>
    <div class="form-group">
        <label for="description">or Facebook</label>
      </div>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserDataService from '../services/UserService'

@Component
export default class Login extends Vue {
private registration: any = {
  id: null,
  email: '',
  password: ''
}

  private submitted = false;

  gotoNext () {
    var data = {
      email: this.registration.email
    }

    this.$router.push({ name: 'register2', params: { email: this.registration.email, password: this.registration.password } })
  }

  newMember () {
    this.submitted = false
    this.registration = {}
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
