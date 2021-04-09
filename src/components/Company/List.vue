<template>
<div class="container">
  <h2>Companies List</h2>
  <p></p>
  <div class="row">
  <button class="btn btn-success" @click="gotoAdd">Add</button>
  </div>

  <div class="row">

  <table class="table">
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Company Logo</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="item in companies"  :key="item.company_name">
        <td>{{item.company_name}}</td>
        <td><img width='50%' height='50%' :src="'http://localhost:8000/' + item.company_logo"/> </td>
        <td><a  :name="'' + item.id+','+ item.company_name"  v-on:click="editNow($event)">Edit</a></td>
        <td><a href="#" :name="'' + item.id" v-on:click="deleteNow($event)">Delete</a></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
 </template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../services/UserService'

@Component
export default class List extends Vue {
  private login: any = {
    email: this.$route.params.email,
    password: ''
  };

  private companies:any = []
  private submitted = false

  mounted () {
    UserService.getCompanies(this.login.email)
      .then((response) => {
        this.companies = response.data.data
      })
      .catch((e) => {
        console.log(e)
      })
  }

  getId (id) {
    return id
  }

  deleteNow (id) {
    var tmp = id.target.name.split(',')
    Vue.swal({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: 'Cancel'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        UserService.deleteCompany(tmp[0])
          .then((response) => {
            Vue.swal('Saved!', '', 'success')
          })
          .catch((e) => {
            console.log(e)
          })
      } else if (result.isDenied) {
        Vue.swal('Changes are not saved', '', 'info')
      }
    })
  }

  gotoAdd () {
    this.$router.push({ name: 'add', params: { email: this.login.email, password: this.login.password } })
  }

  editNow (id) {
    var tmp = id.target.name.split(',')
    this.$router.push({ name: 'edit', params: { id: tmp[0], cn: tmp[1] } })
  }

  getImgUrl (pic) {
    return require(pic)
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
