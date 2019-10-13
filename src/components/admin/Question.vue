<template>
  <div class="container my-3">
    <form class="question mx-auto" @submit.prevent="submitpage()">
      <label for="qtitle">題目名稱:</label>
      <input type="text" class="form-control" name="qtitle" id="qtitle"
      v-model="title"
      :class="{'is-invalid': errors.has('qtitle')}"
      placeholder="請輸入題目名稱"
      v-validate="'required'"
      >
      <span class="text-danger"
                v-if="errors.has('qtitle')">請輸入題目名稱</span>
      <div>
        <div>題目選項:</div>
        <label for="qchoosea">A:</label>
        <input type="text" class="form-control" name="qchoosea" id="qchoosea"
          v-model="choose[0]"
          :class="{'is-invalid': errors.has('qchoosea')}"
          placeholder="請輸入題目選項"
          v-validate="'required'"
        >
        <span class="text-danger"
                v-if="errors.has('qchoosea')">請輸入題目選項</span>
        <label for="qchooseb">B:</label>
        <input type="text" class="form-control" name="qchooseb" id="qchooseb"
          v-model="choose[1]"
          :class="{'is-invalid': errors.has('qchooseb')}"
          placeholder="請輸入題目選項"
          v-validate="'required'"
        >
        <span class="text-danger"
                v-if="errors.has('qchooseb')">請輸入題目選項</span>
        <label for="qchoosec">C:</label>
        <input type="text" class="form-control" name="qchoosec" id="qchoosec"
          v-model="choose[2]"
          :class="{'is-invalid': errors.has('qchoosec')}"
          placeholder="請輸入題目選項"
          v-validate="'required'"
        >
        <span class="text-danger"
                v-if="errors.has('qchoosec')">請輸入題目選項</span>
        <label for="qchoosed">D:</label>
        <input type="text" class="form-control" name="qchoosed" id="qchoosed"
          v-model="choose[3]"
          :class="{'is-invalid': errors.has('qchoosed')}"
          placeholder="請輸入題目選項"
          v-validate="'required'"
        >
        <span class="text-danger"
                v-if="errors.has('qchoosed')">請輸入題目選項</span>
      </div>
      <label for="qans">題目答案:</label>
      <input type="text" class="form-control" name="qans" id="qans"
        v-model="ans"
        :class="{'is-invalid': errors.has('qans')}"
        placeholder="請輸入題目答案"
        v-validate="'required'"
      >
      <span class="text-danger"
                v-if="errors.has('qans')">請輸入題目答案</span>
      <label for="qans">題目圖片:</label>
      <input ref="file" type="file" name="qchooseimg" class="form-control" id="qimg"
        @change="uploadfile()"
      >
      <img v-if="preview" :src="preview" class="mt-3" alt=""  height="300">
      <div class="text-right">
        <button  class="btn btn-primary mt-3" :disabled="disable">送出</button>
      </div>
    </form>

    <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-success"
            :class="{'bg-danger': error}">
            <h5 class="modal-title" v-if="error">新增失敗</h5>
            <h5 class="modal-title" v-else>新增成功</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-if="error">{{errormsg}}</p>
            <p v-else>新增成功</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      choose: [],
      title: '',
      ans: '',
      preview: '',
      img: '',
      modalshow: false,
      error: false,
      errormsg: '',
      disable: false
    }
  },
  methods: {
    uploadfile () {
      this.$store.dispatch('updateLoading', true)
      const file = this.$refs.file.files[0]
      const reader = new FileReader()
      const vm = this
      reader.readAsDataURL(file)
      reader.onload = function () {
        vm.preview = this.result
      }
      const storageRef = this.$firebase.storage().ref()
      const uploadTask = storageRef.child(`images/${file.name}`).put(file)
      uploadTask.on('state_changed', (snapshot) => {
        this.disable = true
        // this.progress = Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, () => {

      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.img = downloadURL
        }).then(() => {
          this.disable = false
          this.$store.dispatch('updateLoading', false)
        })
      })
    },
    submitpage () {
      this.$store.dispatch('updateLoading', true)
      this.$validator.validate().then((valid) => {
        let check = this.choose.some((item) => {
          return item.indexOf(this.ans) !== -1
        })
        if (valid) {
          if (!check) {
            this.error = true
            this.errormsg = '題目答案與正確答案不符'
            $('.modal').modal('show')
            this.$store.dispatch('updateLoading', false)
            return false
          }
          this.$firebase.database().ref(`/question`).push({
            title: this.title,
            chenckq: this.choose,
            ans: this.ans,
            img: this.img
          }, (error) => {
            if (error) {
              this.error = true
              this.errormsg = '新增失敗'
              $('.modal').modal('show')
            } else {
              this.error = false
              this.title = ''
              this.choose = ''
              this.ans = ''
              this.img = ''
              this.preview = ''
              this.$refs.file.value = ''
              $('.modal').modal('show')
            }
            this.$store.dispatch('updateLoading', false)
          })
        }
      })
    }
  }
}
</script>
