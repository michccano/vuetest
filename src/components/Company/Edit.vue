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
      Edit Company
    </button>
    <div class="alert alert-light" role="alert">{{ message }}</div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserService from '../../services/UserService'

@Component
export default class Edit extends Vue {
      private selectedFiles:any
      private currentFile= undefined
      private progress= 0
      private message= ''
      private companyName = this.$route.params.cn
      private email = this.$route.params.email
      private file = undefined
      private id= this.$route.params.id

      private fileInfos:any= []
      onFileChange (e) {
        this.selectedFiles = e.target.files
      }

      upload () {
        this.progress = 0
        this.currentFile = this.selectedFiles.item(0)
        UserService.edit(this.currentFile, e => {
          this.progress = Math.round((100 * e.loaded) / e.total)
        }, { companyName: this.companyName, email: this.email, id: this.id })
          .then(response => {
            this.message = response.data.message
            Vue.swal('Company Updated')
            this.$router.push({ name: 'list', params: { email: this.email } })
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
