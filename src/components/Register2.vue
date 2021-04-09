<template>
  <div>
     <div class="form-group">
        <label for="title">Company Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="companyName"
          name="title"
        />
      </div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>
    <div class="form-group">
    <label for="uploadnow">Company Logo</label>
    <input type="file" id="uploadnow"  class="form-control" @change="onFileChange" />
    </div>

    <button class="btn btn-success"  @click="upload">
      Register
    </button>
    <div class="alert alert-light" role="alert">{{ message }}</div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../services/UserService'

@Component
export default class Register2 extends Vue {
      private selectedFiles:any
      private currentFile= undefined
      private progress= 0
      private message= ''
      private email = this.$route.params.email
      private password = this.$route.params.password
      private companyName = ''
      private file = undefined

      private fileInfos:any= []
      onFileChange (e) {
        this.selectedFiles = e.target.files
      }

      upload () {
        this.progress = 0
        this.currentFile = this.selectedFiles.item(0)
        UserService.register(this.currentFile, e => {
          this.progress = Math.round((100 * e.loaded) / e.total)
        }, { companyName: this.companyName, email: this.email, password: this.password })
          .then(response => {
            this.message = response.data.message
            Vue.swal('Registered')
          })
          .catch(() => {
            this.progress = 0
            this.message = 'Could not upload the file!'
            this.currentFile = undefined
          })

        this.selectedFiles = undefined
      }
}
</script>
