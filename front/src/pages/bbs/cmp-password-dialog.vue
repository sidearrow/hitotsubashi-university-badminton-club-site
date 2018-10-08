<template>
  <v-dialog
    v-model="isOpen"
  >
    <v-card>
      <v-card-title>
        <span class="title">パスワードを入力して下さい</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="パスワード"
          v-model="inputPassword"
          hint="半角数字 4 字で入力してください"
          :error="isError"
          :error-messages="errorMessages"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          outline
          color="primary"
          @click="clickSubmit"
        >OK</v-btn>
        <v-btn
          outline
          color="primary"
          @click="close"
        >キャンセル</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    open: function () {
      this.isOpen = true
    },
    close: function () {
      this.isOpen = false
      this.isError = false
      this.inputPassword = ''
      this.$emit('close-dialog')
    },
    outputError: function () {
      this.isError = true
      this.errorMessages = 'パスワードが間違っています'
    },
    clickSubmit: function () {
      this.$emit('click-submit', this.inputPassword)
    }
  },
  data: function () {
    return {
      isOpen: false,
      isError: false,
      errorMessages: [],
      inputPassword: '',
    }
  },
  watch: {
    'isOpen': function () {
      if (this.isOpen) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>